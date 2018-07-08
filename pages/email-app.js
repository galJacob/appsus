import emailsService from '../services/emailApp-service/emails.js';
import emailList from '../cmps/mister-Email/email-list.js';
import emailDetails from '../cmps/mister-Email/email-details.js';
import busService from '../../services/event-bus.service.js';
import emailStatus from '../cmps/mister-Email/email-status.js';
import emailCompose from '../cmps/mister-Email/email-compose.js';

export default {
    template: ` 
    <section  class="mister-email">
        <email-compose @emailSent="onAddNewEmail" @closeCompose="composeShown=!composeShown"  v-if="composeShown"></email-compose>
    <button @click="composeShown=!composeShown" class="modal-btn">send a new E-mail</button>
    <!-- <keep-alive> -->
    <!-- </keep-alive> -->
      <email-list  :readEmailsCount="readEmailsCount" :emails="emails" :filteredEmails="setFilteredEmails" @emailHasRead="updateReadEmails" 
      @emailSelected="updateSelectedEmail"></email-list>
      <email-details v-if="selectedemail" :selectedemail="selectedemail"></email-details>
      <email-status :readEmailsCount="readEmailsCount" :emails="emails" :readEmails="displayReadEmails"></email-status>
        </section>`,
    data() {
        return {
            emails: [],
            selectedemail: null,
            currActionedId: null,
            readEmails: null,
            filteredEmails: null,
            composeShown: false,
            readEmailsCount: null,
        }
    },
    created() {
        emailsService.query().then(emails => {
            this.emails = emails;
            this.filteredEmails = emails;
            this.selectedemail = emails[0];
            this.$emit('createdEmails');
            emailsService.countReadenEmails()
                .then(readEmails => {
                    this.readEmails = readEmails;
                    emailsService.countReadenEmails().then(count => {
                        this.readEmailsCount = count;
                    })
                })
        })
    },
    methods: {
        updateSelectedEmail(id) {
            emailsService.getEmailById(id).then(selectedemail => {
                this.selectedemail = selectedemail;
            })
        },
        updateReadEmails() {
            this.readEmails++;
        },
        clone(item) {
            return JSON.parse(JSON.stringify(item));
        },
        updateActionId(id) {
            this.currActionedId = id;
        },
        onAddNewEmail(newEmail) {
            console.log(newEmail);
            emailsService.addNewEmail(newEmail);
        }
    },
    computed: {
        claimForWatcher() {
            return this.clone(this.emails);
        },
        displayReadEmails() {
            return this.readEmails;
        },
        setFilteredEmails() {
            busService.$on('gotFilter', filter => {
                this.filteredEmails = emailsService.getFilteredEmails(filter);
            })
            return this.filteredEmails;
        }
    },
    watch: {
        claimForWatcher(emailsAfterAction, emailsBeforeAction) {
            busService.$on('actionOnAnEmail', this.updateActionId);
            if (emailsBeforeAction > emailsAfterAction) {
                this.readEmails--;
                let idxOfDeletedEmail = emailsBeforeAction.findIndex(email => email.id === this.currActionedId);
                this.selectedemail = emailsAfterAction[idxOfDeletedEmail] ? emailsAfterAction[idxOfDeletedEmail] : emailsAfterAction[idxOfDeletedEmail - 1]
            }
        },
        emails: {
            handler() {
                busService.$on('changedEmailToUnread', () => { this.readEmailsCount-- });
                emailsService.countReadenEmails().then(count => {
                    this.readEmailsCount = count;
                })
            },
            deep: true,
        },
    },
    components: {
        emailList,
        emailDetails,
        emailStatus,
        emailCompose,
    },
}
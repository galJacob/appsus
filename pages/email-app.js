import emailsService from '../services/emailApp-service/emails.js';
import emailList from '../cmps/mister-Email/email-list.js';
import emailDetails from '../cmps/mister-Email/email-details.js';
// import emailDetails
export default {
    template: `
        <section class="mister-email" >
      <email-list :emails="emails" @emailSelected="updateSelectedEmail" ></email-list >
      <email-details v-if="selectedemail" :selectedemail="selectedemail"></email-details>
        </section>`,
    data() {
        return {
            emails: [],
            selectedemail: null,
        }
    },
    created() {
        emailsService.query().then(emails => {
            this.emails = emails;
            this.selectedemail = emails[0]; 
            this.$emit('createdEmails');
        })
    },
    methods: {
        updateSelectedEmail(selectedemail) {
            this.selectedemail = selectedemail;
            console.log(this.selectedemail);
        }
    },
    components: {
        emailList,
        emailDetails
    },
}
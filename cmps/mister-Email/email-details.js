import emailsService from '../../services/emailApp-service/emails.js';
import busService from '../../services/event-busService.js';
export default {
    props: ['selectedemail'],
    template: `
        <section :class="{'email-details-shown': isShownMobile}" class="email-details">
       <h1> {{selectedemail.subject}}</h1>
      <h2> <span>sent at:</span> {{convertTimeStampToDate }} </h2>
      <i @click.stop="onDeleteEmail(selectedemail.id)" class="fas fa-trash delete-btn" aria-hidden="true"></i>
       <hr>
      <p> {{selectedemail.body}}</p>
      <i v-if="shouldDisplayReturnBtnMbl" @click="isShownMobile=!isShownMobile" class="fas fa-share"></i>
        </section>`,
    data() {
        return {
            isShownMobile: false,
            shouldDisplayReturnBtnMbl: false,
        }
    },
    created() {
        if (window.innerWidth < 500)
            this.shouldDisplayReturnBtnMbl = true;
    },
    computed: {
        convertTimeStampToDate() {
            return moment(this.selectedemail.sentAt).format('LLL');
        },
    },
    methods: {
        onDeleteEmail(id) {
            emailsService.deleteEmailById(id);
            busService.$emit('actionOnAnEmail', id);
        }
    },
    watch: {
        selectedemail() {
            busService.$on('showDetailsInMobile');
            this.isShownMobile = true;
        }
    },
}
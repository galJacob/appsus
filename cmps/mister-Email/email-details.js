import emailsService from '../../services/emailApp-service/emails.js';
import busService from '../../services/event-bus.service.js';
export default {
    props: ['selectedemail'],
    template: `
        <section class="email-details">
       <h1> {{selectedemail.subject}}</h1>
      <h2>  <span>sent at:</span> {{convertTimeStampToDate }} </h2>
      <button @click.stop="onDeleteEmail(selectedemail.id)">x</button>
       <hr>
      <p> {{selectedemail.body}}</p>
        </section>`,
    data() {
        return {
        }
    },
    created() {
    },
    computed: {
        convertTimeStampToDate() {
            return moment(this.selectedemail.sentAt).format('LLL');
        }
    },
    methods: {
        onDeleteEmail(id) {
            emailsService.deleteEmailById(id);
            busService.$emit('actionOnAnEmail', id);
        }
    },
}
import emailPreview from './email-preview.js';
import emailsService from '../../services/emailApp-service/emails.js';
import busService from '../../services/event-bus.service.js';
import emailFilter from './email-filter.js';


export default {
    props: ['emails','filteredEmails'],
    template: `
    <section class="email-list">
    <email-filter></email-filter>   
      <template v-for="email in filteredEmails">
      <email-preview @click.native="onEmailSelected(email.id)" :email="email" :key="email.id" ></email-preview>
      </template>
        </section>`,
    data() {
        return {
        }
    },
    created() {

    },
    methods: {
        onEmailSelected(id) {
            //function for that:
            emailsService.getEmailById(id).then(email => {
                this.$emit('emailSelected', id);
                if (!email.isRead) {
                this.$emit('emailHasRead');
                emailsService.onEmailRead(email);
                    email.isRead = true;
                    this.readEmails++;
                }
            })
            // console.log(email);
        }
    },
    watch: {
        readEmails(currReadEmails) {
            // busService.$emit('emailHasRead', currReadEmails);
        }
    },
    components: {
        emailPreview,
        emailFilter,
    }
}
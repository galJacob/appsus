import emailPreview from './email-preview.js';
import emailsService from '../../services/emailApp-service/emails.js';
import busService from '../../services/event-bus.service.js';
import emailFilter from './email-filter.js';


export default {
    props: ['emails', 'filteredEmails','readEmailsCount'],
    template: `
    <section class="email-list">
    <email-filter></email-filter> 
        <div class="read-emails-container">
        <strong>inbox:</strong>
        <strong>read emails: {{readEmailsCount}}</strong>  
        </div>
          <template v-for="email in filteredEmails">
      <email-preview  @click.native="onEmailSelected(email.id),openDetailsInMobile"  :email="email" :key="email.id" ></email-preview>
      </template>   
        </section>`,
    data() {
        return {
        }
    },
    created() {
        
    },
    computed: {
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
        },
        openDetailsInMobile(){
            busService.$emit('showDetailsInMobile');
        }
    },
    watch: {
       
    },

    components: {
        emailPreview,
        emailFilter,
    }
}
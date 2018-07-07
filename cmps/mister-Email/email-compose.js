import emailsService from '../../services/emailApp-service/emails.js';
import emailStatus from './email-status.js';
import utils from '../../services/utils.js';
export default {
    props: ['composeShown'],
    template: `
        <section class="email-compose">
                <div class="compose-modal">
                <form @submit="sendEmail" >
                   <input type="text" v-model="newEmail.subject"/>
                   <textarea v-model="newEmail.body"></textarea>
                   <input type="submit" value = "submit" />
                </form>
                    <button @click="$emit('closeCompose')" >close compose</button>
                    email compose
                </div>
        </section>`,
    data() {
        return {
            newEmail: {
                id:utils.makeid(),
                subject: '',
                body: '',
                sendAt: null,
                isRead: false,
            }
            // composeShown:false,
        }
    },
    created() {
    },
    computed: {
    },
    methods: {
        sendEmail() {
            this.newEmail.sendAt = Math.floor(Date.now()/1000) ;
            console.log(Math.floor(Date.now()/1000));
            
            this.$emit('emailSent', this.newEmail);

            this.$emit('closeCompose');
            this.newEmail = emailsService.emptyNewEmail();
        }
    },
}
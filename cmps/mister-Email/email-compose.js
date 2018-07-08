import emailsService from '../../services/emailApp-service/emails.js';
import utils from '../../services/utils.js';
export default {
    props: ['composeShown'],
    template: `
        <section class="email-compose">
                <div class="compose-modal">
                    <h1>send a new E-mail</h1>
                        <form @submit="sendEmail" >
                            <div>
                            <strong>subject:</strong>
                            <input type="text" v-model="newEmail.subject"/>
                            </div>
                            <div>
                            <strong>body:</strong>
                            <textarea v-model="newEmail.body"></textarea>
                            </div>
                           <input type="submit" value = "submit" />
                        </form>
                        <i @click="$emit('closeCompose')" class="fas fa-share "></i>
                </div>
        </section>`,
    data() {
        return {
            newEmail: {
                id: utils.makeid(),
                subject: '',
                body: '',
                sendAt: null,
                isRead: false,
            }
            // composeShown:false,
        }
    },
    created() {
        if (window.innerWidth < 500) {
            console.log(window.innerWidth);   
        }
    },
    computed: {
    },
    methods: {
        sendEmail() {
            this.newEmail.sendAt = Math.floor(Date.now() / 1000);
            console.log(Math.floor(Date.now() / 1000));
            this.$emit('emailSent', this.newEmail);

            this.$emit('closeCompose');
            this.newEmail = emailsService.emptyNewEmail();
        }
    },
}
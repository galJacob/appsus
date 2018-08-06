import emailsService from '../../services/emailApp-service/emails.js';
import utils from '../../services/utils.js';
export default {
    props: ['composeShown'],
    template: `
        <section class="email-compose">
                <div class="compose-modal">
                    <h1 ref="h1">send a new E-mail</h1>
                    <!-- <span class="dots" ref="span">a </span> -->
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
        }
    },
    computed: {
    },
    methods: {
        sendEmail() {
            let countDots = 0;
            this.$refs.h1.innerHTML = 'please wait';
            let interval = setInterval(() => {
                this.$refs.h1.innerHTML += '.';
                if (countDots === 3)
                    this.$refs.h1.innerHTML = 'please wait';
                if (countDots === 6) {
                    this.$refs.h1.innerHTML = 'succuss! email sent';
                    clearInterval(interval)
                }
                countDots++;
            }, 1000);
            setTimeout(() => {
                this.newEmail.sendAt = Math.floor(Date.now() / 1000);
                this.$emit('emailSent', this.newEmail);
                this.$emit('closeCompose');
                this.newEmail = emailsService.emptyNewEmail();
            }, 8000);

        }
    },
}
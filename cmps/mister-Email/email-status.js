import emailsService from '../../services/emailApp-service/emails.js';
import busService from '../../services/event-bus.service.js';
import emails from '../../services/emailApp-service/emails.js';

export default {
    props: ['readEmails', 'emails','readEmailsCount'],
    template: `
        <section class="email-status">
        <div class="progress-bar">
            <span class="bar" :style="{ width: setProgValue  + '%' }"></span>
            <span class="prec-value">{{setProgValue}}%</span>
        </div>
        <!-- <progress :value="readEmails" :max="emails.length">
        </progress> -->
        </section>`,
    data() {
        return {
            readedEmails:null,
        }
    },
    created() {
        this.readedEmails = this.readEmails;
    },
    computed: {
        setProgValue() {
            busService.$on('updateReadedEmails', readedEmails=>{this.readedEmails = readedEmails});
            if(!parseInt((this.readEmailsCount / this.emails.length) * 100)){
                return 0;
            }
            return parseInt((this.readEmailsCount / this.emails.length) * 100);
        }
    },
    watch: {
        progValue() {
            console.log('c');
        }
    },
    methods: {
    },
}
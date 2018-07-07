import emailsService from '../../services/emailApp-service/emails.js';
import busService from '../../services/event-bus.service.js';
export default {
    props: ['readEmails', 'emails'],
    template: `
        <section class="email-status">
        <progress :value="readEmails" :max="emails.length">
        </progress>
        </section>`,
    data() {
        return {
        }
    },
    created() {
    },
    computed: {
    },
    watch: {
    },
    methods: {
    },
}
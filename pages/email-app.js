import emailsService from '../services/emailApp-service/emails.js';

export default {
    template: `
        <section class="mister-email">
      {{emails}}
        </section>`,
    data() {
        return {
            emails: [],
        }
    },
    created() {
        emailsService.query().then(emails => {
            this.emails = emails;
        })
    }
}
import emailsService from '../../services/emailApp-service/emails.js';

export default {
    props: ['email'],
    template: `
        <section :class="{gray:!email.isRead}" class="email-preview" v-if="email">
            <i v-if="email.isRead" class="fas fa-envelope-open"></i>
            <i v-if="!email.isRead" class="fas fa-envelope"></i>
           <span> {{convertTimeStampToDate}} </span>
       <strong> {{email.subject}}</strong>
      <p> {{shorthandBodyPreview}}</p>
        </section>`,
    data() {
        return {
        }
    },
    created() {
    },
    computed: {
        convertTimeStampToDate() {
            return moment(this.email.sentAt).format('LT');
        },
        shorthandBodyPreview() {
            if (this.email.body.length > 20)
                return `${this.email.body.substr(0, 20)}...`;
            return this.email.body;
        },
    },
    methods: {

    },
}
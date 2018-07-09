import emailsService from '../../services/emailApp-service/emails.js';
import busService from '../../services/event-bus.service.js';

export default {
    props: ['email'],
    template: `
        <section :class="{gray:!email.isRead}" class="email-preview" v-if="email">
            <i @click.stop="onMakeEmailUnread" v-if="email.isRead" class="fas fa-envelope-open"></i>
            <i  @click.stop="onMakeEmailUnread" v-if="!email.isRead" class="fas fa-envelope"></i>
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
            return moment(this.email.sentAt).format('LLL');
        },
        shorthandBodyPreview() {
            if (this.email.body.length > 20)
                return `${this.email.body.substr(0, 20)}...`;
            return this.email.body;
        },
    },
    methods: {
        onMakeEmailUnread(){
            if(this.email.isRead){
                this.email.isRead = false;
                busService.$emit('changedEmailToUnread');
            } 
        }
    },
}
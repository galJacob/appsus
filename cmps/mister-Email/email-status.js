import emailsService from '../../services/emailApp-service/emails.js';
import busService from '../../services/event-bus.service.js';
export default {
    props: ['readEmails', 'emails'],
    template: `
        <section class="email-status">
        <progress :value="setProgValue" :max="100">
           
        </progress>
        </section>`,
    data() {
        return {
            progValue :parseInt((this.readEmails/this.emails.length)*100),
        }
    },
    created() {
        console.log('c');
        console.log(this.progValue);
        
    },
    computed: {
        setProgValue(){
        }
    },
    watch: {
        progValue(){
            console.log('c');
            
        }
    },
    methods: {
    },
}
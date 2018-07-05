import emailsService from '../../services/emailApp-service/emails.js';

export default {
    props: ['email'],
    template: `
        <section :class="{gray:email.isRead}" class="email-preview" v-if="email">
       <h3> {{email.subject}}</h3>
      <p> msadasdasdsadsadsa</p>
      <button class="deleteBtn">x</button>
      {{isRead}}
        </section>`,
    data() {
        return {
        }
    },
    created() {
    },
    computed: {
        isRead() {
            return this.email.isRead;
        }
    },
    methods: {
       
    },
}
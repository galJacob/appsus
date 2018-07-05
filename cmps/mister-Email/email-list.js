
export default {
    props: ['emails'],
    template: `
        <section class="email-list">
      <ul>
      <li @click="onEmailSelected(email)" v-for="email in emails"> {{email.subject}}</li>
      </ul>
        </section>`,
    data() {
        return {
            // emails: [],
        }
    },
    created() {
    },
    methods: {
        onEmailSelected(email) {
            this.$emit('emailSelected',email)
            // console.log(email);
        }
    },
}
import emailPreview from './email-preview.js';

export default {
    props: ['emails'],
    template: `
    <section class="email-list">
    <input placeholder="search for an E-mail" />
      <div @emailDeleted="passItToEmailApp" @click="onEmailSelected(email.id)" v-for="email in emails">
      <email-preview :email="email" ></email-preview>
      </div>
        </section>`,
    data() {
        return {
            // emails: [],
        }
    },
    created() {
    },
    methods: {
        onEmailSelected(id) {
            console.log(id);   
            this.$emit('emailSelected', id)
            // console.log(email);
        }
    },
    components: {
        emailPreview,
    }
}
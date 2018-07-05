export default {
    props: ['email'],
    template: `
        <section class="email-details">
       <h1> {{selectedemail.subject}}</h1>
      <h2>  <span>sent at:</span> {{convertTimeStampToDate }} </h2>
       <hr>
      <p> {{selectedemail.body}}</p>
        </section>`,
    data() {
        return {
        }
    },
    created() {
    },
    computed: {
        convertTimeStampToDate() {
            return moment.unix(this.selectedemail.sentAt).format('dddd, MMMM Do, YYYY h:mm:ss A')
        }
    },
}
import emailsService from '../../services/emailApp-service/emails.js';
export default {
    props: ['selectedemail'],
    template: `
        <section class="email-details">
       <h1> {{selectedemail.subject}}</h1>
      <h2>  <span>sent at:</span> {{convertTimeStampToDate }} </h2>
      <button @click.stop="onDeleteEmail(selectedemail.id)">x</button>
       <hr>
      <p> {{selectedemail.body}}</p>
        </section>`,
    data() {
        return {
        }
    },
    created() {
        // BookService.getBookById(this.$route.params.bookId)
        //  .then(selectedBook =>{
        //      this.book = selectedBook;
        //  })
    },
    computed: {
        convertTimeStampToDate() {
            return moment.unix(this.selectedemail.sentAt).format('dddd, MMMM Do, YYYY h:mm:ss A')
        }
    },
    methods: {
        onDeleteEmail(id) {
            emailsService.deleteEmailById(id);
            this.$emit('emailDeleted');
            // console.log(id);
        }
    },
}
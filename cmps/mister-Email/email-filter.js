import busService from '../../services/event-bus.service.js';
export default {
    // props: ['readEmails', 'emails'],
    template: `
        <section class="email-filter" @keyup.enter="setBusService">
        <input placeholder="search for an E-mail" v-model="filter.txt" />
         all <input type="radio" value="all" v-model="filter.emailStatus"/>
        read <input type="radio" value="read" v-model="filter.emailStatus"/> 
        unread <input type="radio" value="unread" v-model="filter.emailStatus"/>
        </section>`,
    data() {
        return {
            filter: {
                txt: '',
                emailStatus: 'all',
            }
        }
    },
    created() {
    },
    computed: {
    },
    watch: {
    },
    methods: {
        setBusService(){
            busService.$emit('gotFilter',this.filter);
        }
    },
}
import busService from '../../services/event-bus.service.js';
export default {
    // props: ['readEmails', 'emails'],
    template: `
        <section class="email-filter" @keyup.enter="setBusService">
            <div class="search-input-container">
                <input type="text" placeholder="search..." v-model="filter.txt" />
                <i class="fas fa-search "></i>
            </div>
            <select v-model="filter.emailStatus">
                <option >all</option>
                <option>read</option>
                <option>unread</option>
            </select>
            {{filter.emailStatus}}
        </section>`,
        // value="unread" v-model="filter.emailStatus"  
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
        setBusService() {
            busService.$emit('gotFilter', this.filter);
        }
    },
}
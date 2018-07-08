import busService from '../../services/event-bus.service.js';
export default {
    // props: ['readEmails', 'emails'],
    template: `
        <section class="email-filter" @keyup.enter="setBusService">
            <div class="search-input-container">
                <input type="text" placeholder="search..." v-model="filter.txt" />
                <i class="fas fa-search "></i>
            </div>
            
            <div class="radio-buttons-container">
                all <input type="radio" value="all" v-model="filter.emailStatus"/>
               read <input type="radio" value="read" v-model="filter.emailStatus"/> 
               unread <input type="radio" value="unread" v-model="filter.emailStatus"/>
            </div>
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
import busService from '../../services/event-bus.service.js';
export default {
    // props: ['readEmails', 'emails'],
    template: `
        <section class="email-filter" @keyup.enter="setBusService">
            <div class="search-input-container">    
                <input type="text" placeholder="search..." v-model="filter.txt" />
                <i class="fas fa-search "></i>
            </div>  
            <div class="check-box-select-container">
                <select @change="setBusService" v-model="filter.emailStatus">
                    <option>all</option>
                    <option>read</option>
                    <option>unread</option>
                </select>
                <input type="checkbox" v-model="filter.date">
            </div>
        </section>`,
        // value="unread" v-model="filter.emailStatus"  
    data() {    
        return {
            filter: {
                txt: '',
                emailStatus: 'all',
                date:false,
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
            console.log(this.filter);
            busService.$emit('gotFilter', this.filter);
        }
    },
}
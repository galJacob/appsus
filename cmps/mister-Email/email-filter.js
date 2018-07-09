import busService from '../../services/event-busService.js';
export default {
    template: `
        <section class="email-filter" @keyup.enter="setBusService">
            <div class="search-input-container">    
                <input type="text" placeholder="search..." @input="setBusService" v-model="filter.txt" />
                <i @click="setBusService" class="fas fa-search "></i>
            </div>  
            <div class="check-box-select-container">
               <strong>by status</strong>
                <select @change="setBusService" v-model="filter.emailStatus">
                    <option>all</option>
                    <option>read</option>
                    <option>unread</option>
                </select>
                <strong>by date</strong> <input type="checkbox" @change="setBusService" v-model="filter.date">
            </div>
        </section>`,
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
            busService.$emit('gotFilter', this.filter);
        }
    },
}
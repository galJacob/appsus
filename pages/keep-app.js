import keeps from '../services/keepApp-service/keeps.js'

export default {
    template: `
    <section class="mister-keep">
    <h1>NOTES APP</h1>

        <ul>
            <li v-for = '(note,idx) in notes'>
                <div class="card">
                    <img v-if = 'note.imgUrl' :src="note.imgUrl" alt="note-image" style="width:100%">
                    <div class="card-container">
                        <h4><b>{{note.title}}</b></h4> 
                        <p v-if = 'note.text'>{{note.text}}</p> 
                    </div>
                </div>
            </li>
        </ul>

        </section>`,

        
    data() {
        return {
            notes:[],
        }
    },

    created() {
        this.loadNotes();         

    },

    methods:{
        loadNotes(){
            keeps.getNotes()
                .then(notes=>{
                    this.notes = notes;
                })
        }
    },

    components:{
        keeps,
    }
}
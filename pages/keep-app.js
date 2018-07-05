import keeps from '../services/keepApp-service/keeps.js'
import textNote from '../cmps/mister-keep/note-txt-cmp.js'
import imgNote from '../cmps/mister-keep/note-img-cmp.js'
import todosNote from '../cmps/mister-keep/note-todos-cmp.js'
import textNotes from '../cmps/mister-keep/text-notee-cmp.js'

export default {
    template: `
    <section class="mister-keep">
        <h1>NOTES APP</h1>
       
            <component v-for="(note, idx) in notes" :is="note.noteType" :key="idx" :data="note.data"></component>                   
    </section>`,

        
    data() {
        return {
            notes:[]
                
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
        },

    },

    components:{
        keeps,
        textNote,
        todosNote,
        imgNote,
        

        
    }
}
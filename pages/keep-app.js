import keeps from '../services/keepApp-service/keeps.js'
import textNote from '../cmps/mister-keep/note-txt-cmp.js'
import imgNote from '../cmps/mister-keep/note-img-cmp.js'
import todosNote from '../cmps/mister-keep/note-todos-cmp.js'
import updateNote from '../cmps/mister-keep/update-note-cmp.js'
import addNote from '../cmps/mister-keep/add-note-cmp.js'

export default {
    template: `
    <section class="mister-keep">
        <h1>NOTES APP</h1><button @click = "toggleAddModal">Add Note</button>
                <input type="search" id="mySearch" placeholder='search note' v-model='textSearch' @input='searchNote'>
            <div class = "notes-list flex">
                <component v-for="(note, idx) in notes" :is="note.noteType" :key="idx"
                :data="note.data" v-on:openUpdateModal = "updateNote" v-on:deleteNote ="removeNote"
                 v-on:notePined = "swapNotes"></component>  
                </div>
                <update-note v-if = 'openModal' :note="modalNote" v-on:close = "updateNote">
                </update-note>
                <add-note v-if='addModal' v-on:closeAdd= "toggleAddModal">
                </add-note>                 
    </section>`,


    data() {
        return {
            notes: [],
            openModal: false,
            modalNote: null,
            addModal: false,
            textSearch:"",
        }

    },

    created() {
        
        this.loadNotes();
        
    },
    
    methods: {
        updateNote(note) {
            this.modalNote = (this.modalNote) ? null : note;
            this.openModal = (this.openModal) ? false : true;
        },
        
        toggleAddModal() {
            this.addModal = (this.addModal) ? false : true;
        },
        
        removeNote(noteId) {
            keeps.deleteNote(noteId);
            this.loadNotes();
        },
        
        loadNotes() {
            keeps.getNotes()
            .then(notes => {
                this.notes = notes;
                
            })
        },
        
        swapNotes(noteId) {
            keeps.notePreferences(noteId);
            this.loadNotes();
        },

        searchNote() {
            this.notes = keeps.filterNotes(this.textSearch);
            
        }    
    },
        
    
    components: {
        keeps,
        textNote,
        todosNote,
        imgNote,
        updateNote,
        addNote,



    }
}
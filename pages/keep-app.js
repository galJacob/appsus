import keeps from '../services/keepApp-service/keeps.js'
import textNote from '../cmps/mister-keep/note-txt-cmp.js'
import imgNote from '../cmps/mister-keep/note-img-cmp.js'
import todosNote from '../cmps/mister-keep/note-todos-cmp.js'
import updateNote from '../cmps/mister-keep/update-note-cmp.js'
import addNote from '../cmps/mister-keep/add-note-cmp.js'

export default {
    template: `
        <section class="mister-keep">
            <h1>NOTES APP</h1>
            <div class="notes-menu flex">
                <img class ="add-note-btn" src = 'img/notes-img/addNote.png'  @click = "toggleAddModal">
                <input type="search" id="mySearch" placeholder='search note' v-model='textSearch' @input='searchNote'>
            </div>
            <div class = "notes-list flex wrap">
                <component v-for="(note, idx) in notes" :is="note.noteType" :key="idx"
                :data="note.data" v-on:openUpdateModal = "toggleUpdateModal" v-on:deleteNote ="removeNote"
                v-on:notePined = "swapNotes" v-on:changeMark='saveUpdatedNote' v-on:changeColor='saveUpdatedNote'></component>  
            </div>
            <update-note v-if = 'openModal' :note="modalNote" v-on:closeUpdateModal = "toggleUpdateModal" v-on:saveNewNote="saveUpdatedNote">
            </update-note>
            <add-note v-if='addModal' v-on:closeAdd= "toggleAddModal" v-on:addNote = 'addNewNote'>
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
        console.log(this.notes);
        
        
    },
    
    methods: {
        toggleUpdateModal(note) {
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
            }).catch(err=> console.warn(err))
        },
        
        swapNotes(noteId) {
            keeps.notePreferences(noteId)
            .then(notes=>{
                this.notes = notes;
                console.log('recived from appp',this.notes);
                
            })
            this.loadNotes()
        },

        searchNote() {
            this.notes = keeps.filterNotes(this.textSearch);
            
        },
        addNewNote(newNote) {
            keeps.addNewNote(newNote);    
            this.loadNotes();        
        },
        
        saveUpdatedNote(saveUpdatedNote) {
            keeps.saveChanges(saveUpdatedNote);
            this.loadNotes();
        },

        saveColor(color) {

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
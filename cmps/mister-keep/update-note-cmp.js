import keeps from '../../services/keepApp-service/keeps.js'

export default {
    props: ['note'],
    template: `
        <section>
        <div id="id01" class="modal">
  
        <div class="modal-content animate">
          <div class="img-container">
            <span  @click = "closeModal()" class="close" title="Close Modal">&times;</span>
            <img v-if = 'noteToUpdate.imgUrl' :src="noteToUpdate.imgUrl" alt="image" />
          </div>
      
          <div class="container">
            <label><b>Title</b></label>
            <div ref="noteTitle" contenteditable="true" >{{note.title}}</div>

            <div v-if = 'note.imgUrl' >
            <label><b>Image Source</b></label>
            <div class = "update-url" ref="noteImgSrc" contenteditable="true">{{note.imgUrl}}</div>
                <button class = 'upload-btn' @click = 'onloadNewImg' >Upload!</button>
            </div>

            <div v-if = "note.text">
            <label><b>Text</b></label>
            <div ref="noteText" contenteditable="true">{{note.text}}</div>
            </div>

            <div v-if = "note.todos.length">
            <b>Todos</b>
            <div v-for = "(listItem,idx) in note.todos" ref="todos"
            v-bind:class="{ line: note.todos[idx].isMarked }" contenteditable="true"  @keyup="saveTodo(idx)">
            <input  type="checkbox" v-model = 'note.todos[idx].isMarked'/>{{listItem.todo}}</div>
            </div>  
            <button class = "modalBtn" @click = "saveNoteChanges()">save changes</button>
            
          </div>
      
          
        </div>
      </div>
      
        </section>`,

    data() {
        return {
            noteToUpdate: this.note,
            text: this.note.text,
            tempTodos: this.note.todos,
        }
    },
    created() {
        console.log(this.note);
        
    },

    methods: {
        closeModal() {
            this.$emit("closeUpdateModal");

        },

        saveNoteChanges() {
            if (this.note.title) this.noteToUpdate.title = this.$refs.noteTitle.innerText;
            if (this.note.text) this.noteToUpdate.text = this.$refs.noteText.innerText;
            this.noteToUpdate.todos = this.tempTodos;            
            this.noteToUpdate.pinColor = this.note.pinColor;
            this.$emit("saveNewNote", this.noteToUpdate);
            this.closeModal();
        },

        onloadNewImg() {
            this.noteToUpdate.imgUrl = this.$refs.noteImgSrc.innerText;
        },

        saveTodo(idx, value) {
            this.tempTodos[idx] = this.$refs.todos[idx].innerText;
        }

        
    },
    components: {
        keeps,
    }
}
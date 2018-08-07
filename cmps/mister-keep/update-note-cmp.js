import keeps from '../../services/keepApp-service/keeps.js'

export default {
    props: ['note'],
    template: `
        <section v-if="noteToUpdate">
        <div id="id01" class="modal">
  
        <div class="modal-content animate">
          <div class="img-container">
            <span  @click = "closeModal()"  class="close" title="Close Modal">&times;</span>
            <img v-if = 'noteToUpdate.imgUrl' :src="noteToUpdate.imgUrl" alt="image" />
          </div>
      
          <div class="container">
            <label><b>Title</b></label>
            <div ref="noteTitle"  contenteditable="true">{{noteToUpdate.title}}</div>

            <div v-if = 'noteToUpdate.imgUrl' >
            <label><b>Image Source</b></label>
            <div class = "update-url"  ref="noteImgSrc" contenteditable="true">{{noteToUpdate.imgUrl}}</div>
                <button class = 'upload-btn' @click = 'onloadNewImg' >Upload!</button>
            </div>

            <div v-if = "noteToUpdate.text">
            <label><b>Text</b></label>
            <div ref="text" contenteditable="true">{{noteToUpdate.text}}</div>
            </div>

            <div v-if = "noteToUpdate.todos.length">
            <b>Todos</b>
            <div v-for = "(listItem,idx) in note.todos" ref="todos"
            v-bind:class="{ line: noteToUpdate.todos[idx].isMarked }" contenteditable="true"  @input="saveTodo(idx)">
            <input  type="checkbox" v-model = 'noteToUpdate.todos[idx].isMarked'/>{{listItem.todo}}</div>
            </div>  
            <button class = "modalBtn" @click = "saveNoteChanges()">save changes</button>
            
          </div>
      
          
        </div>
      </div>
      
        </section>`,

    data() {
        return {
            noteToUpdate: {},

        }
    },
    created() {
        if (this.note) this.noteToUpdate = JSON.parse(JSON.stringify(this.note));
    },

    methods: {
        closeModal() {
            this.$emit("closeUpdateModal");
        },

        saveNoteChanges() {
            console.log(this.noteToUpdate);
            this.noteToUpdate.title = this.$refs.noteTitle.innerText;
            if (this.noteToUpdate.text) this.noteToUpdate.text = this.$refs.text.innerText;
            this.$emit("saveNewNote", this.noteToUpdate);
            this.closeModal();
        },

        onloadNewImg() {
            this.noteToUpdate.imgUrl = this.$refs.noteImgSrc.innerText;
        },
        saveTodo(idx, value) {
            this.noteToUpdate.todos[idx].todo = this.$refs.todos[idx].innerText;
        }


    },

    components: {
        keeps,
    }
}
import keeps from '../../services/keepApp-service/keeps.js'

export default {
    props: ['note'],
    template: `
        <section>
        <div id="id01" class="modal">
  
        <div class="modal-content animate">
          <div class="imgcontainer">
            <span  @click = "closeModal()" class="close" title="Close Modal">&times;</span>
            <img v-if = 'noteToUpdate.imgUrl' :src="noteToUpdate.imgUrl" alt="image" class="avatar"/>
          </div>
      
          <div class="container">
            <label for="uname">Title</label>
            <input type="text" v-model = 'title' name="title" >
      
            <label v-if = "text"><b>Todos</b></label>
            <input v-if = "text" type="text" v-model = "text"  name="text" >

            <label v-if = "todos.length" ><b>Text</b></label>
            <li v-if = "todos.length" v-for = "(todo,idx) in todos"><input type="text" v-model = "todos[idx]"></input></li>
              
            <button class = "modalBtn" @click = "saveNoteChanges()">save changes</button>
            
          </div>
      
          
        </div>
      </div>
      
        </section>`,

    data() {
        return {
            noteToUpdate: this.note,
            title: this.note.title,
            text: this.note.text,
            todos: this.note.todos,
            pinColor:this.note.pinColor,
        }
    },
    created() {

    },

    methods: {
        closeModal() {
            this.$emit("close");

        },

        saveNoteChanges() {
            this.noteToUpdate.title = this.title;
            this.noteToUpdate.text = this.text;
            this.noteToUpdate.todos = this.todos;
            this.noteToUpdate.pinColor = this.pinColor;
            keeps.saveChanges(this.noteToUpdate);
            this.closeModal();
        }
    },
    components: {
        keeps,
    }
}
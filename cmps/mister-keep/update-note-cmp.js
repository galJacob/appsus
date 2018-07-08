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
            <label for="uname"><b>Title</b></label>
            <input type="text" v-model = 'title' name="title" >
            <div class = "update-url">
                <input v-if = 'noteToUpdate.imgUrl' class = "onloadInput" type="text"  v-model = "imgSrc">
                <button class = 'upload-btn' v-if ='noteToUpdate.imgUrl'@click = 'onloadNewImg' >Upload!</button>
            </div>
      
            <label v-if = "text"><b>Text</b></label>
            <input v-if = "text" type="text" v-model = "text"  name="text" >

            <label v-if = "todos.length" ><b>Todos</b></label>
            <li class= 'clean-list' v-if = "todos.length" v-for = "(todo,idx) in todos"><input type="text" v-model = "todos[idx]"></input></li>
              
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
            imgSrc:null,
        }
    },
    created() {
        console.log(this.note);
        
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
        },

        onloadNewImg() {
            this.noteToUpdate.imgUrl = this.imgSrc;
        }

        
    },
    components: {
        keeps,
    }
}
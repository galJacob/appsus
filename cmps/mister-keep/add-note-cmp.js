import keeps from '../../services/keepApp-service/keeps.js'
import utils from '../../services/utils.js'

export default {

    template: `
        <section>
        <div id="id01" class="modal">
  
        <div class="modal-content animate">
          <div class="imgcontainer">
            <span  @click = "closeAddModal()" class="close" title="Close Modal">&times;</span>
            <img v-if="imgNote"  src='img/notes-img/sale.png' alt="image" class="avatar"/>
          </div>
      
          <div class="container">
            <label for="uname">Title</label>
            <input type="text" name="title" v-model = 'note.data.title' >

            <div v-if="todosNote">
            <label ><b>Todos</b></label>
                <button @click="addTodo">+</button>
                <input  type="text" v-model = "note.data.text" name="text">
                <p v-for="(n,idx) in range">{{note.data.todos[idx]}}</p>
            </div>
            <div v-if="textNote">
                <label ><b>Text</b></label>
                <li><input type="text" v-model = 'note.data.text'></input></li>
            </div>
            <div>
                <button class = "btn-for-txt" @click = "openTextNote()">Text Note</button>
                <button class = "btn-for-img" @click = "openImgNote()">Upload Image</button>
                <button class = "btn-for-list" @click = "openListNote()">List Note</button>
            </div>  
            <button class = "modalBtn" @click = "addNote">Add Note</button>
            
          </div>
      
          
        </div>
      </div>
      
        </section>`,

    data() {
        return {
            textNote: false,
            imgNote: false,
            todosNote: false,
            range: 1,

            note: {
                noteType: 'textNote',
                data: {
                    id: utils.makeid(),
                    title: null,
                    imgUrl: null,
                    text: null,
                    todos: [],
                    pinColor:"black",
                }
            }
        }
    },
    created() {

    },

    methods: {
        closeAddModal() {
            this.$emit("closeAdd");

        },

        openTextNote() {
            console.log(this.textNote);

            if (this.textNote) {
                this.textNote = false;
            } else {
                this.textNote = true;
                this.imgNote = false;
                this.todosNote = false;
                this.note.noteType = "textNote";
            }
        },
        openImgNote() {
            if (this.imgNote) {
                this.imgNote = false;
            } else {
                this.imgNote = true;
                this.todosNote = false;
                this.textNote = false;
                this.note.noteType = "imgNote";
            }
        },
        openListNote() {
            if (this.todosNote) {
                this.todosNote = false;
            } else {
                this.todosNote = true;
                this.imgNote = false;
                this.textNote = false;
                this.note.noteType = "todosNote";
            }
        },

        createNewTodo(todo) {
            this.note.data.todos.push(todo);
        },

        addTodo() {
            this.note.data.todos.push(this.note.data.text);
            this.note.data.text = null;
            this.range++;

        },

        addNote() {
            keeps.addNewNote(this.note);
            
            this.closeAddModal();
        },


    },
    components: {
        keeps,
        utils,
    }
}

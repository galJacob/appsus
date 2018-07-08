import keeps from '../../services/keepApp-service/keeps.js'
import utils from '../../services/utils.js'

export default {

    template: `
        <section>
        <div id="id01" class="modal">
  
        <div class="modal-content animate">
          <div class="imgcontainer">
            <span  @click = "closeAddModal()" class="close" title="Close Modal">&times;</span>
            <img v-if="imgNote" ref="imgToUpload"  :src='enteredUrl' alt="image" class="avatar"/>
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
            <div class='addBtn'>
                <button class = "btn-for-txt" @click = "openTextNote()">Text Note</button>
                <input class = "onloadInput" type="imgUrl"  placeholder="enterUrl" v-model = "enteredUrl">
                <button @click = "loadImg">Upload!</button>
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
            enteredUrl:'',
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
            this.cleanNote();
            this.textNote = true;
            this.imgNote = false;
            this.todosNote = false;
            this.note.noteType = "textNote";
        },
        openImgNote() {
                this.cleanNote();
                this.imgNote = true;
                this.todosNote = false;
                this.textNote = false;
                this.note.noteType = "imgNote";
            
        },
        openListNote() {
            this.cleanNote();
            this.todosNote = true;
            this.imgNote = false;
            this.textNote = false;
            this.note.noteType = "todosNote";
            
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
            console.log(this.note);
            
            this.$emit("addNote", this.note);
            this.closeAddModal();
        },

        onFileChanged (event) {
            this.imgNote = event.target.files[0]
            console.log(this.imgNote);
        
        },

        loadImg() {
            this.imgNote = true;
            this.note.data.imgUrl = this.enteredUrl;
            this.note.noteType ='imgNote';
        },
        
        cleanNote() {
            this.note = {
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
            console.log(this.note);
            
        }
},


  
    components: {
        keeps,
        utils,
    }
}

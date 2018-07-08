import keeps from '../../services/keepApp-service/keeps.js'


export default {
    props: ['data'],
    template: `
        <section>
        <ul class="clean-list" @click = "$emit('openUpdateModal',  todoNotes)">
        <li>
        <div class="card" v-bind:style="{ backgroundColor: color}">
        <button @click.stop = "$emit('deleteNote', todoNotes.id)">x</button>
                <input class= 'color-btn' type="color" v-model = 'color'  name="favcolor" value="#ffffff" @click.stop="$emit('changeColor', this.value)">
                <img :src ="'img/notes-img/s-'+data.pinColor+'.png'" @click.stop = "pinNote">
                        <div class="card-container">
                            <h4><b>{{todoNotes.title}}</b></h4> 
                            <li class= 'clean-list' v-for = '(todo,idx) in todoNotes.todos'>{{todo}} <hr></hz></hl></hz></li> 
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    
    `,

    data() {
        return {
            todoNotes: this.data,
            color:this.data.backGround,
        }
    },

    methods: {
        pinNote() {
            this.$emit("notePined", this.todoNotes.id);
        }
    },

    components: {
        keeps,
    },
}
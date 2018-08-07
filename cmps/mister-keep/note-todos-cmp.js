import keeps from '../../services/keepApp-service/keeps.js'


export default {
    props: ['data'],
    template: `
       
            <div class="card" @click = "$emit('openUpdateModal',  data)" v-bind:style="{ backgroundColor: color}">
                <div class='top-card-menu flex'>
                    <button @click.stop = "$emit('deleteNote', data.id)">x</button>
                    <input type="color" v-model = 'color'  name="favcolor" value="#ffffff" @click.stop="" @change = "saveColor">
                    <img :src ="'img/notes-img/s-'+data.pinColor+'.png'" @click.stop = "pinNote">
                </div>    
                <div class="content-card-container">
                    <h4><b>{{data.title}}</b></h4> 
                    <div  v-for = "(listItem,idx) in data.todos"
                    v-bind:class="{ line: data.todos[idx].isMarked }">
                    <input  type="checkbox" @click.stop='toggleMark(idx)' v-model="data.todos[idx].isMarked"/>{{listItem.todo}}</div>
                </div>
            </div>    
                
      
    
    `,

    created() {
        console.log(this.data.todos);
        
    },
    data() {
        return {
            color:this.data.backGround,
        }
    },

    methods: {
        pinNote() {
            this.$emit("notePined", this.data.id);
        },

        toggleMark(idx){
            this.data.todos[idx].isMarked = (this.data.todos[idx].isMarked)? false: true;
            this.$emit("changeMark", this.data);
        },
        saveColor() {
            this.data.backGround = this.color;
            this.$emit('changeColor', this.data);
        }
    },

    components: {
        keeps,
    },
}
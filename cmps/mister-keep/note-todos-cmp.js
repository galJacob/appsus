import keeps from '../../services/keepApp-service/keeps.js'


export default {
    props: ['data'],
    template: `
       
            <div class="card" @click = "$emit('openUpdateModal',  data)" v-bind:style="{ backgroundColor: color}">
                <div class='top-card-menu flex'>
                    <button @click.stop = "$emit('deleteNote', data.id)">x</button>
                    <input type="color" v-model = 'color'  name="favcolor" value="#ffffff" @click.stop="$emit('changeColor', this.value)">
                    <img :src ="'img/notes-img/s-'+data.pinColor+'.png'" @click.stop = "pinNote">
                </div>    
                <div class="content-card-container">
                    <h4><b>{{data.title}}</b></h4> 
                    <li class= 'clean-list' v-for = '(todo,idx) in data.todos'>{{todo}} <hr></hz></hl></hz></li> 
                </div>
            </div>    
                
      
    
    `,

    data() {
        return {
            color:this.data.backGround,
        }
    },

    methods: {
        pinNote() {
            this.$emit("notePined", this.data.id);
        }
    },

    components: {
        keeps,
    },
}
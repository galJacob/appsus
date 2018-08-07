import keeps from '../../services/keepApp-service/keeps.js'


export default {
    props: ['data'],
    template: `
            <div class="card" @click = "$emit('openUpdateModal',  data)"  v-bind:style="{ backgroundColor: color}">
                <div class='top-card-menu flex'>
                    <button @click.stop = "$emit('deleteNote', data.id)">x</button>
                    <input type="color" v-model = 'color'  name="favcolor" value="#ffffff" @click.stop=""  @change = "saveColor">
                    <img :src ="'img/notes-img/s-'+data.pinColor+'.png'" @click.stop = "pinNote">
                </div>    
                <img class = "note-img" :src="data.imgUrl" alt="note-image">
                <div class='content-card-container'>
                    <h4><b>{{data.title}}</b></h4> 
                    <p>{{data.text}}</p> 
                </div>
            </div>                
        `,

    data() {
        return {
            pinUrl :this.data.pinColor,
            color:this.data.backGround,
        }
    },

    created() {
    },

    methods: {
        pinNote() {
            this.$emit("notePined", this.data.id);
        },
        saveColor() {
            this.data.backGround = this.color;
            this.$emit('changeColor', this.data);
        }
    },

    components: {
        keeps,
    }


}
import keeps from '../../services/keepApp-service/keeps.js'


export default {
    props: ['data'],
    template: `
        <section>
        <ul class = 'clean-list'>
        <li class="card" @click = "$emit('openUpdateModal',  imgNotes)"  v-bind:style="{ backgroundColor: color}">
        <button @click.stop = "$emit('deleteNote', imgNotes.id)">x</button>
        <input class= 'color-btn' type="color" v-model = 'color'  name="favcolor" value="#ffffff" @click.stop="$emit('changeColor', this.value)">
        <img :src ="'img/notes-img/s-'+pinUrl+'.png'" @click.stop = "pinNote">
                        <img :src="imgNotes.imgUrl" alt="note-image" style="width:100%">
                        <div class="card-container">
                            <h4><b>{{imgNotes.title}}</b></h4> 
                            <p>{{imgNotes.text}}</p> 
                        </div>
                </li>
            </ul>
        </section>`,

    data() {
        return {
            imgNotes: this.data,
            color:'#673AB7',
            pinUrl :this.data.pinColor,
            color:this.data.backGround,
        }
    },

    created() {
    },

    methods: {
        pinNote() {
            this.$emit("notePined", this.imgNotes.id);
        }
    },

    components: {
        keeps,
    }


}
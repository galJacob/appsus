

export default {
    props: ['data'],
    template: `
            <div class="card " @click = "$emit('openUpdateModal',  data)"  v-bind:style="{ backgroundColor: color}">
                <div class='top-card-menu flex'>
                    
                        <button @click.stop = "$emit('deleteNote', data.id)">x</button>
                        <input class= 'color-btn' type="color" v-model = 'color'  name="favcolor" value="#ffffff" @click.stop="$emit('changeColor', this.value)">
                    
                    <img :src ="'img/notes-img/s-'+data.pinColor+'.png'" @click.stop = "pinNote">
                </div>
                <div class="content-card-container">
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
        }
    }
}
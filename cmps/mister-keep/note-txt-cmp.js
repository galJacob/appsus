

export default {
    props: ['data'],
    template: `
        <section class= "note-container clean-list">
        <div class="card " @click = "$emit('openUpdateModal',  data)"  v-bind:style="{ backgroundColor: color}">
        <button @click.stop = "$emit('deleteNote', data.id)">x</button>
        <input class= 'color-btn' type="color" v-model = 'color'  name="favcolor" value="#ffffff" @click.stop="$emit('changeColor', this.value)">
        <button><img :src ="'img/notes-img/s-'+data.pinColor+'.png'" @click.stop = "pinNote"></button>
                        <div class="card-container">
                            <h4><b>{{data.title}}</b></h4> 
                            <p>{{data.text}}</p> 
                        </div>
                    </div>
            </ul>
        </section>
    
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
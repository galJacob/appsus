

export default {
    props: ['data'],
    template: `
        <section>
        <ul class = "clean-list">
        <li>
        <div class="card" @click = "$emit('openUpdateModal',  textNote)"  v-bind:style="{ backgroundColor: color}">
        <button @click.stop = "$emit('deleteNote', textNote.id)">x</button>
        <input class= 'color-btn' type="color" v-model = 'color'  name="favcolor" value="#ffffff" @click.stop="$emit('changeColor', this.value)">
        <img :src ="'img/notes-img/s-'+data.pinColor+'.png'" @click.stop = "pinNote">
                        <div class="card-container">
                            <h4><b>{{textNote.title}}</b></h4> 
                            <p>{{textNote.text}}</p> 
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    
    `,

    data() {
        return {
            textNote: this.data,
            color:'#673AB7',
            pinUrl :this.data.pinColor,
        }
    },
    created() {
        
    },

    methods: {
        pinNote() {
            this.$emit("notePined", this.textNote.id);
        }
    }
}
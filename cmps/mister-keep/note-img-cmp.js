

export default {
    props: ['data'],
    template: `
        <section>
            <ul>
                <li class="card">
                        <img :src="imgNotes.imgUrl" alt="note-image" style="width:100%">
                        <div class="card-container">
                            <h4><b>{{imgNotes.title}}</b></h4> 
                            <p>{{imgNotes.text}}</p> 
                        </div>
                </li>
            </ul>
        </section>`,

    data(){
        return {
            imgNotes:this.data,
        }
    },

        created(){
            
            
        }

 
}


export default {
    props:['data'],
    template: `
        <section>
            <ul>
                <li>
                    <div class="card">
                        <div class="card-container">
                            <h4><b>{{textNote.title}}</b></h4> 
                            <p>{{textNote.text}}</p> 
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    
    `,

    data(){
        return {
            textNote:this.data,
        }
    },
    created(){
        console.log(this.note);
        
    }
}
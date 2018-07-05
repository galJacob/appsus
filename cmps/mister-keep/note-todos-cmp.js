

export default {
    props:['data'],
    template: `
        <section>
            <ul>
                <li>
                    <div class="card">
                        <div class="card-container">
                            <h4><b>{{todoNotes.title}}</b></h4> 
                            <li v-for = '(todo,idx) in todoNotes.todos'>{{todo}}</li> 
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    
    `,

    data(){
        return {
            todoNotes:this.data,
        }

    },
}
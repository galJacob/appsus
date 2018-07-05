

export default {
    props:['data'],
    template: `
        <section>
            <ul class="clean-list">
                <li>
                    <div class="card">
                        <div class="card-container">
                            <h4><b>{{todoNotes.title}}</b></h4> 
                            <li class= 'clean-list' v-for = '(todo,idx) in todoNotes.todos'>{{todo}} <hr></hz></hl></hz></li> 
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
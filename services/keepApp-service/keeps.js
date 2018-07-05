import utils from '../utils.js'

var NOTES = 'active notes';
var notes = [
    {
        noteType: 'textNote',
        data:{
            id: utils.makeid(),
            title: "tough life",
            imgUrl:null,
            text: 'i am a text note 1',
            todos:[],
        }
    },
    {
        noteType: 'imgNote',
        data:{
            id: utils.makeid(),
            title: "great img",
            imgUrl: 'img/notes-img/sale.png',
            text: 'i am a img note note 2',
            todos:[],
        }
    },

    {
        noteType: 'todosNote',
        data:{
            id: utils.makeid(),
            title: "stuff todo",
            imgUrl: null,
            text: null,
            todos:['by stuff', 'do homework','walk the dog'],
        }
    }
]

function getNotes() {
    var storageNotes = utils.loadFromStorage(NOTES);
    var currNotes=(storageNotes)? storageNotes : notes;
    return Promise.resolve(currNotes)
        .then(currNotes => {
            return currNotes;
    })
      
}


export default {
    getNotes,
}
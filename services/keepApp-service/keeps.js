'use strict'
import utils from '../utils.js'
var notes = [];
var NOTES = 'active notes';
function GetDefaulNotes() {
    return [
        {
            noteType: 'textNote',
            data: {
                id: utils.makeid(),
                title: "tough life",
                imgUrl: null,
                text: 'i am a test note 1',
                todos: [],
                pinColor:"black",
                backGround:'#037171',
            }
        },
        {
            noteType: 'imgNote',
            data: {
                id: utils.makeid(),
                title: "great img",
                imgUrl: 'img/notes-img/sale.png',
                text: 'i am a img test note 2',
                todos: [],
                pinColor:"black",
                backGround:'#037171',
            }
        },

        {
            noteType: 'todosNote',
            data: {
                id: utils.makeid(),
                title: "stuff todo",
                imgUrl: null,
                text: null,
                todos: [{isMarked:false, todo:'do something'},
                        {isMarked:false, todo:'do something'},
                        {isMarked:false, todo:'do something'},
                        {isMarked:false, todo:'go to work'}],
                pinColor:"black",
                backGround:'#037171',
            }
        },    
        {
            noteType: 'imgNote',
            data: {
                id: utils.makeid(),
                title: "img note",
                imgUrl: 'https://platinumlist.net/upload/event/promo/3808_1600wwrte-01520436028.jpg',
                text: null,
                todos: [],
                pinColor:"black",
                backGround:'#037171',
            }
        },    
        {
            noteType: 'todosNote',
            data: {
                id: utils.makeid(),
                title: "stuff todo",
                imgUrl: null,
                text: null,
                todos: [{isMarked:false, todo:'by stuff'},
                        {isMarked:false, todo:'do homework'},
                        {isMarked:false, todo:'walk the dog'}],
                pinColor:"black",
                backGround:'#037171',
                marked:false,
            }
        }
    ];
}

function getNotes() {
    var storageNotes = utils.loadFromStorage(NOTES);
    notes = (storageNotes) ? storageNotes : GetDefaulNotes();
    return Promise.resolve(notes)
        .then(notes => {
            return notes;
        })

}


function saveChanges(changedNote) {
    notes.forEach(note => {
        if (note.data.id === changedNote.id)
            note.data = changedNote;
    });
    
    utils.saveToStorage(NOTES, notes);
}

function addNewNote(note) {
    notes.push(note);
    utils.saveToStorage(NOTES, notes);
}

function deleteNote(noteId) {
    if(notes.length === 1){
        notes =[]; 
    } else {
        notes = notes.filter(note => {
            return noteId != note.data.id;
        })
    }
    utils.saveToStorage(NOTES, notes);
}

function notePreferences(noteId) {
    var tempNotes =JSON.parse(JSON.stringify(notes))
    var noteIndex = tempNotes.findIndex(note=>{     
        return note.data.id === noteId;
    });
    var pointedNote = [];
    pointedNote = tempNotes.splice(noteIndex,1);
    
    if (pointedNote[0].data.pinColor === 'black') {
        tempNotes.unshift(pointedNote[0])
        tempNotes[0].data.pinColor = 'red';
    } else {
        tempNotes.push(pointedNote[0]);
        tempNotes[tempNotes.length - 1].data.pinColor = 'black';
    }    
    utils.saveToStorage(NOTES, tempNotes);
    notes = tempNotes;
    return Promise.resolve(tempNotes)
}

function filterNotes(textSearch) {
    textSearch = textSearch.toLowerCase();
    var filteredNotes = notes.filter(note=>{
    return checkTitle(note.data.title, textSearch)||
    (checkInTodos(note.data.todos, textSearch)) ||
    note.data.text && checkText(note.data.text, textSearch);
    })
    return filteredNotes;
}

function checkInTodos(todos, textSearch) {
    var filteredTodos = todos.filter(todoItem=>{
        if (todoItem.todo) {
            todoItem.todo = todoItem.todo.toLowerCase()
            return todoItem.todo.includes(textSearch);
        } 
    })
    return filteredTodos.length;
}

function checkTitle(title, textSearch) {
    title.toLowerCase();
    return title.includes(textSearch)
}

function checkText(text, textSearch) {
    return text.includes(textSearch);
}





export default {
    getNotes,
    saveChanges,
    addNewNote,
    deleteNote,
    notePreferences,
    filterNotes,
}
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
                text: 'i am a text note 1',
                todos: [],
                pinColor:"black",
            }
        },
        {
            noteType: 'imgNote',
            data: {
                id: utils.makeid(),
                title: "great img",
                imgUrl: 'img/notes-img/sale.png',
                text: 'i am a img note note 2',
                todos: [],
                pinColor:'black',
            }
        },

        {
            noteType: 'todosNote',
            data: {
                id: utils.makeid(),
                title: "stuff todo",
                imgUrl: null,
                text: null,
                todos: ['by stuff', 'do homework', 'walk the dog'],
                pinColor:"black",
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
    notes = notes.filter(note => {
        return noteId != note.data.id;
    })
    utils.saveToStorage(NOTES, notes);
}

function notePreferences(noteId) {
    var noteIndex = notes.findIndex(note=>{     
        return note.data.id === noteId;
    });
    var pointedNote = [];
    pointedNote = notes.splice(noteIndex,1);
    if (notes.data.pinColor === 'black') {
        notes = pointedNote.concat(notes); 
        notes[0].data.pinColor = 'red';
    } else {
        notes = notes.concat(pointedNote);
        notes[notes.length - 1].data.pinColor = 'black';
}    
    utils.saveToStorage(NOTES, notes);
}




export default {
    getNotes,
    saveChanges,
    addNewNote,
    deleteNote,
    notePreferences,
}
import React, {Component} from 'react';

//import './App.scss';
import CreateNote from './components/Note/createNote';

import NotesList from './components/Note/notesList';

import FilterSearch from './components/Note/filterSearch';


const ARRAY =  [
    {
        id: 1,
        text: 'Learn HTML',
        textColor: '#000000',
        status: 'closed'
    }, {
        id: 2,
        text: 'Learn CSS',
        textColor: '#000000',
        status: 'notCompleted'
    }, {
        id: 3,
        text: 'Improve HTML',
        textColor: '#000000',
        status: 'notCompleted'
    }, {
        id: 4,
        text: 'Improve CSS',
        textColor: '#000000',
        status: 'notCompleted'
    }, {
        id: 5,
        text: 'Learn JavaScript',
        textColor: '#000000',
        status: 'notCompleted'
    },
    {
        id: 6,
        text: 'Learn React',
        textColor: '#000000',
        status: 'notCompleted'
    }
];
export default class App extends Component {

    constructor() {
        super();
        this.state = {

            notes: ARRAY,
            searchArray: ARRAY


        };
        this.addNote = this.addNote.bind(this);
        this.searchNote = this.searchNote.bind(this);
        this.showNotes = this.showNotes.bind(this);
        this.filterSearchNotes = this.filterSearchNotes.bind(this);

    }

    addNote(notes) {
        this.setState({searchArray: notes});
    }

    searchNote(notes) {
        this.setState({searchArray: notes});
    }

    showNotes(notes) {
        this.setState({notes: notes});
    }

    filterSearchNotes(notes) {
        this.setState({searchArray: notes});
    }

    render() {

        return (
            <div className="App">
                <CreateNote notes={this.state.notes} addNote={(notes) => this.addNote(notes)}/>
                <NotesList notes={this.state.searchArray} showNotes={(notes) => this.showNotes(notes)}/>

                <FilterSearch notes={this.state.notes} filterSearchNotes={(notes) => this.filterSearchNotes(notes)}/>

            </div>
        )
    }
}
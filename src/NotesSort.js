
import React, {Component} from 'react';

import './App.css';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            searchText: '',
            value: null,
            text: '',
            textColor: '#000000',
            notes: [
                {
                    id: 1,
                    text: 'Learn HTML',
                    textColor: '#000000',
                    status: 'notCompleted'
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
            ],
            filterStatus: ''
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleNoteDel = this.handleNoteDel.bind(this);
        this.handleTextColor = this.handleTextColor.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleShowAll = this.handleShowAll.bind(this);
        this.handleShowNew = this.handleShowNew.bind(this);
        this.handleShowCompleted = this.handleShowCompleted.bind(this);
        this.handleCheckboxClicked = this.handleCheckboxClicked.bind(this);
    }

    handleTextColor() {
        let color = document.getElementById('idColor').value;
        this.setState({textColor: color});
    }

    handleTextChange(event) {
        this.setState({text: event.target.value});
    }

    handleNoteAdd() {
        let notesArray = this.state.notes;
        notesArray.push({
            id: Date.now(),
            text: this.state.text,
            textColor: this.state.textColor,
            status: 'notCompleted'
        });
        this.setState({notes: notesArray});
        this.setState({text: ''});
    }

    handleNoteDel(index) {
        let notesArray = this.state.notes;
        notesArray.splice(index, 1);
        this.setState({notes: notesArray});
    }

    handleSearch(event) {
        this.setState({searchText: event.target.value});
    }

    handleShowAll() {
        this.setState({filterStatus: ''});
    }

    handleShowNew() {
        this.setState({filterStatus: 'notCompleted'});
    }

    handleShowCompleted() {
        this.setState({filterStatus: 'completed'});
    }

    handleCheckboxClicked(index) {
        let notesArray = this.state.notes;

        if (notesArray[index].status === 'completed') {
            notesArray[index].status = 'notCompleted';
        } else {
            notesArray[index].status = 'completed';
        }

        this.setState({notes: notesArray});
    }

    render() {

        return (
            <div className="App">
                <div className='input-group'>
                    <textarea style={{color: this.state.textColor}}
                              placeholder="Enter your note here..."
                              rows={5}
                              className="text-area"
                              value={this.state.text}
                              onChange={this.handleTextChange}/>

                    <button className="add-button" onClick={this.handleNoteAdd}>Add note</button>


                    <div>
                        <input className='chose-color' id='idColor' type="color" onChange={this.handleTextColor}/>
                        <span className='chose' style={{color: this.state.textColor}}> Choose text color:</span>
                    </div>
                </div>
                <input type="text" className='search' placeholder='Search...' onChange={this.handleSearch}/>
                <div className="notes-app">
                    <h2 className="app-header">Notes:</h2>
                    <div className='sortButtons'>
                        <button className='sortButton' onClick={this.handleShowAll}>All</button>
                        <button className='sortButton' onClick={this.handleShowNew}>NotCompleted</button>
                        <button className='sortButton' onClick={this.handleShowCompleted}>Completed</button>
                    </div>
                    <div className="notes-grid" ref="grid">
                        {this.state.notes.filter((note) => {
                            return note.text.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1;
                        }).filter((note) => {
                            return note.status.toLowerCase().indexOf(this.state.filterStatus.toLowerCase()) > -1;
                        }).map((note, index) => {
                            return (
                                <div className="note" id='noteId' style={{color: note.textColor}}>
                                    {
                                        note.text
                                    }
                                    <button className='button-close' onClick={() => this.handleNoteDel(index)}>x
                                    </button>
                                    <input type="checkbox" className='checkbox' checked={note.status === 'completed'}
                                           onClick={() => this.handleCheckboxClicked(index)}/>
                                </div>
                            );
                        })
                        }
                    </div>

                </div>
            </div>

        )
    }
}
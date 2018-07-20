import React, {Component} from 'react';

import './NotesSearch.css';

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
                    text: 'Darth Vader +250966666666 Minsk',
                    textColor: '#000000'
                }, {
                    id: 2,
                    text: 'Luke Skywalker +250966666666 Minsk',
                    textColor: '#000000'
                }, {
                    id: 3,
                    text: 'Princess Leia +250966666666 Minsk',
                    textColor: '#000000'
                }, {
                    id: 4,
                    text: 'Chewbacca +250966666666 Minsk',
                    textColor: '#000000'
                }
            ],

        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleNoteDel = this.handleNoteDel.bind(this);
        this.handleTextColor = this.handleTextColor.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
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
        notesArray.push({id: Date.now(), text: this.state.text, textColor: this.state.textColor});
        this.setState({notes: notesArray});
        this.setState({text: ''});

    }

    handleNoteDel(index) {
        let notesArray = this.state.notes;
        notesArray.splice(index, 1);
        this.setState({notes: notesArray});
    }

    handleSearch(event) {
        this.setState({searchText: event.target.value.toLowerCase()});
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
                    <input type="text" placeholder='Search...' onChange={this.handleSearch}/>
                    <div className=''>

                        <input className='chose-color' id='idColor' type="color" onChange={this.handleTextColor}/>
                        <span className='chose' style={{color: this.state.textColor}}> Choose text color:</span>
                    </div>

                </div>
                <div className="notes-app">
                    <h2 className="app-header">Notes:</h2>
                    <div className="notes-grid" ref="grid">
                        {this.state.notes.filter((note) => {
                            return note.text.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1;
                        }).map((note, index) => {
                            return (
                                <div className="note" id='noteId' style={{color: note.textColor}}>
                                    {
                                        note.text
                                    }
                                    <button className='button-close' onClick={() => this.handleNoteDel(index)}>x
                                    </button>
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
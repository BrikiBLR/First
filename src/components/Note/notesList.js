import React, {Component} from 'react';

import './App.scss';

export default class NotesList extends Component {

    constructor() {
        super();
        this.state = {

        };

        this.handleNoteDel = this.handleNoteDel.bind(this);
        this.handleCheckboxClicked = this.handleCheckboxClicked.bind(this);
    }

    handleNoteDel(index) {
        let notesArray = this.props.notes;
        notesArray.splice(index, 1);
        this.props.showNotes(notesArray);
    }

    handleCheckboxClicked(index) {

        let notesArray = this.props.notes;

        if (notesArray[index].status === 'closed') {
            notesArray[index].status = 'notCompleted';
        } else {
            notesArray[index].status = 'closed';
        }

        this.props.showNotes(notesArray);

    }

    render() {

        return (
            <div className="NotesList">
                <div className="notes-app">
                    <h2 className="app-header">Notes:</h2>
                    <div className="notes-grid" ref="grid">
                        {
                            this.props.notes && this.props.notes.map((note, index) => {
                                return (
                                    <div className="note" id='noteId' style={{color: note.textColor}}>
                                        {
                                            note.text
                                        }
                                        <button className='button-close' onClick={() => this.handleNoteDel(index)}>x
                                        </button>
                                        <input type="checkbox" className='checkbox'
                                               checked={note.status === 'closed'}
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
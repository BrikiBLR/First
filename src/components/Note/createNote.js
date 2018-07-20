import React, {Component} from 'react';

import './App.scss';

export default class CreateNote extends Component {

    constructor() {
        super();
        this.state = {
            searchText: '',
            value: null,
            text: '',
            textColor: '#000000',
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleTextColor = this.handleTextColor.bind(this);
    }

    handleTextColor() {
        let color = document.getElementById('idColor').value;
        this.setState({textColor: color});
    }

    handleTextChange(event) {
        this.setState({text: event.target.value});
    }

    handleNoteAdd() {
        let notesArray = this.props.notes;
        notesArray.push({
            id: Date.now(),
            text: this.state.text,
            textColor: this.state.textColor,
            status: 'notCompleted'
        });

        this.setState({text: ''});
        this.props.addNote(notesArray);
    }

    render() {

        return (
            <div className="CreateNote">
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
            </div>
        )
    }
}
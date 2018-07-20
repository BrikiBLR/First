import React, {Component} from 'react';

import './App.scss';

export default class FilterButtons extends Component {

    constructor() {
        super();
        this.state = {};

        this.handleShowByButtons = this.handleShowByButtons.bind(this);


    }

    handleShowByButtons(status) {

        this.props.filterNote(status);
    }

    render() {

        return (
            <div className="FilterButtons">
                <div className="notes-app">
                    <h2 className="app-header">Notes:</h2>
                    <div className='sortButtons'>
                        <button id='1' className='sortButton' onClick={() => {
                            this.handleShowByButtons('')
                        }}>All
                        </button>
                        <button id='2' className='sortButton' onClick={() => {
                            this.handleShowByButtons('notCompleted')
                        }}>NotCompleted
                        </button>
                        <button id='3' className='sortButton' onClick={() => {
                            this.handleShowByButtons('closed')
                        }}>Completed
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
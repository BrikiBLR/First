import React, {Component} from 'react';

import './App.scss';

export default class SearchInput extends Component {

    constructor() {
        super();
        this.state = {
            searchText: '',
        };

        this.handleSearchText = this.handleSearchText.bind(this);
    }

    handleSearchText(event) {

        this.props.searchNote(event.target.value);
    }

    render() {

        return (
            <div className="SearchInput">
                <input type="text" className='search' placeholder='Search...' onChange={this.handleSearchText}/>
            </div>

        )
    }
}
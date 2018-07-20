import React, {Component} from 'react';

import './App.scss';

import FilterButtons from './filterButtons';
import SearchInput from './searchInput';

export default class FilterSearch extends Component {

    constructor() {
        super();
        this.state = {
            searchText: '',
            filterStatus: ''
            //searchArray: []

        };

        this.handleSearch = this.handleSearch.bind(this);
    }

    searchNote(string) {
        this.setState({searchText: string},this.handleSearch());
        let notesArray = this.props.notes.filter((note) => {

            return note.text.toLowerCase().indexOf(string.toLowerCase()) !== -1;
        });

        this.props.filterSearchNotes(notesArray);
        this.handleSearch();


    }

    filterNote(status) {
        this.setState({filterStatus: status}, this.handleSearch());
        let notesArray = this.props.notes.filter((note) => {

            return note.status.toLowerCase().indexOf(status.toLowerCase()) !== -1;
        });

        this.props.filterSearchNotes(notesArray);


    }


    handleSearch() {

        let notesArray = this.props.notes.filter((note) => {

            return note.text.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1;
        }).filter((note) => {

            return note.status.toLowerCase().indexOf(this.state.filterStatus.toLowerCase()) !== -1;
        });

        this.props.filterSearchNotes(notesArray);

    }


    render() {

        return (
            <div className="FilterSearch">
                <SearchInput searchNote={(string) => this.searchNote(string)}/>
                <FilterButtons filterNote={(status) => this.filterNote(status)}/>


            </div>

        )
    }
}
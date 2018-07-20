import React, {Component} from 'react';

import './HelloStranger.css';

const CONTACTS = [
    {
        id: 1,
        name: 'Darth Vader',
        phoneNumber: '+250966666666',
        image: 'http://cs7.pikabu.ru/images/big_size_comm_an/2014-03_7/13962622876915.gif',
        address: 'Minsk',
        email: '1@tut.by'
    }, {
        id: 2,
        name: 'Princess Leia',
        phoneNumber: '+250966344466',
        image: 'http://images6.fanpop.com/image/photos/33100000/CARRIE-FISHER-anakin-vader-and-princess-leia-33186069-190-149.gif',
        address: 'Moscow',
        email: '11@tut.by'
    }, {
        id: 3,
        name: 'Luke Skywalker',
        phoneNumber: '+250976654433',
        image: 'https://media.giphy.com/media/RUUdVZqwpfTRS/giphy.gif',
        address: 'Kiev',
        email: '111@tut.by'
    }, {
        id: 4,
        name: 'Chewbacca',
        phoneNumber: '+250456784935',
        image: 'https://media.giphy.com/media/RUUdVZqwpfTRS/giphy.gif',
        address: 'Vilnius',
        email: '1111@tut.by'
    }
];


export default class App extends Component {

    constructor() {
        super();
        this.state = {
            value: 'stranger',
            choseId: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleInfo = this.handleInfo.bind(this);
    }

    handleChange(event) {

        this.setState({value: event.target.value});
        if (this.state.value === '') {
            this.setState({value: 'stranger'});
        }
    }

    handleInfo(id) {
        if (this.state.choseId === id) {
            this.setState({choseId: null});
        } else {
            this.setState({choseId: id})
        }
    }

    render() {

        return (
            <div className="App">
                <div className='hello'>Hello, {this.state.value} !</div>
                <input type="text" className='search-field' onChange={this.handleChange}/>
                <div className="contacts">
                    {
                        CONTACTS.map(item => {
                            return (
                                <div className='contact' key={item.id} onClick={
                                    () => {
                                        this.handleInfo(item.id)
                                    }}>
                                    <img className='image' src={item.image} alt=""/>
                                    <div className="contact-info">
                                        <div className="name">{item.name}</div>
                                        <div className="phone">{item.phoneNumber}</div>
                                        {item.id === this.state.choseId && <div>
                                            <div className="address">{item.address}</div>
                                            <div className="email">{item.email}</div>
                                        </div>
                                        }
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}
import React, {Component} from 'react';

import './Calculater.css';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            value1: null,
            value2: null,
            result: null,
            sign: '',
            equal: ''
        };

        this.doAction = this.doAction.bind(this);
        this.handleFirst = this.handleFirst.bind(this);
        this.handleSecond = this.handleSecond.bind(this);
    }

    handleFirst(event) {
        if (!event.target.value) {
            this.setState({value1: event.target.value, sign: '', equal: '', result: ''})
        } else {
            this.setState({value1: event.target.value})
        }
    }

    handleSecond(event) {
        if (!event.target.value) {
            this.setState({value2: event.target.value, sign: '', equal: '', result: ''})
        } else {
            this.setState({value2: event.target.value})
        }
    }

    doAction(action) {

        switch (action) {
            case '+':
                this.setState({result: +this.state.value1 + +this.state.value2, sign: '+', equal: '='});
                break;
            case '-':
                this.setState({result: +this.state.value1 - +this.state.value2, sign: '-', equal: '='});
                break;
            case '*':
                this.setState({result: +this.state.value1 * +this.state.value2, sign: '*', equal: '='});
                break;
            default:
                break;
        }
    }

    render() {
        if (this.state.value1 && this.state.value2) {
        }
        return (
            <div className="App">

                <div>
                    <h2>Enter numbers: </h2>
                    <div className='draw'>
                        <input className='number' type="number" onChange={this.handleFirst}/>
                        {this.state.value1 && this.state.value2 &&
                        <div className='draw'>
                            <div className='sign'>{this.state.sign}</div>
                        </div>
                        }
                        <input className='number' type="number" onChange={this.handleSecond}/>
                        {this.state.value1 && this.state.value2 &&
                        <div className='draw'>
                            <div className='equal'> {this.state.equal} </div>
                            <div className='result'>{this.state.result}</div>
                        </div>
                        }
                    </div>

                    {this.state.value1 && this.state.value2 &&
                    <div>
                        <h2>Click action: </h2>
                        <button onClick={() => this.doAction('+')}>+</button>
                        <button onClick={() => this.doAction('-')}>-</button>
                        <button onClick={() => this.doAction('*')}>*</button>
                    </div>
                    }
                </div>

            </div>
        )
    }
}
import React, {Component} from 'react';

import './Timer.css';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            minutes: 0,
            seconds: 0,
        };

        this.handleTimerStart = this.handleTimerStart.bind(this);
        this.handleTimerPause = this.handleTimerPause.bind(this);
        this.handleTimerReset = this.handleTimerReset.bind(this);
        this.tick = this.tick.bind(this);
    }

    tick() {
        if (this.state.seconds === 59) {
            this.setState({minutes: this.state.minutes + 1, seconds: 0})
        } else {
            this.setState({seconds: this.state.seconds + 1})
        }
    }

    handleTimerStart() {
        this.timer = setInterval(this.tick, 1000);
    }

    handleTimerPause() {
        if (this.timer) {
            clearInterval(this.timer);
        }

        this.timer = false;
        this.setState({});
    }

    handleTimerReset() {
        clearInterval(this.timer);
        this.setState({seconds: 0, minutes: 0});
        this.timer = false;
    }

    render() {

        return (
            <div className="App">
                <h2>Timer:</h2>
                {!this.timer && <button className='button-start' onClick={this.handleTimerStart}>Start</button>}
                {this.timer && <button className='button-pause' onClick={this.handleTimerPause}>Pause</button>}
                <button className='button-reset' onClick={this.handleTimerReset}>Reset</button>
                <div
                    className="values">{this.state.minutes < 10 && 0}{this.state.minutes}:{this.state.seconds < 10 && 0}{this.state.seconds}</div>
            </div>
        )

    }
}
import React, { Component } from 'react';
import { createStore } from 'redux';

const store = createStore((state = 0, action) => {
    switch (action.type) {
        case 'INCREASEMENT':
            return state + 1;
        case 'DECREASEMENT':
            return state - 1;
        default:
            return state;
    }
});

// const counterReducer = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREASEMENT':
//             return state + 1;
//         case 'DECREASEMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// }

class Clock extends Component {

    constructor(props) {
        super(props)
        this.state = { date: new Date().toLocaleTimeString(), count: 0 };
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            date: new Date().toLocaleTimeString()
        });
    }

    increase = () => {
        // this.setState((state) => ({
        //     count: state.count + 1
        // }));
        store.dispatch({type: 'INCREASEMENT'});
        this.setState((state) => ({
            count: store.getState()
        }));
    }

    decrease = () => {
        store.dispatch({type: 'DECREASEMENT'});
        this.setState((state) => ({
            count: store.getState()
        }));
    }

    render() {
        return (
            <div>
                <h1>{this.state.date.toLocaleString()}</h1>
                <h2>{this.state.count > 5 ? <span>Count is {this.state.count}</span> : undefined}</h2>
                <button onClick={this.increase}>increase {this.state.count}</button>
                <button onClick={this.decrease}>decrease {this.state.count}</button>
            </div>
        );
    }
}

export default Clock;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './table';
import Clock from './clock';
import Form from './form';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

import {peopleCtx} from './context';

class App extends Component {

    // state = {
    //     peopleData: [
    //         {
    //             name: 'Tran Duc Duong',
    //             job: 'Software developer'
    //         },
    //         {
    //             name: 'Tran Nguyen Khanh',
    //             job: 'Student'
    //         }
    //     ]
    // };

    render() {
        const peopleData = [
            {
                name: 'Tran Duc Duong',
                job: 'Software developer'
            },
            {
                name: 'Tran Nguyen Khanh',
                job: 'Student'
            },
            {
                name: 'Tran Van Hiep',
                job: 'Biz man'
            }
        ];

        return (
            <div className="App">
                <peopleCtx.Provider value={peopleData}>
                    <h1>Hello World !!!</h1>
                    <Table/>
                    <Clock exampleProp={123} />
                    <Form />
                </peopleCtx.Provider>
            </div>
        );
    };
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

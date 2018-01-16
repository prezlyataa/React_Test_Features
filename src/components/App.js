import React, { Component } from 'react';
import { Form } from "./form";
// import axios from 'axios';
import './App.scss';

export class App extends Component  {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <h3>Add new user</h3>
                <Form/>
            </div>
        );
    }
}


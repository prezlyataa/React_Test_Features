import React, { Component } from 'react';
import './form.scss';

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            users: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            name: e.target.value,
            age: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            age: this.state.age
        };
        this.setState(prevState => ({
            users: prevState.users.concat(newUser)
        }));
    }

    render() {
        console.log(this.state.users);
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className='input_field'
                        type="text"
                        placeholder='name'
                        name="name"
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        className='input_field'
                        type="number"
                        placeholder='number'
                        name="age"
                        onChange={this.handleChange}
                        required
                    />
                    <input className='btn' type='submit' value='Submit'/>
                </form>
            </div>
        );
    }
}
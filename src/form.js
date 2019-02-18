import React, { Component } from 'react';

class nameForm extends Component {

    constructor(props) {
        super(props);

        this.state = {username: '', gender: 'male'};
    }

    submit = (event) => {
        alert(`your value:  ${this.state.username} and ${this.state.gender}`);
        event.preventDefault();
    }

    handleChange = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handleChangeGender = (event) => {
        this.setState({
            gender: event.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>
                    Name: <input type="text" value={this.state.username} onChange={this.handleChange} name="name" />
                </label>
                <label>
                    Gender:
                    <select value={this.state.value} onChange={this.handleChangeGender}>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default nameForm;
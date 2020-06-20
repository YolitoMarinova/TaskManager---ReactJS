import React from 'react';
import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Register.css';
import { register } from '../../../core/api/users.api';

export class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            age: '',
            isRegister: false,
            errorMessage: ''
        }
    }

    onInputChange = (event) => {
        event.persist();

        this.setState({
            [event.target.name]: event.target.value,
            errorMessage: ''
        });
    }

    onSubmit = (event) => {
        event.preventDefault();

        const { isRegister, ...user } = this.state;

        register(user).then(() => {
            this.setState({
                isRegister: true
            });

        }).catch((err) => this.setState({ errorMessage: err.message }));
    }

    render() {
        return (
            <>
                {this.state.isRegister && <Redirect to="/login" />}
                <div className="register-wrapper fadeInDown">
                    <div id="reg-formContent">
                        <div className="reg-fadeIn first">
                            <h1>Register</h1>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            {this.state.errorMessage && <span className="text-danger">{this.state.errorMessage}</span>}
                            <input type="text" id="username" className="reg-fadeIn second" name="username" placeholder="username" onChange={this.onInputChange} required />
                            <input type="text" id="name" className="reg-fadeIn second" name="name" placeholder="name" onChange={this.onInputChange} required />
                            <input type="email" id="email" className="reg-fadeIn second" name="email" placeholder="email" onChange={this.onInputChange} required />
                            <input type="password" id="password" className="reg-fadeIn third" name="password" placeholder="password" onChange={this.onInputChange} required />
                            <input type="number" id="age" className="reg-fadeIn second" name="age" placeholder="age" onChange={this.onInputChange} required />
                            <input type="submit" className="reg-fadeIn fourth" value="Register" />
                        </form>
                        <div id="reg-formFooter">
                            <Link to='/login'>Login</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
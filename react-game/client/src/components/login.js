import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import '../App.css';
import API from '../api';


class Login extends Component {
    state = {
        username: "",
        password: "",
        formSubmitted: false
    }

    constructor (props){
        super(props)
        this.setUser = props.setUser
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (!this.state.username || this.state.password === "") {
            alert("Please fill out all fields.")
        }
        else {
            API.Login({ username: this.state.username, password: this.state.password }).then(res => {
                console.log(res);
                if (res.data.isAuthenticated) {
                    alert("Login successful.");
                    this.setUser(res.data.userId)
                    this.setState({ username: "", password: "", formSubmitted: true });
                }
                else if (!res.isAuthenticated){
                    alert("Login failed.");
                    console.log(res);
                }
            }).catch(function(error){
                console.log(error);
            })
        }
    };
    render() {
        if (this.state.formSubmitted) {
            return <Redirect to="/titlescreen" />
        }
        return (
            <div className="mainPage">
                <div className="container">
                    <div className="jumbotron mt-4">
                        <h1 className="display-4 text-center">Login!</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="username" className="form-control" name="username" placeholder="Enter Username" value={this.state.username} onChange={this.handleChange}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange}></input>
                            </div>
                            <br></br>
                            <button className="button" type="submit"
                                onClick={this.handleFormSubmit}>
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

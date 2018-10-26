import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import '../App.css';
import API from '../api';

class Register extends Component {
    state = {
        username: "",
        password: "",
        confirmPassword: "",
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
        if (this.state.password !== this.state.confirmPassword) {
            alert("Passwords must match.")
        }
       else if (!this.state.username || this.state.password === "") {
            alert("Please fill out all fields.")
            console.log(this.state)
        }
        else {
            API.signUp({username: this.state.username, password: this.state.password}).then(res => {
                console.log(res.data)
                if (res.data.createdUser){
                    alert("User created successfully.");
                    this.setUser(res.data.userId)
                    this.setState({ username: "", password: "", confirmPassword: "", formSubmitted: true });
                }
                else {
                    alert("Username is taken.");
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
          
        // console.log(this.state)
        return (
            <div className="mainPage">
                <div className="container">
                    <div className="jumbotron mt-4">
                        <h1 className="display-4 text-center">Welcome!</h1>
                        <p>Please provide a valid username and password.</p>

                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" name="username" placeholder="Enter Username" value={this.state.username} onChange={this.handleChange}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange}></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="passwordConfirm">Confirm Password</label>
                                <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.handleChange}></input>
                            </div>
                            <br></br>
                            <button className="button" type="submit"
                                onClick={this.handleFormSubmit}>
                                Create Account
                            </button>
                        </form>


                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
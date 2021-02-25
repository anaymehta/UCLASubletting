import React, { Component } from "react";
import "./Signup.css";
const axios = require('axios');

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : ''
    };
    this.sendUserData = this.sendUserData.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  setEmail(event) {
    this.setState({email: event.target.value});
  }
  setPassword(event) {
    this.setState({password: event.target.value});
  }
  sendUserData() {
    axios.post('http://3c19a98118cb.ngrok.io/signUp', {
    email: this.state.email,
    password: this.state.password
    })
  .then(function (response) {
    console.log(response.data);
    if(response.data == "User Created") {
      //Go to the appropriate page
    } else {
      //Appropriate error handling. Perhaps alert that user already exists
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          className="email"
          placeholder="Enter Email"
          onChange={this.setEmail}
        ></input>
        <input
          type="password"
          className="password"
          placeholder="Enter Password"
          onChange={this.setPassword}
        ></input>
        <button type="button" onClick={this.sendUserData}>Sign Up</button>
      </form>
    );
  }
}

import React, { Component } from "react";
import "./Signup.css";
import Cookies from "js-cookie";

const axios = require("axios");

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isEmailTaken: false,
    };
    this.sendUserData = this.sendUserData.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  handleRedirect() {
    this.props.history.push("/");
  }

  // if the email is taken the info will be displayed
  setEmailTaken(isTaken) {
    if (isTaken === true) {
      this.setState({
        isEmailTaken: true,
      });
    } else {
      this.setState({
        isEmailTaken: false,
      });
    }
  }

  setEmail(event) {
    this.setState({ email: event.target.value });
  }
  setPassword(event) {
    this.setState({ password: event.target.value });
  }
  sendUserData() {
    axios
      .post("http://ec2-18-218-184-96.us-east-2.compute.amazonaws.com:8080/signUp", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data == "User Created") {
          //Go to the appropriate page
          this.handleRedirect();
          this.setEmailTaken(false);
          Cookies.set("user", response.data);
        } else {
          //Appropriate error handling.
          this.setEmailTaken(true);
        }
      })
      .catch((error) => {
        alert("Can't connect to server");
        console.log(error);
      });
  }

  render() {
    return (
      <div>
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
          <button type="button" onClick={this.sendUserData}>
            Sign Up
          </button>
        </form>
        <p1
          className={
            this.state.isEmailTaken ? "emailMsgShown" : "emailMsgHidden"
          }
        >
          This email address is already being used.
        </p1>
      </div>
    );
  }
}

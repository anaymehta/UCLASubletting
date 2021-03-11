import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Modal, Header, footer } from "semantic-ui-react";

import Cookies from "js-cookie";
const axios = require("axios");

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      modalOpen: false,

      //sign up variables
      email: "",
      password: "",

      isEmailTaken: false, // to display error msg
      showSignUp: false,
      loginWrongPassword:false,

      //login variables
    };
    // navbar functions
    this.handleClick = this.handleClick.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.deleteCookie = this.deleteCookie.bind(this);

    // sign up functions
    this.sendUserData = this.sendUserData.bind(this);
    this.getUserData = this.getUserData.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.showSignUp = this.showSignUp.bind(this);
    this.setLogin = this.setLogin.bind(this);

    
    if((Cookies.get('user')) ==null)
    {
      this.state = {
        isLoggedIn :false
      }
    }
    else
    {
      this.state ={
        isLoggedIn: true
      }
    }
  }


  //navbar functions
  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false, showSignUp: false });

  handleClick() {
    this.setState({
      click: !this.state.click,
    });
  }
  closeMobileMenu() {
    this.setState({
      click: false,
    });
  }
  deleteCookie(){
    Cookies.remove('user');
    this.setState(
      {isLoggedIn:false}
    )
  }

  // sign up functions section:

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

  setLogin(bool){
    if (bool === true) {
      this.setState({
        isLoggedIn: true,
      });
    } else {
      this.setState({
        isLoggedIn: false,
      });
    }
  }

  setLoginWrongPassword(bool) {
    if (bool === true) {
      this.setState({
        loginWrongPassword: true,
      });
    } else {
      this.setState({
        loginWrongPassword: false,
      });
    }
  }

  showSignUp(bool) {
    if (bool === true) {
      this.setState({
        showSignUp: true,
      });
    } else {
      this.setState({
        showSignUp: false,
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
      .post(
        "http://ec2-18-218-184-96.us-east-2.compute.amazonaws.com:8080/signUp",
        {
          email: this.state.email,
          password: this.state.password,
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.status == "User Created") {
          //Go to the appropriate page
          this.handleClose();
          this.setEmailTaken(false);
          Cookies.set("user", response.data.token);
          this.setLogin(true);
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

 
  
  getUserData() {
    axios
      .post(
        "http://ec2-18-218-184-96.us-east-2.compute.amazonaws.com:8080/signIn",
        {
          email: this.state.email,
          password: this.state.password,
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.status == "User Authenticated") {
          //Go to the appropriate page
          this.handleClose();
          this.setLoginWrongPassword(false);
          Cookies.set("user", response.data.token);
          this.setLogin(true);
          
        } else {
          //Appropriate error handling.
          this.setLoginWrongPassword(true);
          
        }
      })
      .catch((error) => {
        alert("Can't connect to server");
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={this.closeMobileMenu}>
              UCLASubletting
              <i class="fas fa-home"></i>
            </Link>
            <div className="menu-icon" onClick={this.handleClick}>
              <i
                className={this.state.click ? "fas fa-times" : "fas fa-bars"}
              />
            </div>
            <ul className={this.state.click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-links"
                  onClick={this.closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/add-a-property"
                  className="nav-links"
                  onClick={this.closeMobileMenu}
                >
                  Add a Property
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/property-list"
                  className="nav-links"
                  onClick={this.closeMobileMenu}
                >
                  Property List
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/map"
                  className="nav-links"
                  onClick={this.closeMobileMenu}
                >
                  Map
                </Link>
              </li>
              <li>
                <Link
                  className={this.state.isLoggedIn ? "hidden" : "nav-links-squished-sign-up"}
                  onClick={this.handleOpen}
                >
                  Sign In
                </Link>
                <Link
                  className={ this.state.isLoggedIn ? "nav-links-squished-sign-out" : "hidden"}
                  onClick={this.deleteCookie}
                >
                  Sign Out
                </Link>
              </li>
            </ul>

            <button className={this.state.isLoggedIn ? "hidden" : "sign-up-button"} onClick={this.handleOpen}>
              Sign In
            </button>
            <button className={ this.state.isLoggedIn ? "sign-out-button" : "hidden"} onClick={this.deleteCookie}>
              Sign Out
            </button>
          </div>
        </nav>
        <Modal
          size="small"
          open={this.state.modalOpen}
          onClose={this.handleClose}
          closeIcon
        >
          
          <Header>{this.state.showSignUp ? "Sign Up" : "Sign In"}</Header>

          <Modal.Content className="loginModal">
            <div class="page">
              <div
                className={this.state.showSignUp ? "sign_up" : "sign_up_hidden"}
              >
                <form class="ui form">
                  <div class="field">
                    <p1>Email</p1>
                    <input
                      type="text"
                      className="email"
                      placeholder="Enter Email"
                      onChange={this.setEmail}
                    ></input>
                  </div>
                  <div class="field">
                    <p1>Password</p1>
                    <input
                      type="password"
                      className="password"
                      placeholder="Create Password"
                      onChange={this.setPassword}
                    ></input>
                  </div>
                  <div className="btn-login">
                    <button
                      type="button"
                      class="ui primary button"
                      onClick={this.sendUserData}
                    >
                      Sign Up
                    </button>
                    <button
                      type="button"
                      class="ui primary basic button"
                      onClick={() => this.showSignUp(false)}
                    >
                      Go Back to Login
                    </button>
                  </div>
                </form>
              </div>
              <div
                className={this.state.showSignUp ? "sign_in_hidden" : "sign_in"}
              >
                <form class="ui form">
                  <div class="field">
                    <p1>Email</p1>
                    <input
                      type="text"
                      className="emailLogin"
                      placeholder="Enter Email"
                      onChange={this.setEmail}
                    ></input>
                  </div>
                  <div class="field">
                    <p1>Password</p1>
                    <input
                      type="password"
                      className="passwordLogin"
                      placeholder="Enter Password"
                      onChange={this.setPassword}
                    ></input>
                  </div>
                  <div class="field">
                    <div className="btn-login">
                      <button type="button" class="ui primary button" onClick={this.getUserData}>
                        Sign In
                      </button>
                      <button
                        type="button"
                        class="ui primary basic button"
                        onClick={() => this.showSignUp(true)}
                      >
                        Create an Account
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className={
                this.state.isEmailTaken && this.state.showSignUp
                  ? "emailMsgShown"
                  : "emailMsgHidden"
              }
            >
              <div class="ui negative message">
                <p1>This email address is already being used.</p1>
              </div>
            </div>
            <div
              className={
                this.state.loginWrongPassword && !this.state.showSignUp
                  ? "emailMsgShown"
                  : "emailMsgHidden"
              }
            >
              <div class="ui negative message">
                <p1>Wrong password.</p1>
              </div>
            </div>
          </Modal.Content>
        </Modal>
      </>
    );
  }
}

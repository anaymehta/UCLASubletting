import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <form>
      <input
        type="text"
        classnName="username"
        placeholder="Enter Email"
      ></input>
      <input
        type="password"
        className="password"
        placeholder="Enter Password"
      ></input>
      <button type="submit">Sign Up</button>
    </form>
  );
}
export default Signup;

import React from "react";

function SignIn() {
  return (
    <form>
      <input type="text" className="email" placeholder="Enter Email"></input>
      <input
        type="password"
        className="password"
        placeholder="Enter Password"
      ></input>
      <button type="button">Sign In</button>
    </form>
  );
}
export default SignIn;

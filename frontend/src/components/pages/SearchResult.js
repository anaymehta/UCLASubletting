import React, { Component } from "react";
import "./SearchResult.css";

function getParam(parameterName) {
  let parameters = new URLSearchParams(window.location.search);
  document.getElementById("map-canvas").style.display = "none";
  return parameters.get(parameterName);
}

export default class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addr: getParam("addr"),
    };
  }

  render() {
    return <h1>{this.state.addr}</h1>;
  }
}
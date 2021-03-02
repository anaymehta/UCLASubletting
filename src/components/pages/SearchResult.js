import React, { Component } from "react";
import "./SearchResult.css";

export default class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
        addr: window.location.search.slice(6),
      };
  }

  render() {
    return(

        <h1>{this.state.addr}</h1>
    )


  }
}
/*
function SearchResult() {
  return (
      <script>
      alert(test)</script>
  );
}
export default SearchResult;
*/

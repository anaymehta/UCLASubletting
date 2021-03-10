import React from "react";

import "./Home.css";

function Home() {

  document.getElementById("map-canvas").style.display = "none";

  return (
    <>
      <div classname="home-container">
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        <h1 font-family="serif" className="cheesySlogan">
          Find a Westwood Apartment Today!
        </h1>

        <form action="./search-result" method="GET" className="searchbar">
          <input
            type="text"
            className="searchbar-input"
            placeholder="Enter Address"
            autocomplete="off"
            name="addr"
          ></input>
          <button type="submit" className="searchbar-button">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </>
  );
}

export default Home;

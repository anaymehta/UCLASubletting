import React from "react";

import "./Home.css";

function Home() {
  return (
    <>
      <div classname="home-container">
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        <h1 font-family="serif" className="cheesySlogan">
          Find a Westwood Apartment Today!
        </h1>
        <form action="./search-result" method="get">
          <div className="searchbar">
            <input
              type="text"
              className="searchbar-input"
              placeholder="Enter Address"
            ></input>
            <button type="submit" className="searchbar-button">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;

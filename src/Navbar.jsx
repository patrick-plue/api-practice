import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { GiMagnifyingGlass } from 'react-icons/gi';

function Navbar({ changeTopic, topic, metaData }) {
  console.log(metaData);
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <img
          id="icon"
          src="https://d1sz9gun5ag95e.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png"
          alt="icon"
        />
        <p>
          Search <br />
          Hacker News
        </p>
        <div id="searchInput">
          <GiMagnifyingGlass id="glass" />
          <input
            onInput={(e) => changeTopic(e.target.value)}
            type="text"
            id="searchbar"
            value={topic}
          />
          <p id="inputText">Search by algolia</p>
        </div>
        <AiOutlineSetting id="gearIcon" />
        <p>Settings</p>
      </div>
      <div className="subNavbar">
        <div className="selectContainer">
          <p>Search</p>
          <select name="" id="">
            <option value="Stories">Stories</option>
            <option value="">All</option>
            <option value="">Comment</option>
          </select>
          <p>by</p>
          <select name="" id="">
            <option value="Popularity">Popularity</option>
            <option value="">Date</option>
          </select>
          <p>for</p>
          <select name="" id="">
            <option value="All Time">All Time</option>
            <option value="">Last 24 hours</option>
          </select>
        </div>
        <div className="resultContainer">
          {metaData && <p>{metaData.nbHits} Results</p>}
          {metaData && <p>({metaData.processingTimeMS / 1000} seconds)</p>}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

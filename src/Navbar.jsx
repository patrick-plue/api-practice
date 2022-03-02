import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';

function Navbar({ changeTopic }) {
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
        <input
          onChange={(e) => changeTopic(e.target.value)}
          type="text"
          id="searchbar"
        />
        <AiOutlineSetting />
        <p>Settings</p>
      </div>
      <div>
        <select id="select">
          <option>All</option>
          <option>Story</option>
          <option>Comments</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;

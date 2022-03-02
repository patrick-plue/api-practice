import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';

function Navbar({ changeTopic, topic }) {
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
          value={topic}
        />
        <AiOutlineSetting />
        <p>Settings</p>
      </div>
    </div>
  );
}

export default Navbar;

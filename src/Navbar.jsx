import React from 'react';
import './App.css';

function Navbar({ search }) {
  return (
    <div className="navbar">
      <img
        id="icon"
        src="https://images.unsplash.com/photo-1593882100241-aef1449fe351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
        alt="icon"
      />
      <input onChange={search} type="text" id="searchbar" />
    </div>
  );
}

export default Navbar;

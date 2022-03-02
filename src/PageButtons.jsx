import React from 'react';
import './App.css';

function PageButtons({ number, changePage }) {
  return (
    <div>
      <button className="button" onClick={() => changePage(number)}>
        {number}
      </button>
    </div>
  );
}

export default PageButtons;

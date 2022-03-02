import React from 'react';
import './App.css';

function PageButtons({ number, changePage, currentPage }) {
  return (
    <div>
      <button
        className={number === currentPage ? 'button active' : 'button'}
        onClick={() => changePage(number)}
      >
        {number}
      </button>
    </div>
  );
}

export default PageButtons;

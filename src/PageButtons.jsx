import React from 'react';
import './App.css';

function PageButtons({ number, changePage, currentPage }) {
  return (
    <div>
      <button
        className={number - 1 === currentPage ? 'button active' : 'button'}
        onClick={() => changePage(number - 1)}
      >
        {number}
      </button>
    </div>
  );
}

export default PageButtons;

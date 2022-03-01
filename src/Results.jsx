import React from 'react';
import './App.css';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Results({ data, searchedData }) {
  return (
    <div className="results">
      {data &&
        data.map((e, index) => (
          <p className="resultElement" key={index}>
            {e.title} <br /> {e.author} <br /> {e.url}
          </p>
        ))}
      {!data && (
        <div className="loadingContainer">
          <p id="loadingElement">
            Loading.... <AiOutlineLoading3Quarters />{' '}
          </p>
        </div>
      )}
    </div>
  );
}

export default Results;

import React from 'react';
import './App.css';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Results({ data, searchedData }) {
  return (
    <div className="results">
      {data &&
        data.map((e, index) => (
          <p className="resultElement" key={index}>
            {e.title} <a href={e.url}>{e.url}</a>
            <br /> {e.author} <br />
          </p>
        ))}
      {!data && (
        <div className="loadingContainer">
          <p id="loadingElement">
            Loading.... <AiOutlineLoading3Quarters />
          </p>
        </div>
      )}
    </div>
  );
}

export default Results;

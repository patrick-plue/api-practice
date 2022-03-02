import React from 'react';
import './App.css';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Results({ data, noResults }) {
  return (
    <div className="results">
      {data &&
        data.map((e, index) => (
          <p className="resultElement" key={index}>
            {e.title} <a href={e.url}>{e.url}</a>
            <br /> {e.author} <br />
            {e.created_at}
          </p>
        ))}
      {!data && (
        <div className="loadingContainer">
          <p id="loadingElement">
            Loading.... <AiOutlineLoading3Quarters />
          </p>
        </div>
      )}
      {noResults && (
        <div className="resultElement">
          <p>Nothing found</p>
        </div>
      )}
    </div>
  );
}

export default Results;

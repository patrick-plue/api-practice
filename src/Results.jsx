import React from 'react';
import './App.css';

function Results({ data, searchedData }) {
  return (
    <div className="results">
      {data &&
        data.map((e, index) => (
          <p className="resultElement" key={index}>
            {e.title} {e.author} <br /> {e.url}
          </p>
        ))}
      {!data && <p>Loading....</p>}
    </div>
  );
}

export default Results;

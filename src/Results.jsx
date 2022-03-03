import React from 'react';
import './App.css';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Results({ data, noResults }) {
  return (
    <div className="results">
      {data &&
        data.map((e, index) => (
          <div className="resultElement" key={index}>
            <div className="resultTitle">
              <p className="resultTitleElement">{e.title} </p>
              <a className="resultTitleLink" href={e.url}>
                {e.url}
              </a>
            </div>
            <div className="resultFooter">
              <p>{e.points} points |</p>
              <p> {e.author} |</p>
              <p>{new Date(e.created_at).toLocaleString()} |</p>
              <p>{e.num_comments} comments</p>
            </div>
          </div>
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

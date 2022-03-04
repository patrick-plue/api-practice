import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Results from './Results';
import Footer from './Footer';
import PageButtons from './PageButtons';

function App() {
  // States
  const [data, setData] = useState();
  const [metaData, setMetaData] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [topic, setTopic] = useState('React');
  const [noResults, setNoResults] = useState(false);
  const [buttons, setButtons] = useState([]);

  console.log(currentPage);

  //UseEffects

  useEffect(() => {
    setTimeout(
      () =>
        fetch(
          `http://hn.algolia.com/api/v1/search?query=${topic}/&page=${currentPage}`
        )
          .then(
            (response) => {
              if (response.ok) {
                return response.json();
              }
              throw new Error('Request failed!');
            },
            (networkError) => console.log(networkError.message)
          )
          .then((jsonResponse) => {
            setData(jsonResponse.hits);
            setPages(jsonResponse.nbPages);
            setMetaData(jsonResponse);
            if (jsonResponse.hits.length < 1) {
              setNoResults(true);
            } else {
              setNoResults(false);
            }
          }),
      100
    );
  }, [topic, currentPage]);

  //dynamically render button component depending on number of pages
  let buttonArray = [];

  useEffect(() => {
    for (let i = currentPage - 4; i < currentPage + 4; i++) {
      if (i >= 0 && i < pages - 3) {
        buttonArray.push(
          <PageButtons
            key={i}
            number={i + 2}
            changePage={changePage}
            currentPage={currentPage}
          />
        );
      }
    }
    setButtons(buttonArray);
  }, [pages, currentPage]);

  //Functions

  const changePage = (n) => {
    setCurrentPage(n);
  };

  const changeTopic = (topic) => {
    setTopic(topic);
    setCurrentPage(0);
  };

  return (
    <>
      <div className="mainContainer">
        <Navbar topic={topic} changeTopic={changeTopic} metaData={metaData} />
        <Results data={data} noResults={noResults} />
        <div className="buttons">
          <button
            onClick={() => changePage(0)}
            className={currentPage === 0 ? 'button active' : 'button'}
          >
            1
          </button>
          {buttons.map((e) => e)}
          {!noResults && (
            <button
              onClick={() => changePage(pages - 1)}
              className={currentPage === pages - 1 ? 'button active' : 'button'}
            >
              {pages - 1}
            </button>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;

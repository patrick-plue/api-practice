import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Results from './Results';
import Footer from './Footer';
import PageButtons from './PageButtons';

function App() {
  // States
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [topic, setTopic] = useState('React');
  const [noResults, setNoResults] = useState(false);
  const [buttons, setButtons] = useState([]);

  //UseEffects

  useEffect(() => {
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
        if (jsonResponse.hits.length < 1) {
          setNoResults(true);
        } else {
          setNoResults(false);
        }
      });
  }, [topic, currentPage]);

  //dynamically render button component depending on number of pages
  let buttonArray = [];

  useEffect(() => {
    for (let i = currentPage - 3; i < currentPage + 2; i++) {
      if (i >= 1 && i < pages - 1) {
        buttonArray.push(
          <PageButtons
            key={i}
            number={i}
            changePage={changePage}
            currentPage={currentPage}
          />
        );
      }
    }
    setButtons(buttonArray);
  }, [currentPage]);

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
        <Navbar topic={topic} changeTopic={changeTopic} />
        <Results data={data} noResults={noResults} />

        <div className="buttons">
          <button onClick={() => changePage(0)}>first page</button>
          {buttons.map((e) => e)}
          <button onClick={() => changePage(pages - 1)}>last page </button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

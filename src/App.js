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
  console.log(currentPage);
  console.log(topic);

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
      });
  }, [topic, currentPage]);

  const changePage = (n) => {
    setCurrentPage(n);
  };

  const changeTopic = (topic) => {
    setTopic(topic);
    setCurrentPage(0);
  };

  //dynamically render button component depending on number of pages
  let buttonArray = [];

  for (let i = 0; i < pages; i++) {
    buttonArray.push(
      <PageButtons
        key={i}
        number={i}
        changePage={changePage}
        currentPage={currentPage}
      />
    );
  }

  return (
    <>
      <div className="mainContainer">
        <Navbar topic={topic} changeTopic={changeTopic} />
        <Results data={data} />
        <div className="buttons">{buttonArray}</div>
        <Footer />
      </div>
    </>
  );
}

export default App;

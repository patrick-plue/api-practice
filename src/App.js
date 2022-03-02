import React, { useEffect, useState } from 'react';
// import mock from './hackernews.json';
import Navbar from './Navbar';
import Results from './Results';
import Footer from './Footer';
import PageButtons from './PageButtons';

function App() {
  // States
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(0);
  console.log(currentPage);

  const startURL = 'http://hn.algolia.com/api/v1/search?tags=front_page';

  // const queryParams = "";
  // const searchApi = `http://hn.algolia.com/api/v1/search?query=...`

  // UseEffects
  useEffect(() => {
    fetch(startURL)
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
        console.log(jsonResponse);
        setData(jsonResponse.hits);
        setPages(jsonResponse.nbPages);
      });
  }, []);

  //Functions

  const search = ({ target, event }) => {
    const input = target.value;
    //search for page 2- implement pagination
    fetch(
      `http://hn.algolia.com/api/v1/search?query=${input}/&page=${currentPage}`
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
        console.log(jsonResponse);
      });
  };

  const changePage = (n) => {
    setCurrentPage(n);
  };

  let buttonArray = [];

  for (let i = 1; i <= pages; i++) {
    buttonArray.push(<PageButtons number={i} changePage={changePage} />);
  }

  return (
    <>
      <div className="mainContainer">
        <Navbar search={search} />
        <Results data={data} />
        <div className="buttons">{buttonArray}</div>
        <Footer />
      </div>
    </>
  );
}

export default App;

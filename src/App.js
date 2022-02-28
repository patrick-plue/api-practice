import React, { useEffect, useState } from 'react';
import mock from './hackernews.json';
import Navbar from './Navbar';
import Results from './Results';
import Footer from './Footer';

function App() {
  const [data, setData] = useState();
  const [searchedData, setSearchedData] = useState({});

  const api = 'http://hn.algolia.com/api/v1/search_by_date?tags=story';
  // const searchApi = `http://hn.algolia.com/api/v1/search?query=...`

  useEffect(() => {
    fetch(api)
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
      });
  }, []);

  const search = ({ target, event }) => {
    const input = target.value;
    fetch(`http://hn.algolia.com/api/v1/search?query=${input}`)
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
      });
  };

  return (
    <>
      <div className="mainContainer">
        <Navbar search={search} />
        <Results data={data} />
        <Footer />
      </div>
    </>
  );
}

export default App;

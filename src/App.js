import React, { useEffect, useState } from 'react';
import mock from './hackernews.json';
import Navbar from './Navbar';
import Results from './Results';
import Footer from './Footer';

function App() {
  const [data, setData] = useState();
  const [searchedData, setSearchedData] = useState({});

  const api = 'http://hn.algolia.com/api/v1/search?query=foo&tags=story';

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
        setData(jsonResponse.hits);
      });
  }, []);

  // const search = ({ target }) => {
  //   const input = target.value;
  //   const dataList = data.map((e) => e);
  //   const results = dataList.filter((e) => e.title.includes(input));
  //   console.log(results);
  //   setData(results);
  // };

  return (
    <>
      <div className="mainContainer">
        <Navbar />
        <Results data={data} />
        <Footer />
      </div>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import mock from './hackernews.json';
import Navbar from './Navbar';
import Results from './Results';
import Footer from './Footer';

function App() {
  const [data, setData] = useState(mock.hits);
  const [searchedData, setSearchedData] = useState({});

  const search = ({ target }) => {
    const input = target.value;
    const dataList = data.map((e) => e);
    const results = dataList.filter((e) => e.title.includes(input));
    console.log(results);
    setData(results);
  };

  return (
    <>
      <div className="mainContainer">
        <Navbar search={search} />
        <Results data={data} searchedData={searchedData} />
        <Footer />
      </div>
    </>
  );
}

export default App;

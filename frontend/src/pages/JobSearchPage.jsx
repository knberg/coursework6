import React, { useEffect } from 'react';
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';
import SearchJobFilters from '../components/search/SearchJobFilters';
import SearchJobResults from '../components/search/SearchJobResult';
import { useDispatch } from 'react-redux';


const JobSearchPage = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setQuery(''));
  //   dispatch(setCategory(''));
  //   dispatch(setEducation(''));
  //   dispatch(setEmployment(''));

  //   if (query) {
  //     dispatch(setQuery(query));
  //     dispatch(fetchSearchResults({ query }));
  //   }
  // }, [dispatch, query]);


  return (
    <>
      <Header />
        <div className="wrapper">
          <div className="search-page">
            <SearchJobFilters />
            <SearchJobResults />
          </div>
        </div>
      <Footer />
    </>

  );
};

export default JobSearchPage;

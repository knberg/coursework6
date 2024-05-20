import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchBy, setQuery } from '../../redux/slices/searchSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchBy = useSelector((state) => state.search.searchBy);
  const query = useSelector((state) => state.search.query);

  const handleSearch = () => {
    navigate(`/${searchBy}/search`);
  };

  return (
    <div className="search-bar">
        <input
          type="text"
          className="search-input"
          value={query}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          placeholder="Поиск вакансии"
        />
        <select
          className="search-select"
          value={searchBy}
          onChange={(e) => dispatch(setSearchBy(e.target.value))}
        >
          <option value="jobs">Вакансии</option>
          <option value="resumes">Резюме</option>
          <option value="companies">Компании</option>
        </select>
        
        <button className="search-button" onClick={handleSearch}>
            <i className="fa fa-search" aria-hidden="true"></i>
        </button>
    </div>
  );
};

export default SearchBar;

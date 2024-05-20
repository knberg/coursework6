import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoResults from './NoResults';
import SearchJobItem from './SearchJobItem';
import { fetchJobs } from '../../redux/slices/searchSlice';



const SearchJobResults = () => {
    const dispatch = useDispatch();
    
    const results = useSelector((state) => state.search.jobs.results);
    const loading = useSelector((state) => state.search.loading);
    const error = useSelector((state) => state.search.error);

    const filters = useSelector((state) => state.search.jobs.filters);

    useEffect(() => {
        dispatch(fetchJobs());
    }, [filters, dispatch]);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    if (results.length === 0) {
        return <NoResults />;
    }

    return (
        <div className="search-results">
            {results.map((item, index) => (
                <SearchJobItem key={index} data={item} />
            ))}
        </div>
    );
};

export default SearchJobResults;

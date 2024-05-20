import { useDispatch, useSelector } from 'react-redux';
import { setJobEducation, setJobEmployment, setJobSpecialty } from '../../redux/slices/searchSlice';

const educationLevels = [
    { id: 1, name: 'Среднее' },
    { id: 2, name: 'Среднее специальное' },
    { id: 3, name: 'Высшее' },   
];

const employmentTypes = [
    { id: 1, name: 'Полная занятость' },
    { id: 2, name: 'Частичная занятость' },
    { id: 3, name: 'Проектная работа' },
];
const specialties = [
    { id: 1, name: 'Программист' },
    { id: 2, name: 'Дизайнер' },
    { id: 3, name: 'Маркетолог' },
];

const SearchJobFilters = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.search.jobs.filters);

    return (
        <div className="search-filters">
        <label htmlFor="specialty" className='filter-label'>Специальность</label>
        <select
            className='filter-select'
            name="specialty"
            value={filters.specialty}
            onChange={(e) => dispatch(setJobSpecialty(e.target.value))}
        >
            <option value="">все</option>
            {specialties.map((specialty) => (
                <option key={specialty.id} value={specialty.id}>
                    {specialty.name}
                </option>
            ))}
        </select>

        <label htmlFor="education" className='filter-label'>Образование</label>
        <select
            className='filter-select'
            name="education"
            value={filters.education}
            onChange={(e) => dispatch(setJobEducation(e.target.value))}
        >
            <option value="">все</option>
            {educationLevels.map((level, index) => (
            <option key={index} value={level.id}>
                {level.name}
            </option>
            ))}
        </select>

        <label htmlFor="employment" className='filter-label'>Тип занятости</label>
        <select
            className='filter-select'
            name="employment"
            value={filters.employment}
            onChange={(e) => dispatch(setJobEmployment(e.target.value))}
        >
            <option value="">все</option>
            {employmentTypes.map((type, index) => (
            <option key={index} value={type.id}>
                {type.name}
            </option>
            ))}
        </select>
        </div>
    );
};

export default SearchJobFilters;

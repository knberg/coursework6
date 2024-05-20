import { Link } from "react-router-dom";

const FilterLink = (props) => {
    return (
        <div className="filter-link">
            <Link to={`/jobs/search?${props.param}=${props.value}`}>{props.name}</Link>
        </div>
    )
}

const FilterLinkList = ({filters}) => {
    return (
        <div className="filter-link-list">
            {filters.map((f) => (
                <FilterLink key={f.value} param={f.param} value={f.value} name={f.name} />
            ))}
        </div>
    )
}

export default FilterLinkList;
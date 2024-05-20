import { Link } from "react-router-dom";


const ProfessionLink = ({id, name, count}) => {
  return (
      <div className="profession-link">
          <Link to={`/jobs/search?specialty=${id}`}>
              <h4 className="profession-name">{name}</h4>
              <p className="profession-count">{count}</p>
          </Link>
      </div>
  )
}


const ProfessionLinkList = ({specialties}) => {

    return (
        <div className="profession-link-list">
          {specialties.map((s) => (
            <ProfessionLink key={s.id} id={s.id} name={s.name} count={s.count} />
          ))}
        </div>
    );
  };
  
  export default ProfessionLinkList;
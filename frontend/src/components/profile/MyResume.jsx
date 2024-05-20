import { Link } from "react-router-dom";
import { authClient } from "../../axios";


const MyResume = ({data}) => {

    const deleteResume = (id) => {
        authClient.delete(`/resume/${id}`)
            .then(() => window.location.reload())
            .catch(err => console.log(err));
    }

    return (
        <div className="my-resume">
            <span className="title">{data.title}</span>
            <div className="buttons">
                <button><Link to={`/resume/${data.id}`}>Изменить</Link></button>
                <button onClick={() => deleteResume(data.id)}>Удалить</button>
            </div>
        </div>
    )
}

export default MyResume;
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Movie({ cover, title, summary, genres, id }) {
    return (
        <div>
            <NavLink to={`/movie/${id}`}>
                <strong>{title}</strong>

                <img src={cover} alt={title} />
                <p>{summary}</p>
                <ul>
                    {genres.map((g) => {
                        return <li key={g}>{g}</li>;
                    })}
                </ul>
            </NavLink>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;

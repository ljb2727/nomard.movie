import React from "react";
import { useState, useEffect } from "react";
import Movie from "../components/Movie";
function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const get = async () => {
        const res = await fetch(
            "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
        );
        const json = await res.json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        get();
    }, []);
    return (
        <div>
            {loading ? (
                "loading"
            ) : (
                <div>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            cover={movie.small_cover_image}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;

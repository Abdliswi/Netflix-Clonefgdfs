import React, { useEffect, useState } from "react"
import MovieList from "../MovieList/movieList"

export default function Home() {
    const [movies, setMovies] = useState([]);

    async function getData() {
        let response = await fetch(`https://serverappme.herokuapp.com/trending`);
        let data = await response.json();
        setMovies(data);
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <h1>home page</h1>            
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                {movies && <MovieList trendingMovie={movies} />}               
            </div>


        </>
    )
}
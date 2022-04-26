import React from 'react'
import MovieList from "../includes/MovieList"

function MovieCont({lists}) {
  return (
    <article className="movie__cont">
        <div className="container">
            <div className="movie__inner">
                <MovieList items={lists}/>
            </div>
        </div>
    </article>
)
}

export default MovieCont
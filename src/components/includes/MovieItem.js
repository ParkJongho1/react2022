import React from 'react'

function MovieItem(props) {
    return (
        <li>
            <img src={`https://image.tmdb.org/t/p/w500/${props.results.poster_path}`} alt="" />
            <p className="title">{props.results.title}</p>
        </li>
    )
}

export default MovieItem
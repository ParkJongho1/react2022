import React from 'react';

function MovieItem(props) {
    return (
        <li>
            <img src={`https://image.tmdb.org/t/p/w500/${props.video.poster_path}`} alt={props.video.original_title} />
            <p className="title">{props.video.original_title}</p>
        </li> 
        // {`https://image.tmdb.org/t/p/w500/"${props.video.poster_path}`}
    )
}

function MovieList(props) {
    console.log(props.lists.data.results)
  return (
    <div className="movie__list">
            <ul>
                {props.lists.data.results.map((list, index) => (
                    <MovieItem key={index} video={list} />
                ))}
            </ul>
        </div>      
  )
}
export default MovieList;
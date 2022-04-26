import React from 'react';

function MovieItem(props) {
    return (
        <li>
            {/* <a href={`http://www.youtube.com/watch?v=${props.results.id.videoId}`} target="_blank" rel="noreferrer"></a> */}
            <img src={`https://image.tmdb.org/t/p/w500/${props.results.poster_path}`} alt="" />
            <p className="title">{props.results.title}</p>
        </li>
    )
}

export default MovieItem;
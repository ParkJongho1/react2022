import React from 'react'
import MovieItem from "./MovieItem"


function MovieList(props) {
    console.log(props)
  return (
    <div className='movie__list'>
        <ul>
            {props.videos.map((list,index) => (
                <MovieItem 
                    key={index}
                    results={list}
                />
            ))}
        </ul>
    </div>
  )
}

export default MovieList
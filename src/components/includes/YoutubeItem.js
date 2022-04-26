import React from 'react'

function YoutubeItem(props) {
  return (
    <li>
        <a href={`http://www.youtube.com/watch?v=${props.video.id.videoId}`} target="_blank" rel="noreferrer">
            <img
                src={props.video.snippet.thumbnails.medium.url}
                alt={props.video.snippet.title} />
            <p>
                {props.video.snippet.title}
            </p>
        </a>
    </li>
  )
}

export default YoutubeItem
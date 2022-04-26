import React from 'react';
import YoutubeList from './YoutubeList';

function YoutubeCont(props) {
  return (
      <section className="youtube__cont">
        <div className="container">
            <div className="youtube__inner">
              {/* <YoutubeSearch /> */}
              <YoutubeList lists = {props.lists}/>
            </div>
        </div>
      </section>
  )
}

export default YoutubeCont; 

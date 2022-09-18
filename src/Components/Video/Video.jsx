import React from 'react'
import './video.scss'
import PropTypes from "prop-types";

function Video({embedId}) {
  return (
    <div className="video-responsive">
        <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         title="Embedded youtube"
    />
  </div>
  )
}

Video.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Video
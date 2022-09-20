import React from 'react'
import './displaytwo.scss'

function Displaysix(props) {
  return (
    <div className='displaysix'>

      <div className="video">
        <iframe
        src={`https://www.youtube.com/embed/${props.id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         title="Embedded youtube"
        />
      </div>
    </div>
  )
}

export default Displaysix
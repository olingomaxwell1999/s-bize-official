import React from 'react'

import './info.scss'

function Infovideo() {
  return (
    <section className="section info">
      <div className="container">
        <div className="columns">
          <div className="column text">
            <h1 className="title">Informational Video</h1>

            <p>Learn about the tactics of the S-Bize program and the organizations that we engage.<br/><br/> Applications for 2022/23 S-Bize organizations are closed. Check back in July 2023 to join as a client organization</p>
          </div>
          <div className="column video">
            <iframe title='video' frameborder="10" scrolling="no" marginheight="0" marginwidth="0"width="100%" height="100%" type="text/html" src="https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com"><div><small><a href="https://youtubeembedcode.com/es/">youtubeembedcode.com/es/</a></small></div><div><small><a href="https://oddssidorutansvensklicens.se/">https://oddssidorutansvensklicens.se/</a></small></div></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Infovideo
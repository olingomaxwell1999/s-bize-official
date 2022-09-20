import React from 'react'
import './bannertwo.scss'
import {motion} from 'framer-motion'

function Bannertwo(props) {
  return (
    <motion.div initial={{x:-500, opacity:0, scale:0.5}} animate={{x:0, opacity:1, scale:1}} transition={{duration:.5}} style={{
          backgroundImage: `url(${props.bg})`
        }} id="banner" className='bannertwo'>
        <div className="overlay"></div>
        <h1>{props.title}</h1>
    </motion.div>
  )
}

export default Bannertwo
import React,{useEffect} from 'react'
import './cohorts.scss'
import Card from '../Card/Card'
import nairobits from '../../assets/sautiafricalogo.jpeg'
import relinked from '../../assets/africayouthlogo.png'
import ruben from '../../assets/utenalogo.png'
import wanawake from '../../assets/codewithkidslogo.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Cohortsthree() {
  useEffect(() => {
    AOS.init({duration:2000})
  })
  return (
    <div className='main-wrapper'>
      <div className="text" data-aos='fade-up'>
        <h1>Explore the centers</h1>
      </div>

      <div className="cohort" data-aos='fade-up'>
        <Card img={nairobits} title="Sauti Africa" desc="A community based organization that supports young people to use art as a way to create social change in the communities..." link="/sautiafrica"  />

        <Card img={relinked} title="africa youth trust" desc="An independent, non-partisan development and advocacy organization spearheading a Youth Led Development model in Kenya..." link="/africayouthtrust"  />

        <Card img={ruben} title="U-tena youth organization" desc="A Kenyan NGO focused on empowering youth to realize their full potential, promoting healthy living, education, livelihood and social responsibility..." link="/utenayouthorganisation"  />

        <Card img={wanawake} title="code with kids" desc="A STEM maker space that organizes STEM sessions for community members with a focus on addressing real-life problems..." link="/codewithkids"  />
      </div>
    </div>
  )
}

export default Cohortsthree
import React from 'react'
import './cohorts.scss'
import Card from '../Card/Card'
import nairobits from '../../assets/nairobits.png'
import relinked from '../../assets/relinked.jpg'
import ruben from '../../assets/ruben.jpg'
import wanawake from '../../assets/w4w.jpg'

function Cohorts() {
  return (
    <div className='main-wrapper'>
      <div className="text">
        <h1>Explore the centers</h1>
      </div>

      <div className="cohort">
        <Card img={nairobits} title="Nairobits Trust" desc="NairoBits was created to empower youth from under-served backgrounds, using Information Communication Technology (ICT). The primary target group is disadvantaged youth from the informal urban settlements of Nairobi...." link="/nairobits"  />

        <Card img={relinked} title="Relinked Group" desc="Relinked Group is a growing network of young people who are using their gifts, skills, and expertise to create compelling opportunities that contribute to sustainable development. They currently work with young people East-lands of Nairobi....." link="/relinkedgroup"  />

        <Card img={ruben} title="Ruben Center" desc="Ruben Centre is a non-profit, faith-based organization striving for an empowered and just Mukuru community by providing quality education, health, financial and social services to children and families in the area. It’s run by the CBAP..." link="/rubencenter"  />

        <Card img={wanawake} title="Wanawake Kwa Wanawake" desc="Women For Women In Africa works with the women and children of Kibera, East Africa’s largest slum, and one of the largest in the world, by providing education and resources to enable them to live a life of hope for the future..." link="/wanawake"  />
      </div>
    </div>
  )
}

export default Cohorts
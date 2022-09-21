import React,{useEffect} from 'react'
import './cohorts.scss'
import Card from '../Card/Card'
import sunflower from '../../assets/sunflower.png'
import greenkenya from '../../assets/greenkenya.jpg'
import ruben from '../../assets/ruben.jpg'
import mpikenya from '../../assets/mpi.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Cohortstwo() {
  useEffect(() => {
    AOS.init({duration:2000})
  })
  return (
    <div className='main-wrapper'>
      <div className="text" data-aos='fade-up'>
        <h1>Explore the centers</h1>
      </div>

      <div className="cohort" data-aos='fade-up'>
        <Card img={sunflower} title="sunflower foundation" desc="The Sunflower Trust delivers literacy and leadership development programs that provide holistic educational support to vulnerable children through literacy, technology and arts....." link="/sunflowerfoundation"  />

        <Card img={greenkenya} title="Green Kenya" desc="Green Kenya develops life skills among local youth through Sports for Development programmes. This project lies at the intersection of sports, life skills development, gender and environment..." link="/greenkenya"  />

        <Card img={ruben} title="Ruben Center" desc="Ruben Centre is a non-profit, faith-based organization striving for an empowered and just Mukuru community by providing quality education, health, financial and social services to children and families in the area. It’s run by the CBAP..." link="/rubencenter"  />

        <Card img={mpikenya} title="Mpi-Kenya" desc="Mathare Peace Initiative Kenya (MPI-KENYA) is a social network community based organization based in Mathare, focused on community development..." link="/mpi"  />
      </div>
    </div>
  )
}

export default Cohortstwo
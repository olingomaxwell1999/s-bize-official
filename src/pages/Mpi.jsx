import React from 'react'
import Bannertwo from '../Components/Bannertwo/Bannertwo'
import back2 from '../assets/mribanner.jpg'
import Displayfive from '../Components/Displayfive/Displayfive'
import Displaysix from '../Components/Displaysix/Displaysix'
// import Displaytwo from '../Components/Displaytwo/Displaytwo'
import Displayseven from '../Components/Displayseven/Displayseven'

function Mpi() {
  return (
    <div className='nairobits'>
      <Bannertwo bg={back2} title="Mathare peace Initiative"/>

      <Displayfive title="about Mathare peace Initiative" desc="Mathare Peace Initiative Kenya (MPI-KENYA) is a social network of Community Based Organizations based in Mathare and its environs. MPI-Kenya was formed in 2011 and registered in 2014 in the Office of the Vice President Ministry  of Home Affairs, Heritage and Sports, Department of Social Services. 

The organization is among the pioneer grassroots’ peacebuilding organizations championing for a peaceful community in a resource constrained setting. MPI Kenya mandate is to strengthen the capacities of Communities to manage conflict in non violent, non-coercive ways by locals in their efforts to develop social and political Cohesion. "/>

      <Displaysix id='Lq2cKSMdqvk'/>

      <Displayseven title='suggested project & deliverable' desc="

The suggested deliverable for this project is designing an impactful Youth Entrepreneurship programme for young people living in Mathare.

The Education program is not inclusive to the group that dropped out of school  before sitting for K.C.P.E (Kenya Certificate of Primary Education) and also those who got poor grades after Form 4. Youth in this group often become idle and easily start involving in harmful activities including drug abuse and insecurity (theft), this group of youths therefore become a  threat to the community and can be engaged in other activities for their survival. We believe that they can be  developed in entrepreneurship as a pathway to self-reliance.
." link="https://www.mpikenya.org/"/>
    </div>
  )
}

export default Mpi
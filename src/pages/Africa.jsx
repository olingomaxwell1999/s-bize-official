import React from 'react'
import Bannertwo from '../Components/Bannertwo/Bannertwo'
import back2 from '../assets/africabanner.webp'
import Displayfive from '../Components/Displayfive/Displayfive'
import Displaysix from '../Components/Displaysix/Displaysix'
// import Displaytwo from '../Components/Displaytwo/Displaytwo'
import Displayseven from '../Components/Displayseven/Displayseven'

function Africa() {
  return (
    <div className='nairobits'>
      <Bannertwo bg={back2} title="Africa Youth Trust"/>

      <Displayfive title="about Africa Youth Trust" desc="Africa Youth Trust (AYT) is an independent, non-partisan development and advocacy organization. Founded in 2005, AYT is registered in Kenya as a trust under the Trustee (Perpetual Succession) Act. AYT was created specifically to spearhead a youth-led development model in Kenya with a view of replication in other African Countries. AYT has majored its programming  in Youth and good governance (Young People in good governance), Livelihood resilience. (Economic Empowerment), Climate Smart Agriculture, Gender equality and women empowerment.(Advancing Young Women Rights) and Organizational development. "/>

      <Displaysix id='sUF2sqmeoy4'/>

      <Displayseven title='suggested project & deliverable' desc="In partnership with ActionAid International Kenya, AYT is implementing the Access to Justice and Security project, in two areas in Nairobi, Mukuru and Majengo. In Mukuru slums the project has taken root in the following areas; Mukuru Kwa Njenga, Pipeline, Kware, Imara Daima, Mukuru Kwa Ruben, Viwandani, Mukuru Kayaba and Mariguini. Through the use of the innovative mobile technology 21094 SMS platform, women and girls who have experienced sexual and gender-based violence can report the case and be connected to legal, medical and psychosocial support.
 
The organization is looking for a way to make this program sustainable
" link="https://africayouthtrust.org
" />
    </div>
  )
}

export default Africa
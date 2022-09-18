import React from 'react'
import Bannertwo from '../Components/Bannertwo/Bannertwo'
import back2 from '../assets/w4w.jpg'
import target from '../assets/target.jpg'
import sustainability from '../assets/sustainability.jpg'
import Displaysix from '../Components/Displaysix/Displaysix'
// import Displaytwo from '../Components/Displaytwo/Displaytwo'
import Displayseven from '../Components/Displayseven/Displayseven'
import Displaynine from '../Components/Displaynine/Displaynine'

function Wanawake() {
  return (
    <div className='nairobits'>
      <Bannertwo bg={back2} title="Ruben Centre"/>

      <Displaynine title="Social Problem" desc="Imagine a place where finding water – any water – was the most vital task, each and every day. Welcome to Kibera, East Africa’s largest slum. A place where crime, drugs, prostitution, and violence are pretty much the only career choices for the children who grow up here. "/>

      <Displaysix title='Sustainability' desc="Women For Women In Africa believes the best way to relieve poverty is through education. As such, the organization works in East Africa’s largest slum and one of the largest in the world, by providing education and resources to enable children to live a life of dignity, happiness, and hope for the future.

The organization has a bustling multi-level building with rooms that house Chappell Informal School; rooms for dealing with health care issues; rooms for workshops and meetings; rooms for our women’s group to do their sewing and craft activities; and rooms to give our people the room to showcase and sell the products they make and an ICT center for youth." img={sustainability}/>

      <Displayseven title='Target Group' desc="The organization primarily works with orphan and vulnerable children from the slum who are in need of school fees, youth, and women from the slum who are empowered with ICT, business, and entrepreneurial skills" link="https://womenforwomeninafrica.org.au/community-centre/" img={target}/>
    </div>
  )
}

export default Wanawake
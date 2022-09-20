import React from 'react'
import Bannertwo from '../Components/Bannertwo/Bannertwo'
import back2 from '../assets/w4w.jpg'
import Displaysix from '../Components/Displaysix/Displaysix'
// import Displaytwo from '../Components/Displaytwo/Displaytwo'
import Displayseven from '../Components/Displayseven/Displayseven'
import Displayfive from '../Components/Displayfive/Displayfive'

function Wanawake() {
  return (
    <div className='nairobits'>
      <Bannertwo bg={back2} title="Wanawake kwa wanawake"/>

      <Displayfive title="about wanawake kwa wanawake center" desc="Imagine a place where finding water – any water – was the most vital task, each and every day. Welcome to Kibera, East Africa’s largest slum. A place where crime, drugs, prostitution, and violence are pretty much the only career choices for the children who grow up here. "/>

      <Displaysix id='MxmpnQFHhZk'/>

      <Displayseven title='suggested project & deliverables' desc="Women For Women In Africa believes the best way to relieve poverty is through education. As such, the organization works in East Africa’s largest slum and one of the largest in the world, by providing education and resources to enable children to live a life of dignity, happiness, and hope for the future.

      The organization has a bustling multi-level building with rooms that house Chappell Informal School; rooms for dealing with health care issues; rooms for workshops and meetings; rooms for our women’s group to do their sewing and craft activities; and rooms to give our people the room to showcase and sell the products they make and an ICT center for youth. The organization primarily works with orphan and vulnerable children from the slum who are in need of school fees, youth, and women from the slum who are empowered with ICT, business, and entrepreneurial skills" link="https://womenforwomeninafrica.org.au/community-centre/"/>
    </div>
  )
}

export default Wanawake
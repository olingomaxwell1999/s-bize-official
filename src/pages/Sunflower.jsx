import React from 'react'
import Bannertwo from '../Components/Bannertwo/Bannertwo'
import back2 from '../assets/sunflowerbanner.jpg'
import Displayfive from '../Components/Displayfive/Displayfive'
import Displaysix from '../Components/Displaysix/Displaysix'
// import Displaytwo from '../Components/Displaytwo/Displaytwo'
import Displayseven from '../Components/Displayseven/Displayseven'

function Sunflower() {
  return (
    <div className='nairobits'>
      <Bannertwo bg={back2} title="Sunflower Trust"/>

      <Displayfive title="about sunflower Trust" desc="Sunflower Trust was founded in 2017 and registered in 2018 as a charitable Trust under the law of Kenya. Sunflower is a literacy and leadership development program that provides holistic educational support to vulnerable children through literacy, technology, reproductive health education, arts and culture, life skills and sports.

Sunflower believes in its LEADership principles which are the guiding force behind all of programming; we are building LEADers through the active cultivation of Love, Education, Action and Discipline. Every day, we challenge our Fellows (girls) to demonstrate our LEAD principles through their actions towards themselves, and one another.

Literacy as leadership and a form of justice is at the core of our programming. Free literacy is not simply the ability to read and write fluently, but the ability to freely express oneself through reading, writing, discussion and arts. While there are many literate youth in the world, there are few who are truly freely literate; whose voices are heard, whose opinions and beliefs are listened to and taken into account, and who have the ability to fully express themselves and be who they want to be."/>

      <Displaysix id='Efq3O9N7eCk'/>

      <Displayseven title='suggested project & deliverable' desc="The suggested deliverable for this project is to create a sustainable business model for their in-school and after-school programs, enabling them to scale their social impact." link="https://sunflowerfoundation.ngo/" />
    </div>
  )
}

export default Sunflower
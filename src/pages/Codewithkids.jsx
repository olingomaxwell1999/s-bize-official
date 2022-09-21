import React from 'react'
import Bannertwo from '../Components/Bannertwo/Bannertwo'
import back2 from '../assets/codewithkidsbanner.jpg'
import Displayfive from '../Components/Displayfive/Displayfive'
import Displaysix from '../Components/Displaysix/Displaysix'
// import Displaytwo from '../Components/Displaytwo/Displaytwo'
import Displayseven from '../Components/Displayseven/Displayseven'

function Codewithkids() {
  return (
    <div className='nairobits'>
      <Bannertwo bg={back2} title="code with kids"/>

      <Displayfive title="about code with kids" desc="Code with kids is a STEM maker space that organizes STEM sessions for young people aged 6–18 years in Kibera. This is fun and interactive training focused on Science, Technology, Engineering, and Math. Our model focuses on producing results and addressing real-life problems through human-centered designs. At Code With Kids, our Learners make connections between real-world problems, their communities, and their schools to further their development in the literacy of science, technology, engineering, and math. We’re confident that adopting this philosophy will help to transform education from an ordinary classroom experience to an exploratory learning-centered environment of discovery and problem-solving. We hold after school sessions with kids and holiday STEM bootcamps."/>

      <Displaysix id='hfxbyyNoVtU'/>

      <Displayseven title='suggested project & deliverable' desc="Code with Kids: The project gives the kids a space where they can come and learn STEM. the program creates opportunities for young people to explore technology and learn how best to use STEM to solve issues affecting their community. It gives young people confidence, new friends, and valuable skills for the future. The program opens up new avenues for children who might not otherwise have such learning opportunities since they are coming from low-income areas. Our programs are designed to help kids see technology from a whole new perspective as a medium for self-expression, and as a means of changing the world.
 
 
The organization is looking for a way to make this program self-sustaining
" link="https://www.linkedin.com/company/code-with-kids/?originalSubdomain=ke"/>
    </div>
  )
}

export default Codewithkids
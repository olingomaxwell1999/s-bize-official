import React from 'react'
import Bannertwo from '../Components/Bannertwo/Bannertwo'
import back2 from '../assets/nairobits.png'
import target from '../assets/target.jpg'
import sustainability from '../assets/sustainability.jpg'
import Displayfive from '../Components/Displayfive/Displayfive'
import Displaysix from '../Components/Displaysix/Displaysix'
// import Displaytwo from '../Components/Displaytwo/Displaytwo'
import Displayseven from '../Components/Displayseven/Displayseven'

function Nairobits() {
  return (
    <div className='nairobits'>
      <Bannertwo bg={back2} title="Nairobits Trust"/>

      <Displayfive title="Nairobits Trust" desc="Social Problem for Nairobits is Unemployment is a major challenge affecting youth across Kenya. With approximately 800,000 young Kenyans joining the labor market every year, its economy cannot provide the necessary number of job opportunities in both the formal and informal sectors to absorb these numbers. The challenge of youth unemployment is compounded by the fact that 90% of all unemployed young people lack vocational skills. Addressing youth unemployment therefore calls for innovation, investment, and commitment among all stakeholders. NairoBits exists to promote creative and innovative use of ICT that positively transforms and empowers the youth for an enhanced quality of life, envisioning a workforce with adequate access to equal opportunities and a positive impact in the society. "/>

      <Displaysix title='Sustainability' desc="Sustainability remains central to NairoBits goal of achieving an effective model of continuity for it’s work. Currently, more than 90% of the organization’s funding comes from international donors. Over the years, the changing funding dynamics, donor focus and global economy has negatively affected the funding that NairoBits receives. However, NairoBits positioning in the Tech and development sector provides opportunities for it to scale its operations and incorporate a profit-making vehicle to supplement donor funding and support its program." img={sustainability}/>

      <Displayseven title='Target Group' desc="The program targets young, energetic, innovative, and creative individuals, to provide them with skills-based training, working spaces, and a platform to interact and network with their peers and share ideas. The program was developed from the recognition of available potential, ideas, creativity, and underlying talent among our graduates as evidenced by innovative project ideas developed in the course of their learning process.

      NairoBits is looking to start up a new program; BitsHub. This is an envisioned incubation and acceleration program structured to support business-minded students to design and create solutions that will benefit them and their communities. 

      The incubation and acceleration will be done co-jointly with the organization’s beneficiaries by offering consulting services to the startups including business research, strategic advice and guidance, fundraising training, business training programs, and access to relevant business events.

      The BitsHub is envisioned as the tool that would support innovation where NairoBits would provide solutions for different markets and clients by working with its beneficiaries. This would ensure that NairoBits is at per with market trends, providing solutions to social challenges, generating an income, and providing employment for its students.." link="https://www.nairobits.com" img={target}/>
    </div>
  )
}

export default Nairobits
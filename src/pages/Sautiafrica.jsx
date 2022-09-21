import React from 'react'
import Bannertwo from '../Components/Bannertwo/Bannertwo'
import back2 from '../assets/sautiafrica.jpg'
import Displayfive from '../Components/Displayfive/Displayfive'
import Displaysix from '../Components/Displaysix/Displaysix'
// import Displaytwo from '../Components/Displaytwo/Displaytwo'
import Displayseven from '../Components/Displayseven/Displayseven'

function Sautiafrica() {
  return (
    <div className='nairobits'>
      <Bannertwo bg={back2} title="Sauti africa"/>

      <Displayfive title="Sauti Africa" desc="Sauti Afrika is a community based organization that supports young people to use art as a way to create social change in the communities. The organization was established in 2016 and seeks to create socioeconomic transformation for communities by incorporating innovative ways using integrated right-based approaches in Health, Education, Economic Empowerment and Leadership and Governance. Sauti Africa utilizes a multi-sectoral approach, Quadra Helix development approach bringing together Government, Private sector, Academia and Civil society.  This response has allowed for implementation of programs in Mental and Sexual Health, Education, Economic Empowerment and Leadership and Governance Sectors. The organization engages young people in a constructive manner enabling them to initiate and build their ideas, develop prototypes, test and develop products that meet the people’s needs and help reduce the problems and challenges that are most faced in the community."/>

      <Displaysix id='CNiJUGnDo04'/>

      <Displayseven title='suggested project & deliverable' desc="A Million Comforts: This program aims to provide affordable pads to young women in Mukuru. The program seeks to eradicate period poverty by offering Affordable, Biodegradable and Super Absorbent Banana Fiber Sanitary towels. With utilization of Banana Pseudo stem, an agricultural waste for textile, Sauti Africa manufactures pads that are eight times more absorbent than any other pad in the market by using non-woven organic fiber and non-woven organic clothes to keep girls in villages and informal settlements in school and create jobs for local women.
 
Sauti Africa believes that as a social enterprise they can conduct business by keeping people, the planet and economic empowerment at the heart of everything they do. The program reduces plastic waste, offers employment for local women and additional income to banana farmers for their agricultural waste.
 
The organization is looking for a way to ensure that this program will be able to finance some of the activities that they are doing.
" link="https://sautiafrica.org/"/>
    </div>
  )
}

export default Sautiafrica
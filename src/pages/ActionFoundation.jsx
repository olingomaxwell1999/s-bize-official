import React from 'react'
import Bannertwo from '../Components/Bannertwo/Bannertwo'
import back2 from '../assets/TAF-Homepage-Banner.jpg'
import Displayfive from '../Components/Displayfive/Displayfive'
import Displaysix from '../Components/Displaysix/Displaysix'
// import Displaytwo from '../Components/Displaytwo/Displaytwo'
import Displayseven from '../Components/Displayseven/Displayseven'

function ActionFoundation() {
  return (
      <div>
          <Bannertwo bg={back2} title="The Action Foundation"/>

      <Displayfive title="About The Action Foundation" desc="The Action Foundation (TAF) is a Kenyan community-driven organization that works to end exclusion, discrimination, and violence against disabled children, women, and girls in marginalized communities. The organization works to reach those furthest from necessary services and opportunities by working with their caregivers and the community around them. This enables these vulnerable groups to improve their lives, strengthen their resilience, and cultivate long-term change. TAF strives to create inclusive and resilient communities where children, women, and girls with disabilities can thrive. The organization envisions a fully inclusive Africa in which disabled children, women, and girls can reach their full potential. Over the years, TAF has adapted its interventions to beneficiary needs through community engagement, innovation, and co-creation of activities with target groups."/>

      <Displaysix id='ODSlkN8Ziok'/>

      <Displayseven title='suggested project & deliverable' desc="Paa is a social enterprise that is run separately from The Action Foundation. It focuses on providing branding services to businesses, SMEs, and other organizations.  The organization is working to stabilize the business in order to financially support programs run by The Action Foundation" link="https://theactionfoundationkenya.org/" />
    </div>
  )
}

export default ActionFoundation
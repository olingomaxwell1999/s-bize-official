import React from 'react'
import Gallery from '../Components/Gallery/Gallery'
import back4 from '../assets/explore.jpeg'
import kenya from '../assets/kenya.gif'
import food from '../assets/food.jpg'
import Bannertwo from '../Components/Bannertwo/Bannertwo'
import Displayone from '../Components/Displayone/Displayone'
import Displaythree from '../Components/Displaythree/Displaythree'
import Displaytwo from '../Components/Displaytwo/Displaytwo'
import Displayfour from '../Components/Displayfour/Displayfour'


function Explorekenya() {
  return (
    <div className='explorekenya'>
      <Bannertwo bg={back4} title="explore kenya" />

      <Displayone title="Welcome to kenya" desc="Kenya is among one of the most well-known countries in Africa. With hundreds of miles of coastline featuring stunning beaches, it’s no wonder tourism is on the rise. To fully appreciate this country, let’s check out these top 10 facts about Kenya!" link="https://www.thefactsite.com/kenya-facts/"/>

      <Displaytwo title='A Brief History Of Kenya' desc="Kenya, officially the Republic of Kenya (Swahili: Jamhuri ya Kenya), is a country in Eastern Africa. At 580,367 square kilometres (224,081 sq mi), Kenya is the world's 48th largest country by area. With a population of more than 47.6 million in the 2019 census, Kenya is the 29th most populous country in the world" link="http://www.kenyarep-jp.com/en/kenya/history/S" img={kenya}/>

      <Displaythree title="Language" desc="Kenyans speak very many languages including English, Swahili and tribal languages. Swahili is said to be the easiest African language for an English speaker to learn. It’s one of the few sub-Saharan African languages that have no lexical tone, just like in English. It’s also much easier to read as you read out Swahili words just the way they are written." link="https://www.milestoneloc.com/official-languages-of-kenya/"/>

      <Displaytwo title='Food' desc="When you think of Kenya, you probably imagine herds of elephants and prides of lions, burning sunsets, stunning golden beaches, or their talented Olympic runners… But what about the food in Kenya? This East African cuisine is made with delicious ingredients and plenty of love, and takes you on a mouthwatering journey deep into the country’s soul." link="https://www.willflyforfood.net/food-in-kenya/" img={food}/>

      <Displayfour title="Music" desc="Kenyan music is already killing it with musicians organizing more live concerts, promoting their music online, selling cool merchandise, and releasing quality albums on their own without record labels. It’s basically a DIY movement. " link="https://www.afrocharts.com/country?id=ken"/>

      <Gallery/>
    </div>
  )
}

export default Explorekenya
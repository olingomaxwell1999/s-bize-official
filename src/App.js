import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './app.scss'
import "bulma/css/bulma.min.css";


import Homepage from './pages/Homepage'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Meetthecohorts from './pages/Meetthecohorts'
import Explorekenya from './pages/Explorekenya'
import Copyright from './Components/Copyright/Copyright';
import Contactus from './pages/Contactus'
import Nairobits from './pages/Nairobits'
import Rubencenter from './pages/Rubencenter'
import Relinkedgroup from './pages/Relinkedgroup'
import Wanawake from './pages/Wanawake'
import Twenty from './pages/Twenty'
import Twentyone from './pages/Twentyone'
import Twentytwo from './pages/Twentytwo'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/cohorts' element={<Meetthecohorts/>}/>
        <Route path='/explorekenya' element={<Explorekenya/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/nairobits' element={<Nairobits/>}/>
        <Route path='/rubencenter' element={<Rubencenter/>}/>
        <Route path='/relinkedgroup' element={<Relinkedgroup/>}/>
        <Route path='/wanawake' element={<Wanawake/>}/>
        <Route path='/twenty' element={<Twenty/>}/>
        <Route path='/twentyone' element={<Twentyone/>}/>
        <Route path='/twentytwo' element={<Twentytwo/>}/>
      </Routes>
      <Footer/>
      <Copyright/>
    </BrowserRouter> 
    </div>   
  );
}

export default App;

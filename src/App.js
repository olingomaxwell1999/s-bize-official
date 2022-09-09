import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './app.scss'

import Homepage from './pages/Homepage'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Meetthecohorts from './pages/Meetthecohorts'
import Explorekenya from './pages/Explorekenya'
import Copyright from './Components/Copyright/Copyright';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/cohorts' element={<Meetthecohorts/>}/>
        <Route path='/explorekenya' element={<Explorekenya/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/nairobits' element={<Ex/>}/>
      </Routes>
      <Footer/>
      <Copyright/>
    </BrowserRouter>    
  );
}

export default App;

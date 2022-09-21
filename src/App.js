import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './app.scss'


import Homepage from './pages/Homepage'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Meetthecohorts from './pages/Meetthecohorts'
import Explorekenya from './pages/Explorekenya'
import Copyright from './Components/Copyright/Copyright';
import Nairobits from './pages/Nairobits'
import Rubencenter from './pages/Rubencenter'
import Relinkedgroup from './pages/Relinkedgroup'
import Wanawake from './pages/Wanawake'
import Twenty from './pages/Twenty'
import Twentyone from './pages/Twentyone'
import Twentytwo from './pages/Twentytwo'
import Green from './pages/Green';
import Sunflower from './pages/Sunflower';
import Mpi from './pages/Mpi'
import Sautiafrica from './pages/Sautiafrica'
import Africa from './pages/Africa'
import Utena from './pages/Utena'
import Codewithkids from './pages/Codewithkids'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/cohorts' element={<Meetthecohorts/>}/>
        <Route path='/explorekenya' element={<Explorekenya/>}/>
        <Route path='/nairobits' element={<Nairobits/>}/>
        <Route path='/rubencenter' element={<Rubencenter/>}/>
        <Route path='/relinkedgroup' element={<Relinkedgroup/>}/>
        <Route path='/greenkenya' element={<Green/>}/>
        <Route path='/sunflowerfoundation' element={<Sunflower />}/>
        <Route path='/mpi' element={<Mpi />}/>
        <Route path='/sautiafrica' element={<Sautiafrica />}/>
        <Route path='/africayouthtrust' element={<Africa/>}/>
        <Route path='/utenayouthorganisation' element={<Utena/>}/>
        <Route path='/codewithkids' element={<Codewithkids/>}/>
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

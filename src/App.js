
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Signup from './Pages/Signup';
import Packages from './Pages/Packages';
import Adminlogin from './Pages/Adminlogin';
import Singlepage from './Pages/Singlepage';
import Adminhome from './Pages/Adminhome';
import Add from './Pages/Add';
import Bookings from './Pages/Bookings';

function App() {
  useEffect(()=>{
    aos.init()
  },[])
  return (
    <div className="App">
      <Header/>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/blog' element={<Blog/>}></Route>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/services' element={<Packages/>}></Route>
       <Route path='/adminlogin' element={<Adminlogin/>}></Route>
       <Route path='/single/:id' element={<Singlepage/>}></Route>
       <Route path="/adminhome" element={<Adminhome/>}></Route>
       <Route path="/add" element={<Add/>}></Route>
       <Route path='/booking' element={<Bookings/>}></Route>
     
      </Routes>

    </div>
  );
}

export default App;

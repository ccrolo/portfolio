
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing/landing';
import Projects from './pages/projects/projects';
import About from './pages/about/about';
import Contact from './pages/contact/contact';

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Landing />}></Route> 
    <Route path='projects' element={<Projects />}></Route> 
     <Route path='about' element={<About />}></Route> 
     <Route path='contact' element={<Contact />}></Route>  

    </Routes>
  </BrowserRouter>


}

export default App;

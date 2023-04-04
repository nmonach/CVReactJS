import './App.css'
import AboutMe from './Components/AboutMe/AboutMe'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Knowledge from './Components/Knowledge/Knowledge';
import Experience from './Components/Experience/Experience';
import Formation from './Components/Formation/Formation';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
      <BrowserRouter>
          <NavBar />
          <br />
          <Routes>
            <Route path='/about-me.html' element={<AboutMe />}/>
            <Route path='/knowledge.html' element={<Knowledge />}/>
            <Route path='/experience.html' element={<Experience />}/>
            <Route path='/formation.html' element={<Formation />}/>
            <Route path='/contact.html' element={<Contact/>}/>
          </Routes>
          {/* <Footer/> */}
      </BrowserRouter> 
  )
}

export default App

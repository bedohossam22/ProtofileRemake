import Home from './Components/Home';
import Myprojects from './Components/Myprojects';
import About from "./Components/About";
import {  Routes , Route } from 'react-router-dom';
import Contact from './Components/Contact';
export default function App(){
 
    return (
      
        <Routes>
         
      <Route path='/ProtofileRemake' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Myprojects'  element={<Myprojects />} />
      <Route path='/Contact'  element={<Contact />} />
        
    </Routes>
    )
}
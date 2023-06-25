import { Link } from "react-router-dom";
import myimage from "../Me.jpg";
import Lefto from "./Lefto";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faCog} from '@fortawesome/free-solid-svg-icons';
export default function Myprojects(){
 
  function toggleMenu() {
    const menu = document.querySelector('.navo');
    const leftSide = document.querySelector('.left-side');
    menu.classList.toggle('menu--visible');
    leftSide.classList.toggle('shounen');
  }
  function handleClick() {
    document.documentElement.style.setProperty('--skin-color', '#1854b4');
  }
  function color1() {
    document.documentElement.style.setProperty('--skin-color', '#ec1839');
  }
  function color2() {
    document.documentElement.style.setProperty('--skin-color', '#37b182');
  }
  function color3() {
    document.documentElement.style.setProperty('--skin-color', '#f021b2');
  }
  function appear() {
    const el = document.querySelector('.mamaelcontainer');
    el.classList.toggle('appear');
  }
  
    return (
        <div className="sides">
         <div className='floxo'>
      <FontAwesomeIcon className='lol' icon={faBars} onClick={toggleMenu}  />
      <FontAwesomeIcon className='lilo' icon={faCog} spin onClick={appear}/>
      <div className='mamaelcontainer'>
      <div className="a" onClick={handleClick} ></div>
      <div className='b' onClick={color1}></div>
      <div className='c' onClick={color2}></div>
      <div className='d' onClick={color3}></div>
      </div>
      </div>
        <div className="left-side">
          <h1>Sick<span>o</span></h1>
          <div className="navo">
            <ul>
            <li><Link to="/ProtofileRemake">Home</Link></li>
              <li><Link to="/About">About me</Link></li>
              <li><Link to="/Myprojects">My Projects</Link></li>
              <li><Link to="/Contact">Contacts</Link></li>
            </ul>
          </div>
        </div>
     

            <div className="Center-side extra">
        
        <h1>My Projects</h1>
          <div className="intro-flex">
              <p>- Please Be aware most of these Projects are done for Educational purposes not to show off.</p>
             
              <img id="nemisis" src={myimage} alt='ok'></img>
              
          </div>
          <Lefto/>
          
          </div>
          
        </div>
    
       
  
    )
}

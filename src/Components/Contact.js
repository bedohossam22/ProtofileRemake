import { Link } from 'react-router-dom';
import { faEnvelope, faGlobeEurope , faPhone , faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import { faBars } from '@fortawesome/free-solid-svg-icons';
export default function Contact(){
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
             
              <div className="Center-side">
              <h1>Contact Me</h1> 
              <h2>Have Any Questions ?</h2>
              <h3>Feel free to Email me!</h3>
              <div className='iconzo'>
                <div className='trial'>
              <FontAwesomeIcon icon={faEnvelope} />
              <h4>Email</h4>
              <span>info@gmail.com</span>
              </div>
              <div className='trial'>
<FontAwesomeIcon icon={faGlobeEurope} />
<h4>Website</h4>
<span>www.Sicko.com</span>
</div>
<div className='trial'>
<FontAwesomeIcon icon={faPhone} />
<h4>Reach Me On</h4>
<span>+20 9999999999</span>
</div>
<div className='trial'>
<FontAwesomeIcon icon={faMapMarkerAlt} />
<h4>Office</h4>
<span>sicko</span>
</div>

</div>
<h2>Send me an Email!</h2>
          <div className='form'>
          <input className='formo' placeholder='Name'></input>
          <input className='formo adjust' placeholder='Email'></input>
          
          </div>
          <input className='formo' placeholder='Subject'></input>
          <input className='formo' placeholder='Email'></input>
          <button className='btn'>Send Message</button>
    </div>
    </div>
        )}
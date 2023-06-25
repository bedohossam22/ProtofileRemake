import myimage from "../Me.jpg";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
export default function About(){
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
      <h1>About Me</h1>
        <div className="intro-flex">
            <div>
          <h2>I'm Abdelrahman and Im a Web developer</h2>
         <p id="ok">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, hic ipsam<br/> Asperiores sapiente ea debitis dolor repellat quasi omnis et ab nemo minima<br/> aliquid culpa animi error voluptatum blanditiis accusantium?</p>
            
         </div>

     
            <img src={myimage} alt='ok'></img>
            
        </div>
        <div className="flexbox">
          
        <div class="personal-info">      
            <div class="info-item">
                <p>Birthday : <span>8/9/1997</span></p>
            </div>
            <div class="info-item">
                <p>Age : <span>25</span></p>
            </div>
            <div class="info-item">
                <p>Website : <span>www.random.com</span></p>
            </div>
            <div class="info-item">
                <p>Email : <span>info@gmail.com</span></p>
            </div>
            <div class="info-item">
                <p>Degree : <span>Lorem</span></p>
            </div>
            <div class="info-item">
                <p>Phone: <span>9999999999</span></p>
            </div>
            <div class="info-item" >
                <p>City: <span>Tanta,Egypt</span></p>
            </div>
            <div class="info-item">
                <p>Freelance : <span>NotYet</span></p>
            </div>
                           
         </div> 
         </div>
        </div>
      </div>
    )
}
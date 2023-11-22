import React, { useState } from 'react';
import "./CSS/Small_nav.css";
import photo1 from './images/img1.jpg';
import photo2 from './images/img2.jpg';
import photo3 from './images/img4.jpg';
import {IconButton} from "rsuite";
import ArrowRightIcon from '@rsuite/icons/ArrowRight';
import ArrowLeftIcon from '@rsuite/icons/ArrowLeft';
import CloseIcon from '@rsuite/icons/Close';



const Small_nav = (props) => {
   const [current, setCurrent] = useState(0);
   const image = [photo1, photo2, photo3];
   const handlePrev = () => {
      setCurrent(current === 0 ? image.length - 1 : current - 1)
   }
   const handleNext = () => {
      setCurrent(current === image.length - 1 ? 0 : current + 1)
   }
   const[isPopup, setPopup] = useState(false);

   const togglePopup = () => {
      setPopup(!isPopup);
   };
   const[isPopupsignup, setPopupsignup] = useState(false);
   
   const togglePopupsignup = () => {
      setPopupsignup(!isPopupsignup);
   };
   return (
      <div className="body1">
         <div className="container">
            <ul className="navlist">
               <li><a href="#HOME"> {props.link1} </a></li>
               <li><a href="#About">{props.link2}</a></li>
               <li><a href="#contact">{props.link3}</a></li>
               <li><a href="#videos">{props.link4}</a></li>
            </ul>
            <div className="login">
               <button type='submit' id='btn101' onClick={togglePopup}>login</button>
               <button type='submit' id='btn102' onClick={togglePopupsignup} >SignUp</button>
            </div>
         </div>
         <div className="carousel">
            <div className="carousel-item">
               <img src={image[current]} alt="car" className='photos' id='img' />
            </div>

            {/* <button onClick={handlePrev} id='prev'>Prev</button> */}
            {/* <button onClick={handleNext} id='next'>Next</button> */}
            <IconButton icon={<ArrowRightIcon/>} onClick={handleNext} id='next'/>
            <IconButton icon={<ArrowLeftIcon/>} onClick={handlePrev} id='prev'/>
          </div>
          <div className="loginform">
              {isPopup &&(
                 <div className="popup">
                  {/* <button type='button' id='btn103' onClick={togglePopup}>close</button> */}
                  <IconButton icon={<CloseIcon/>} onClick={togglePopup} id='btn103'/>
                     <div className="formbox">
                        <form action="" className="formlogin">
                           <h2>login now</h2>
                           <input type="text" placeholder='Enter username' id='uname' required/><br/>
                           <input type="password" placeholder='Enter password' id='pass' required/><br/>
                           <button type='button'>login</button>

                           <div className='forget'>
                             <p>Forget Password ? <a href='#'>Click here !</a> </p>
                             <p>Dont have an account ? <a href='#'>Sign up !</a> </p>
                           </div>
                        </form>
                     </div>
                 </div>
               )}
          </div>
          <div className="signupform">
            {isPopupsignup &&(
               <div className="popup">
                  {/* <IconButton icon={<CloseIcon/>} onClick={togglePopup} id='btn103'/> */}
                  <form action='' className="formsignup">
                      <h2>SignUp now</h2>
                      <input type="number" placeholder='Enter your phone' required />
                      <input type="email" placeholder='Enter your email' required />
                      <input type="text" placeholder='Enter your Name' required />
                      <input type="password" placeholder='Create Password' required />
                      <input type="password" placeholder='Confirm password' required /> 
                      <button type='button'>SignUp</button>
                  </form>
               </div>
            )}
          </div>

      </div>
   )
}


Small_nav.defaultProps = {
    link1: 'Set link',
    link2: 'Set link',
    link3: 'Set link',
    link4: 'set link'
}

export default Small_nav;
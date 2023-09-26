import React from 'react';
import "./CSS/Navbar.css";
import logo from './image_box/logo.jpg';
import first from './image_box/IMG_8567.PNG';
import pic from './image_box/IMG_8570.PNG';
import { IconButton } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
 

const Navbar = () => {
    return (
       <>
         <div className="container_first">
            <nav className="navbar">
                <div className="navleft">
                    <div className="img">
                       <img src={logo} className='profile' alt='profile'/>
                    </div>
                    <div className="img2">
                        <img src={pic} className='profile3' alt='profile3' />
                    </div>
                    <div className="img1">
                       <img src={first} className='profile2' alt='profile2'/>
                    </div>
                    <div className="img2">
                        <img src={pic} className='profile3' alt='profile3' />
                    </div>
                </div>
                <div className="navright">
                    <input type="search" placeholder='Search here'/>
                    {/* <button type='search'>search</button> */}
                    <IconButton icon={<SearchIcon/>} id='searchicon'/>
                </div>
            </nav>
         </div>
       </>
    )
}

export default Navbar
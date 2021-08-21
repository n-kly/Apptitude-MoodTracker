import React, {useState} from 'react'
import {BiArrowFromLeft,BiArrowFromRight} from 'react-icons/bi';
import {GrEmoji} from 'react-icons/gr'
import {GiSadCrab} from 'react-icons/gi'
import { Link } from 'react-router-dom';
import './styleSelector.css'

const StyleSelector = ({setActiveStyle}) => {
    const [sidebar, setSidebar] = useState(false); // Toggle sidebar visibility
    const toggleSidebar = () => setSidebar(!sidebar); // Seperate function as bugfix

    return (
        <> {/*Try center the open and close buttons*/}
            <div className='navbar'> {/*Fix the open button with css*/}
                <Link to='#' className='menu-bars'>
                    <BiArrowFromLeft onClick={toggleSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={toggleSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <BiArrowFromRight />
                        </Link>
                    </li>
                    <li className='nav-text'>
                        <Link to='' onClick={() => {setActiveStyle('emoji'); console.log('emoji')}}> {/*Changing the state as it is rn wont change the page*/}
                            <GrEmoji />
                            <span> Style 1 </span>
                        </Link>
                    </li>
                    <li className='nav-text'>
                        <Link to='' onClick={() => {setActiveStyle('turtle'); console.log('turtle')}}> {/*Changing the state as it is rn wont change the page*/}
                            <GiSadCrab />
                            <span> Style 2 </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default StyleSelector



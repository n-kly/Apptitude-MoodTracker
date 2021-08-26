import React, { useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiArrowFromLeft, BiArrowFromRight, BiCalendar } from 'react-icons/bi';
import { MdTrackChanges } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './styleSelector.css';

const StyleSelector = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => setSidebar(!sidebar); 

    return (
        <>
            <div className='navbar'>
                <Link to='#' className='menu-bars-open'>
                    <BiArrowFromLeft className={'toggle-icon'} onClick={toggleSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={toggleSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars-close'>
                            <BiArrowFromRight className={'toggle-icon'}/>
                        </Link>
                    </li>

                    <li className='nav-text'>
                        <Link to='/tracker'>
                            <MdTrackChanges className="icon-text"/>
                            <span className="actual-text"> Tracker </span>
                        </Link>
                    </li>

                    <li className='nav-text'>
                        <Link to='/my-calendar'>
                            <BiCalendar className="icon-text"/>
                            <span className="actual-text"> My Calendar </span>
                        </Link>
                    </li>

                    <li className='nav-text bottom'>
                        <a href='http://mari-lau.wixsite.com/my-site'>
                            <AiOutlineInfoCircle className="icon-text"/>
                            <span className="actual-text"> About us </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default StyleSelector;

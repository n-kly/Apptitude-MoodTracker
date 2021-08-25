import React, { useState } from 'react';
import { BiArrowFromLeft, BiArrowFromRight, BiCalendar } from 'react-icons/bi';
import { GrEmoji } from 'react-icons/gr';
import { GiSadCrab } from 'react-icons/gi';
import { MdTrackChanges } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './styleSelector.css';

const StyleSelector = ({ setActiveStyle }) => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => setSidebar(!sidebar); 

    return (
        <>
            <div className='navbar'>
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
                        <Link to='/tracker'>
                            <MdTrackChanges />
                            <span> Tracker </span>
                        </Link>
                    </li>

                    <li className='nav-text'>
                        <Link
                            to='#'
                            onClick={() => {
                                setActiveStyle('emoji');
                                console.log('emoji');
                            }}>
                            <GrEmoji />
                            <span> Style 1 </span>
                        </Link>
                    </li>

                    <li className='nav-text'>
                        <Link
                            to='#'
                            onClick={() => {
                                setActiveStyle('turtle');
                                console.log('turtle');
                            }}>
                            <GiSadCrab />
                            <span> Style 2 </span>
                        </Link>
                    </li>

                    <li className='nav-text bottom'>
                        <Link to='/my-calendar'>
                            <BiCalendar />
                            <span> My Calendar </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default StyleSelector;

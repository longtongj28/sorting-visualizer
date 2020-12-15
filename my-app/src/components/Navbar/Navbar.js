import React, {useState} from 'react'
import Backdrop from '../backdrop/Backdrop';
import {Link} from 'react-router-dom';
import {AiOutlineClose,AiOutlineInfoCircle} from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import {IconContext} from 'react-icons';
import './Navbar.css';

function Navbar() {
    const [sidebar, setSideBar] = useState(false);
    

    const showSidebar = () => {
        setSideBar(!sidebar);
    }

    let backdrop;
    if (sidebar) {
        backdrop = <Backdrop onclick={showSidebar}/>;
    }
    
    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            {backdrop}
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <AiOutlineInfoCircle title="Learn more about the site and the algorithms" color="white"className='settings-icon' onClick={showSidebar}/>
                </Link>
            </div> 
            <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
                <ul className='nav-manu-items'>
                    <li className ="navbar-toggle">
                        <Link to="#">
                            <AiOutlineClose className='close' onClick={showSidebar}/>
                        </Link>
                    </li>
                    <div className="menu-items">
                        {SidebarData.map( (item, index) => {
                            return (
                                <li kay={index} className={item.cName}>
                                    {item.path}
                                </li>
                            )
                        })}
                    </div>
                </ul>
            </nav> 
            </IconContext.Provider>
        </>
    )
}

export default Navbar

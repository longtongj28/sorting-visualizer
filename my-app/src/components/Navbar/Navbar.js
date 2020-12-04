import React, {useState} from 'react'
import Backdrop from '../components/backdrop/Backdrop';
import { AiTwotoneSetting } from "react-icons/ai";
import {Link} from 'react-router-dom';
import {AiOutlineClose} from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import {IconContext} from 'react-icons';
import './Navbar.css';

function Navbar(props) {
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
                    <AiTwotoneSetting className='settings-icon' onClick={showSidebar}/>
                </Link>
            </div> 
            <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
                <ul className='nav-manu-items'>
                    <li className ="navbar-toggle">
                        <Link to="#">
                            <AiOutlineClose className='close' onClick={showSidebar}/>
                        </Link>
                    </li>
                    {SidebarData.map( (item, index) => {
                        return (
                            <li onClick={showSidebar} kay={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav> 
            </IconContext.Provider>
        </>
    )
}

export default Navbar

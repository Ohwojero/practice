import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import React from 'react'
import './Navbar.css'
import logo from '../images/logo-removebg-preview.png'
import { IoIosClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import {links} from '../../src/data'
const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false)

  return (
   <nav>
    <div className='container'>
            <div className='nav-container'>
                <Link to="/" className='logo'><img src={logo} alt="" onClick={ () =>setIsNavShowing(false)} /></Link>


                <ul className={`nav-links ${isNavShowing ?'show-nav' : 'hide-nav' }`}>
                    {
                        links.map(({name, path}, index) =>{
                            return(
                                <li>
                                    <NavLink to={path} onClick={()=>setIsNavShowing(prev => !prev)}>{name}

                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>

                <button className='btn-toggle' onClick={()=>setIsNavShowing(prev => !prev)}>
                {
                    isNavShowing ? <IoIosClose /> : <CiMenuBurger />
                }
                </button>
            </div>
    </div>
   </nav>
  )
}

export default Navbar
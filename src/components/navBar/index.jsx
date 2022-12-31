import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navMenus } from './config';
import { FaReact, FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import './style.scss';

const Navbar = () => {
    // toggle click state
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    }

    return (
        <div>

            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo">
                        <FaReact size={30} />
                    </Link>

                    <ul className={click ? "navbar__container__menu active" : "navbar__container__menu"}>
                        {
                            navMenus.map((item, key) => {
                                return (
                                    <li key={key} className="navbar__container__menu__item">
                                        <Link to={item.to} className="navbar__container__menu__item__links">
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })
                        }
                        {/* <li className='navbar__container__menu__item'>
                            <Link to="/" className='navbar__container__menu__item__links'>
                                HOME
                            </Link>
                        </li>
                        <li className='navbar__container__menu__item'>
                            <Link to="/about" className='navbar__container__menu__item__links'>
                                ABOUT ME
                            </Link>
                        </li>
                        <li className='navbar__container__menu__item'>
                            <Link to="/skills" className='navbar__container__menu__item__links'>
                                SKILLS
                            </Link>
                        </li>
                        <li className='navbar__container__menu__item'>
                            <Link to="/resume" className='navbar__container__menu__item__links'>
                                RESUME
                            </Link>
                        </li>
                        <li className='navbar__container__menu__item'>
                            <Link to="/portfolio" className='navbar__container__menu__item__links'>
                                PORTFOLIO
                            </Link>
                        </li>
                        <li className='navbar__container__menu__item'>
                            <Link to="/contact" className='navbar__container__menu__item__links'>
                                CONTACT
                            </Link>
                        </li> */}
                    </ul>
                    <div className='nav-icon' onClick={handleClick} style={{ cursor: "pointer" }}>
                        {
                            click ? <HiX size={22} /> : <FaBars size={22} />
                        }
                    </div>

                </div>
            </nav>

        </div>
    );
};

export default Navbar
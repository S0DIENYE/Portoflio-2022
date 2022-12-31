import React, { useEffect, useState } from 'react';
import './style.scss'
import { ImCog } from 'react-icons/im'
import setTheme from '../../helpers/theme';

const themeArray = [
    {
        id: "yellow",
        bgColor: "#ffdd40"
    },
    {
        id: "red",
        bgColor: "#E82A2A"
    },
    {
        id: "green",
        bgColor: "#90ee90"
    },
    {
        id: "blue",
        bgColor: "#50bce7"
    },
    {
        id: "beige",
        bgColor: "#f5f5dc"
    },

];

const Theme = () => {
    const [theme, setCurrentTheme] = useState('yellow');

    const [toggle, setToggle] = useState(false);

    const handleToggleTheme = (curThemeId) => {
        setCurrentTheme(curThemeId);
        setToggle(false);
    }

    useEffect(() => {
        setTheme(theme)
    // Onchange of [theme] value useEffect method would be fired.
    }, [theme])

    return (
        <div className={ `theme-wrapper ${toggle ? 'active' : ''}`}>
            <div className="theme-wrapper__toggle-icon">
                <ImCog onClick={() => setToggle(!toggle)} size={30} />
            </div>
            <div className='theme-wrapper__menu'>
                <h1 style={{ color: '#fff' }}>Select a Theme</h1>
                {
                    <ul>
                        {
                            themeArray.map((themeColor, key) => {
                                return <li key={key} style={{ background: themeColor.bgColor }} onClick={ () => handleToggleTheme(themeColor.id) } />
                            })
                        }
                    </ul>
                }
            </div>
        </div>
    )
}

export default Theme;
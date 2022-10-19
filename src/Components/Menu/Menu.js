import './Menu.sass'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { TiHome } from 'react-icons/ti'
import { FaUserCircle } from 'react-icons/fa'
import { RiMessage3Fill } from 'react-icons/ri'
import { MdWork } from 'react-icons/md'
import { FaGithubAlt } from 'react-icons/fa'

function Menu() {
    const [path, setPath] = useState('home')

    function MenuClickEffct() {
        const path = window.location.pathname
        switch (path) {
            case '/':
                console.log('home---')
                setPath('home')
                break;
            case '/about':
                console.log('about----')
                setPath('about')
                break;
            case '/portfolio':
                console.log('portfolio--------')
                setPath('portfolio')
                break
            case '/contact':
                console.log('contact-------')
                setPath('contact')
                break
            default:
                console.log('home -xx-xx-xx-')
                setPath('home')
                break;
        }
    }


    return (
        <>
            <menu>
                <ul>
                    <li onClick={() => { MenuClickEffct() }}>
                        <Link to="/" className={path==='home'?'active':''}><TiHome className='icon' /></Link>
                    </li>
                    <li onClick={() => { MenuClickEffct() }}>
                        <Link to="/about" className={path==='about'?'active':''}><FaUserCircle className='icon'/></Link>
                    </li>
                    <li onClick={() => { MenuClickEffct() }}>
                        <Link to="/portfolio" className={path==='portfolio'?'active':''}><MdWork className='icon' /></Link>
                    </li>
                    <li onClick={() => { MenuClickEffct() }} >
                        <Link to="/contact" className={path==='contact'?'active':''}><RiMessage3Fill className='icon' /></Link>
                    </li>
                    <li onClick={() => { MenuClickEffct() }}>
                        <a href="https://github.com/0me9a" target="_blank" rel='noreferrer'><FaGithubAlt className='icon' /></a>
                    </li>
                </ul>
            </menu>
            {/* <Outlet /> */}
        </>
    )
}

export default Menu
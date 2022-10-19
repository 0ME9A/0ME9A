import React from 'react'
import './Footer.sass'
import { BsLinkedin } from 'react-icons/bs'
import { FaFigma, FaGithubAlt } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {SiFrontendmentor} from 'react-icons/si'

function Footer() {
    return (
        <footer className="container" id="footer">
            <header>
                <h1>OMEGA</h1>
                <h5><q>“I like to code things from scratch, and enjoy bringing ideas to life in the browser.”</q></h5>
            </header>
            <article>
                <div className="menu-links">
                    <Link to="/" className="link">
                        omega
                    </Link>
                    <Link to="/about" className="link">
                        about
                    </Link>
                    <Link to="/portfolio" className="link">
                        portfolio
                    </Link>
                    <Link to="/contact" className="link">
                        contact
                    </Link>
                </div>
            </article>
            <footer className="social">
                <a href="https://www.linkedin.com/in/baliram-kumar-0a9a0a214/"><BsLinkedin className="icon" /></a>
                <a href="https://www.figma.com/@omega1"><FaFigma className="icon" /></a>
                <a href="https://github.com/0ME9A"><FaGithubAlt className="icon" /></a>
                <a href="https://www.frontendmentor.io/profile/0ME9A" target="_blank" rel="noreferrer"><SiFrontendmentor className="icon" /></a>
            </footer>
        </footer>
    )
}


export default Footer
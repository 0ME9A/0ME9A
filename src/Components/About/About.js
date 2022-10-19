import React from 'react'
import './About.sass'
import backgroundImg from '../../assets/favicon.png'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'


function About(probs) {
    return (
        <>
            <div className="container" id='about'>
                <Header title="me, myself and i" stitle="about"/>
                <article>
                    <figure>
                        <img src={backgroundImg} alt="background" />
                    </figure>
                    <code>I'm a front-end developer living in Bihar Sharif, India. I'm focused and enjoy creating websites, designing websites, and learning new technologies. I create responsive, clean, and attractive websites. I'm a well-organized person, a problem solver, and have high attention to detail. I'm currently learning Node-Js and am always ready to learn new ones...</code>
                    <span className='link' style={{ display: probs.hideShow }}><Link to="/about" target="_top">Know more</Link></span>
                </article>
            </div>
        </>
    )
}

export default About
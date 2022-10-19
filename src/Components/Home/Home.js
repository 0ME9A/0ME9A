import React from 'react'
import './Home.sass'
import Profile from '../../assets/favicon.png'
import { Link } from 'react-router-dom'
import Bali from '../../assets/bali.pdf'

function Home() {
    return (
        <div className="container" id='home'>
            <section>
            
                <figure>

                    <div className='shadow'></div>
                    <div className='shadow'></div>
                    <div className='shadow'></div>
                    <div className='shadow'></div>

                    <img src={Profile} alt="" />
                    <div className="filter"></div>
                </figure>
                <div className="profile-text">
                    <h3>Hi I'm</h3>
                    <div className="ani">
                        <h1>"Baliram"</h1>
                    </div>
                    <h3>I design and code beautifully simple things, and I love what I do.</h3>
                    <div className="btn-container">
                        <a href={Bali}
                            download={Bali}
                            className='active-btn'
                        >resume</a><Link to="/contact" target="_top">hire me</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
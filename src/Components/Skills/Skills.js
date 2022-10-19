import React, { useRef } from 'react'
import './Skills.sass'
import Header from '../Header/Header'
import GridTemplate from '../../Templates/GridTemplate/Gridtemplate'
import Img from '../../assets/omega profile.jpg'
import html5 from '../../assets/Gif/html5.gif'
import css from '../../assets/Gif/css.gif'
import javascript from '../../assets/Gif/javascript.gif'
import bootstrap from '../../assets/Gif/bootstrap.gif'
import react from '../../assets/Gif/react.gif'
import sass from '../../assets/Gif/sass.gif'
import php from '../../assets/Gif/php.gif'
import python from '../../assets/Gif/python.gif'
import jquery from '../../assets/Gif/jquery.gif'
import figma from '../../assets/Gif/figma.gif'
import photoshop from '../../assets/Gif/photoshop.gif'

function Skills() {
    const skillsArray = [html5, css, javascript, bootstrap, react, sass, php, python, jquery, figma, photoshop];
    const idRef = useRef(1);


    return (
        <div className="container" id='skills'>
            <Header title={"The tech i work with"} stitle={"skills"}/>
            <article className='skills-container'>
                <GridTemplate>
                    {
                        skillsArray.map((data)=>{
                            idRef.current++
                            return(
                                <div className={"skill-grid-item item item"+idRef.current} key={idRef.current}>
                                    <img src={data} alt="title" />
                                </div>
                            )
                        })
                    }
                </GridTemplate>

            </article>
        </div>
    )
}

export default Skills
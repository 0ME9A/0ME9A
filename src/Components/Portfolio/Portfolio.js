import React, { useEffect, useRef, useState } from 'react'
import './Portfolio.sass'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
import GridTemplate from '../../Templates/GridTemplate/Gridtemplate'

function Portfolio(probs) {
    const [gitHubRepo, setGithubRepo] = useState(null)
    const idRef = useRef(0)


    const getRepoFromApi = async () => {
        const urls = "https://api.github.com/users/0me9a/repos?per_page=100";
        const response = await fetch(urls);
        response.status === 200?setGithubRepo(await response.json()):setGithubRepo(null)
    }

    useEffect(() => {
        getRepoFromApi()
    }, [])

    if (gitHubRepo) {
        return (
            <div className="container" id='portfolio'>
                <Header title={'The library of Dev'} stitle={"portfolio"} />
                <article style={{ width: probs.W }}>
                    <GridTemplate>
                        {
                            gitHubRepo.map((printRepo) => {
                                if (probs.cardsParent === 'home' && printRepo.topics.includes('code-red')) {
                                    idRef.current++
                                    return (
                                        <figure className={"portfolio-grid-item item item" + idRef.current} id={'item' + idRef.current} key={printRepo.id}>
                                            <img src={'https://raw.githubusercontent.com/0ME9A/screenshots/main/' + printRepo.name + '.png'} alt="title" />
                                            <figcaption>
                                                <span className="portfolio-title">{printRepo.name}</span>
                                                <div className="btn-container">
                                                    <Link to={`/portfolio/${printRepo.name}`} target="_top" className="btn-link" id={printRepo.name}>view-project</Link>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    )
                                }

                                if (probs.cardsParent === "notHome" && printRepo.topics.includes('code')) {
                                    idRef.current++
                                    return (
                                        <figure className={"portfolio-grid-item item item" + idRef.current} id={'item' + idRef.current} key={printRepo.id}>
                                            <img src={'https://raw.githubusercontent.com/0ME9A/screenshots/main/' + printRepo.name + '.png'} alt="title" />
                                            <figcaption>
                                                <span className="portfolio-title">{printRepo.name}</span>
                                                <div className="btn-container">
                                                    <Link to={`${printRepo.name}`} target="_top" className="btn-link" id={printRepo.name}>view-project</Link>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    )
                                }
                                return null
                            })
                        }
                    </GridTemplate>
                </article>
                <span className='link' style={{ display: probs.morebtn }}><Link to="/portfolio" target="_top">read more books</Link></span>
            </div>
        )
    }
    else {
        return (<Loading/>)
    }
}

export default Portfolio
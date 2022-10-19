import { useEffect, useState } from 'react'
import './ActiveRepo.sass'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'


function ActiveRepo() {
    let { id } = useParams()
    const [repo, setRepo] = useState('')
    const [status200, setStatus200] = useState('')


    const getRepo = async () => {
        const urls = `https://api.github.com/repos/0ME9A/${id}/contents/read.md?ref=master`
        const response = await fetch(urls);
        let atob = require('atob')
        const finalResponse = await response.json()
        if (response.status === 200) {
            setRepo(atob(finalResponse['content']))
            setStatus200(200)
        }
        else {
            setStatus200(404)
        }
    }
    
    useEffect(() => {
        getRepo()
    })
    if (status200 === 200) {
        setTimeout(() => {
            document.getElementById('activerepo-container').innerHTML = repo
        }, 2000);
    }

    if (status200 === 200) {
        return (
            <div className='container' id='activerepo'>
                <article id='activerepo-container'>
                    <a href='https://github.com/0me9a' target={'_blank'} rel='noreferrer'>Github</a>
                </article>
            </div>
        )
    }
    else{
        return <Loading/>
    }



}

export default ActiveRepo
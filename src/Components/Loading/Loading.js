import React, { useEffect, useState } from 'react'
import Error from '../Error/Error';
import './Loading.sass'

function Loading(){
    const [error, setError] = useState(<h1 id='loading-text'>Loading...</h1>);

    useEffect(() =>{
        setTimeout(() => {
            setError(Error);
        }, 10000);
    }, [])

    return(
        <div className='container' id='loading'>
            <header>
                <div className='heart'>
                    <span></span>
                    <span></span>
                </div>
                {error}
            </header>
        </div>
    )
}


export default Loading
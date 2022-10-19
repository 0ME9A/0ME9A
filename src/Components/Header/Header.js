import React from 'react'
import './Header.sass'

function Header(probs){
    return(
        <header>
            <h2>{probs.title}</h2>
            <h4>{probs.stitle}</h4>
        </header>
    )
}

export default Header
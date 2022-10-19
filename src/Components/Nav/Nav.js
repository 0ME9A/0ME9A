import './Nav.sass'
import { VscGithub } from 'react-icons/vsc'
import { HiMenuAlt2 } from 'react-icons/hi'
import React, { useState, useEffect } from 'react'
import { ToggleMenuContext } from '../../App'



function Nav() {
    const [tstate, setTstate] = useState(0)

    return (
        <>
            <ToggleMenuContext.Provider value={tstate}>
                <nav>
                    {/* <HiMenuAlt2 className="icon" /> */}
                    <h3>Omega</h3>
                    <a href="https://www.github.com/0me9a" target="_blank" rel="noreferrer"><VscGithub className="icon" /></a>
                </nav>
            </ToggleMenuContext.Provider>
        </>
    )
}

export default Nav


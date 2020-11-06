import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <h2><Link to='/'>CodeSnippet</Link></h2>
            <div className="header__nav">
                <Link to='/react'>React</Link>
                <Link to='/python'>Python</Link>
            </div>
        </div>
    )
}

export default Header

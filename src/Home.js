import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className="home">
            <Link className='home__item' to='/react'>React</Link>
            <Link className='home__item' to='/python'>Python</Link>
        </div>
    )
}

export default Home

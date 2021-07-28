import React from 'react'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'

export function AppHeader() {
    const history = useHistory()
    // const params = useParams()
    // const location = useLocation()
    return (
        <header className="app-header">
            <nav className="main-nav container">
                <Link to='/'> <img src="imgs/logo.png" alt="" /></Link>
                <h1 className="main-title">My Car Shop</h1>
                <button onClick={() => history.goBack()}>Back</button>
            </nav>
        </header>
    )
}

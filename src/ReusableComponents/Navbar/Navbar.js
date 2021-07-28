import React from "react"
import { Link } from "react-router-dom"

import "./Navbar.scss"

let Navbar = (props) => {
    return (
        <nav className="navbar">
            <Link className="nav_link" style={{"marginRight": "5px"}} to="/">
                <p>Home</p>
            </Link>
            <Link className="nav_link" style={{"marginRight": "5px"}} to="/about">
                <p>About</p>
            </Link>
            <Link className="nav_link" style={{"marginRight": "5px"}} to="/legal">
                <p>Legal</p>
            </Link>
            <Link className="nav_link" style={{"marginRight": "5px"}} to="/params">
                <p>Params</p>
            </Link>
            <Link className="nav_link" style={{"width": "175px"}} to="/params?paramone=paramonevariable&paramtwo=paramtwovariable">
                <p style={{"width": "175px"}}>Params With Params</p>
            </Link>
        </nav>
    )
}

export default Navbar
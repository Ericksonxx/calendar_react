import React from 'react'
import './Nav.css';

function Nav() {
    return (
        <div className="nav__body">
            <ul>
                <img className="logo" src="https://res-4.cloudinary.com/ldhg5acsz/image/upload/f_auto/v1/Web/photos/logos/butternut-logo-top.png" alt="" />
                <li>
                    <a href="">How it works</a>
                </li>
                <li>
                    <a href="">Our products</a>
                </li>
                <li>
                    <a href="">Making our meals</a>
                </li>
                <li>
                    <a href="">Help</a>
                </li>
            </ul>
            <ul className="ul__right">
                <li>
                    <a href="">Log in</a>
                </li>
                <li>
                    <a href=""><button>BUILD YOUR BOX</button></a>
                </li>
            </ul>
        </div>
    )
}

export default Nav

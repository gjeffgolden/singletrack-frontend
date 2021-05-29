import React from 'react'
import Logo from '../assets/Singletrack.png'

export default function Header() {
    return (
        <header className="header-container">
            <div className="header">
                <img src={Logo} alt="Singletrack Logo" />
            </div>
        </header>
    )
}

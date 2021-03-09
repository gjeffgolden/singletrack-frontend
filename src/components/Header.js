import React from 'react'
import Logo from '../assets/Singletrack.png'

export default function Header() {
    return (
        <div className="header-container">
            <div className="header">
                <img src={Logo} />
            </div>
        </div>
    )
}

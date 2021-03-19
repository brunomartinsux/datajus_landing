import React from 'react'
import IconUsers from '../../Icons/users'
import './footer.css'

function Footer() {

    return (
        <div className="footer-section">
            <div className="footer-menu">
                <p>Serviços</p>
                <p>Sobre nós</p>
                <p>Preços</p>
                <p>FAQ</p>
            </div>
            <div className="media-footer">
                <IconUsers />
                <IconUsers />
                <IconUsers />
            </div>
        </div>
    )       
}

export default Footer
import React from 'react'
import Logo from '../../../images/logo.png'
import './styles.css'

const Header = () => (
    <div className="image-box">
        <img src={Logo} className="image" alt='Pensamento Computacional' />
    </div>
)

export default Header
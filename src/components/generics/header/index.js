import React, { Fragment } from 'react'
import Logo from '../../../images/logo.png'
import './styles.css'

const Header = () => (
    <Fragment>
        <div className="course-bar">

        </div>
        <div className="unit-bar">

        </div>
        <div className="image-box">
            <img src={Logo} className="image" alt='Pensamento Computacional' />
        </div>
    </Fragment>
)

export default Header
import React, { Fragment } from 'react'
import Logo from '../../../images/logo.svg'
import GreekBackground from '../../../images/component/greek-background.svg'
import './styles.css'

const Header = () => (
    <Fragment>
        <div className="image-header-container">
            <div className="image-header-sub-container" style={{ backgroundImage: "url(" + GreekBackground + ")", backgroundRepeat: "repeat", backgroundSize: "150%" }}>
                <img src={Logo} className="image-header" alt='Pensamento Computacional' />
            </div>    
        </div>
    </Fragment>
)

export default Header
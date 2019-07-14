import React from 'react'
import FontMedium from '../../font/medium'
import Regular from '../../font/regular'
import Image from '../../image'
import Logo from '../../../../images/component/logo.svg'
import './styles.css'

class TextStandardBox extends React.Component {
    constructor(props) {
        super(props)

        this.style = {
            marginBottom: props.marginBottom ? props.marginBottom : "0",
            marginTop: props.marginTop ? props.marginTop : "0"
        }
    }
    render() {
        return (
            <div className="text-standard-box-container" style={this.style}> 
                <div className="text-standard-box" style={this.borderStyle}>
                    <Image marginTop="10px" width="35px" src={Logo}/>
                    <div className="text-standard-box-text-container">
                        <Regular><FontMedium>{this.props.children}</FontMedium></Regular>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextStandardBox
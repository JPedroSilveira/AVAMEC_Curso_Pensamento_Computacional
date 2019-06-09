import React from 'react'
import './styles.css'

class FontLightBlue extends React.Component {
    render() {
        return (
            <span className="font-light-blue">
                {this.props.children}
            </span>
        )
    }
}

export default FontLightBlue
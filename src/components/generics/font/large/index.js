import React from 'react'
import './styles.css'

class FontLarge extends React.Component {
    render() {
        return (
            <span className="large-font">
                {this.props.children}
            </span>
        )
    }
}

export default FontLarge
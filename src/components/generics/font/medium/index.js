import React from 'react'
import './styles.css'

class FontMedium extends React.Component {
    render() {
        return (
            <span className="medium-font">
                {this.props.children}
            </span>
        )
    }
}

export default FontMedium
import React from 'react'
import './styles.css'

class ItalicText extends React.Component {
    render() {
        return (
            <span className="italic-text-container">
                {this.props.children}
            </span>
        )
    }
}

export default ItalicText
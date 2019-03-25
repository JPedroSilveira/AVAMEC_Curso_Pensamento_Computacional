import React from 'react'
import './styles.css'

class UnderlinedText extends React.Component {
    render() {
        return (
            <span className="text-underlined-container">
                {this.props.children}
            </span>
        )
    }
}

export default UnderlinedText
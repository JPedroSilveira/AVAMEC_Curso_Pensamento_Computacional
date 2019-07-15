import React from 'react'
import './styles.css'

class FontBlue extends React.Component {
    render() {
        return (
            <span className="font-blue">
                {this.props.children}
            </span>
        )
    }
}

export default FontBlue
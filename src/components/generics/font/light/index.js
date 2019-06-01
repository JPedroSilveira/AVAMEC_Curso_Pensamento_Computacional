import React from 'react'
import './styles.css'

class FontLight extends React.Component {
    render() {
        return (
            <span className="font-light">
                {this.props.children}
            </span>
        )
    }
}

export default FontLight
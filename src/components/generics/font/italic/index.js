import React from 'react'
import './styles.css'

class FontItalic extends React.Component {
    render() {
        return (
            <span className="italic-font">
                {this.props.children}
            </span>
        )
    }
}

export default FontItalic
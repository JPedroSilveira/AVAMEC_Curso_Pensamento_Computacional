import React from 'react'
import './styles.css'

class FontHuge extends React.Component {
    render() {
        return (
            <span className="huge-font">
                {this.props.children}
            </span>
        )
    }
}

export default FontHuge
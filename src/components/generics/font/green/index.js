import React from 'react'
import './styles.css'

class FontGreen extends React.Component {
    render() {
        return (
            <span className="font-green">
                {this.props.children}
            </span>
        )
    }
}

export default FontGreen
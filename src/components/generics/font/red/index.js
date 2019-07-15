import React from 'react'
import './styles.css'

class FontRed extends React.Component {
    render() {
        return (
            <span className="font-red">
                {this.props.children}
            </span>
        )
    }
}

export default FontRed
import React from 'react'
import './styles.css'

class FontDark extends React.Component {
    render() {
        return (
            <span className="font-dark">
                {this.props.children}
            </span>
        )
    }
}

export default FontDark
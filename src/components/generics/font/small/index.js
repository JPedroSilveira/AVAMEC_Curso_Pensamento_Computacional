import React from 'react'
import './styles.css'

class FontSmall extends React.Component {
    render() {
        return (
            <span className="small-font">
                {this.props.children}
            </span>
        )
    }
}

export default FontSmall
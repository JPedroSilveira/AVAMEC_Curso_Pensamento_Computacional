import React from 'react'
import './styles.css'

class CenterText extends React.Component {
    render() {
        return (
            <span className="center-text">
                {this.props.children}
            </span>
        )
    }
}

export default CenterText
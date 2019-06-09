import React from 'react'
import './styles.css'

class Regular extends React.Component {
    render() {
        return (
            <span className="regular">
                {this.props.children}
            </span>
        )
    }
}

export default Regular
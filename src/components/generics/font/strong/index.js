import React from 'react'
import './styles.css'

class Strong extends React.Component {
    render() {
        return (
            <span className="strong">
                {this.props.children}
            </span>
        )
    }
}

export default Strong
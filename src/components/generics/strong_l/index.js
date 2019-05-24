import React from 'react'
import './styles.css'

class StrongL extends React.Component {
    render() {
        return (
            <span className="strong-l">
                {this.props.children}
            </span>
        )
    }
}

export default StrongL
import React from 'react'
import './styles.css'

class PCenter extends React.Component {
    render() {
        return (
            <p className="pcenter">
                {this.props.children}
            </p>
        )
    }
}

export default PCenter
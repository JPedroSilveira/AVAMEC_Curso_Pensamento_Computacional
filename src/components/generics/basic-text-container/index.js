import React from 'react'
import './styles.css'

class BasicTextContainer extends React.Component {
    render() {
        return (
            <div className="basic-text-container">
                {this.props.children}
            </div>
        )
    }
}

export default BasicTextContainer
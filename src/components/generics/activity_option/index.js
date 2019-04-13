import React from 'react'
import './styles.css'

class ActivityOption extends React.Component {
    render() {
        return (
            <div className="container-option" id={this.props.id}>
                {this.props.children}
            </div>
        )
    }
}

export default ActivityOption
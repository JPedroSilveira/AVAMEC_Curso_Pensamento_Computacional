import React from 'react'
import './styles.css'

class CenterBoxContainer extends React.Component {
    render() {
        return (
            <div id={this.props.id} className="center-box-container">
                {this.props.children}
            </div>
        )
    }
}

export default CenterBoxContainer
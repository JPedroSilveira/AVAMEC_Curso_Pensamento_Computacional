import React from 'react'
import './styles.css'

class InlineBox extends React.Component {
    render() {
        return (
            <div className="container-inline-box" id={this.props.id} key={this.props.key}>
                {this.props.children}
            </div>
        )
    }
}

export default InlineBox
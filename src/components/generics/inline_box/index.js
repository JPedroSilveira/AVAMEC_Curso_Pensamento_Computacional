import React from 'react'
import './styles.css'

class InlineBox extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container" id={this.props.id} key={this.props.key}>
                {this.props.children}
            </div>
        )
    }
}

export default InlineBox
import React from 'react'
import './styles.css'

class ActivityOption extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container" key={this.props.key} id={this.props.id}>
                {this.props.children}
            </div>
        )
    }
}

export default ActivityOption
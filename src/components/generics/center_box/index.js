import React from 'react'
import './styles.css'

class CenterBox extends React.Component {
    render() {
        return (
            <div id={this.props.id} className="box">
                {this.props.children}
            </div>
        )
    }
}

export default CenterBox
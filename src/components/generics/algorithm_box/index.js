import React from 'react'
import './styles.css'

class AlgorithmBox extends React.Component {
    render() {
        return (
            <div id={this.props.id} key={this.props.key} className="boxed algorithm">
                {this.props.children}
            </div>
        )
    }
}

export default AlgorithmBox
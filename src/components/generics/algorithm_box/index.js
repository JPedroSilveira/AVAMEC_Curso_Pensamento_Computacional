import React from 'react'
import './styles.css'

class AlgorithmBox extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id={this.props.id} key={this.props.key} className="alg-box">
                <div className="head">
                    <span className="title">{this.props.title}</span>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default AlgorithmBox
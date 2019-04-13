import React from 'react'
import Title from '../title'
import ReactHtmlParser from 'react-html-parser'
import './styles.css'

class StatementAlgorithmBox extends React.Component {
    render() {
        return (
            <div id={this.props.id} key={this.props.key} className="alg-box">
                <div className="head">
                    <Title>{ReactHtmlParser(this.props.title)}</Title>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default StatementAlgorithmBox
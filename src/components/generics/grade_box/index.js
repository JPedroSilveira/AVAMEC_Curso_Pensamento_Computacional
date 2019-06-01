import React from 'react'
import Strong from '../font/strong'
import './styles.css'

class GradeBox extends React.Component {
    render() {
        return (
            <div className="grade-container" id={this.props.id} key={this.props.key}>
                Sua nota é: <Strong>{this.props.value}</Strong>.
            </div>
        )
    }
}

export default GradeBox
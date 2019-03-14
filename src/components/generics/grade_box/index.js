import React from 'react'
import './styles.css'

class GradeBox extends React.Component {
    render() {
        return (
            <div className="container" id={this.props.id} key={this.props.key}>
                Sua nota é: <strong>{this.props.value}</strong>.
            </div>
        )
    }
}

export default GradeBox
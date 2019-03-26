import React from 'react'
import './styles.css'

class AlgorithmLevel extends React.Component {
    constructor(props) {
        super(props)

        this.class = "level "

        if (this.props.child) {
            this.class += "sublevel "
        }

        if (!this.props.showStyle) {
            this.class += "none-style "
        }
    }

    render() {
        return (
            <ol id={this.props.id} className={this.class}>
                {this.props.children}
            </ol>
        )
    }
}

export default AlgorithmLevel
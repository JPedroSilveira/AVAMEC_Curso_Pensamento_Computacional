import React from 'react'
import './styles.css'

class AlgorithmLevel extends React.Component {
    constructor(props) {
        super(props)

        this.class = "level "

        if (this.props.showStyle) {
            this.class += "none-style "
        }
    }

    render() {
        return (
            <div id={this.props.id} className={this.class}>
                {this.props.children}
            </div>
        )
    }
}

export default AlgorithmLevel
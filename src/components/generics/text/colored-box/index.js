import React from 'react'
import './styles.css'

class ColoredBox extends React.Component {
    constructor(props) {
        super(props)
        this.style = {
            marginTop: props.marginTop ? props.marginTop : "0",
            marginBottom: props.marginBottom ? props.marginBottom : "0",
            borderColor: props.borderColor,
            backgroundColor: props.backgroundColor
        }
    }

    render() {
        return (
            <div className="blue-box-container" style={this.style}>
                {this.props.children}
            </div>
        )
    }
}

export default ColoredBox
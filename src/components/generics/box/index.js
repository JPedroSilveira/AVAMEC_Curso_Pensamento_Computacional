import React from 'react'
import './styles.css'

class Box extends React.Component {
    constructor(props) {
        super(props)

        this.boxStyle = {
            borderColor: this.props.borderColor !== undefined ? this.props.borderColor : "black",
            width: this.props.width !== undefined ? this.props.width : "80%",
            backgroundColor: this.props.backgroundColor !== undefined ? this.props.backgroundColor : "rgb(241, 239, 198)",
            textAlign: this.props.centerText ? "center" : "inherit"
        }
    }

    render() {
        return (
            <div id={this.props.id} className="box-container" style={this.boxStyle}>
                {this.props.children}
            </div>
        )
    }
}

export default Box
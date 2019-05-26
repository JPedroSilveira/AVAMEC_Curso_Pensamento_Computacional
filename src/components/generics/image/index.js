import React from 'react'
import './styles.css'

class Image extends React.Component {
    constructor(props){
        super(props)
        this.style = {
            width: props.width ? props.width : (props.wide ? "50%" : "30%"),
            height: props.height ? props.height : null
        }
    }
    render() {
        return (
            <div className="image-container">
                <img src={this.props.src} style={this.style} alt={this.props.alt} />
                {this.props.children}
            </div>
        )
    }
}

export default Image
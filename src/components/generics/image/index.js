import React from 'react'
import './styles.css'

class Image extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            className: props.wide ? "wide-image-style" : "image-style"
        }
    }
    render() {
        return (
            <div className="image-container">
                <img src={this.props.src} className={this.state.className} alt={this.props.alt} />
                {this.props.children}
            </div>
        )
    }
}

export default Image
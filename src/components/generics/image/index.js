import React from 'react'
import './styles.css'

class Image extends React.Component {
    render() {
        return (
            <div className="image-container">
                <img src={this.props.src} className="image-style" alt={this.props.alt} />
                {this.props.children}
            </div>
        )
    }
}

export default Image
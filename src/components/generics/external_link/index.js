import React from 'react'
import './styles.css'

class ExternalLink extends React.Component {
    render() {
        return (
            <a className="external-link-container" href={this.props.href}
                target="_blank"
                rel="nofollow noopener noreferrer">
                {this.props.children}
            </a>
        )
    }
}

export default ExternalLink
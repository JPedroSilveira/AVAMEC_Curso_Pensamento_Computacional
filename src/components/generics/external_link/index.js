import React from 'react'
import './styles.css'

const ExternalLink = () => (
    <div className="external-link-container">
        <a href={this.props.href} 
                target="_blank" 
                rel="nofollow noopener noreferrer">
                {this.props.children}
        </a>
    </div>
)

export default ExternalLink
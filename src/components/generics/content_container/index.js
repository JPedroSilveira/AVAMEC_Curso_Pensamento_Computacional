import React from 'react'
import './styles.css'

class ContentContainer extends React.Component {
    render() {
        return (
            <div className="content-container">
                <div className="text-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ContentContainer
import React from 'react'
import './styles.css'

class Title extends React.Component {
    render() {
        return (
            <div className="title-container">
                {this.props.children}
            </div>
        )
    }
}

export default Title
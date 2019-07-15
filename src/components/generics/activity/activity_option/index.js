import React from 'react'
import FontMedium from '../../font/medium'
import FontRegular from '../../font/regular'
import './styles.css'

class ActivityOption extends React.Component {
    render() {
        return (
            <div className="container-option" id={this.props.id}>
                <FontRegular><FontMedium>{this.props.children}</FontMedium></FontRegular>
            </div>
        )
    }
}

export default ActivityOption
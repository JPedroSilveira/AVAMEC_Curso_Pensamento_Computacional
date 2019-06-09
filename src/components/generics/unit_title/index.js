import React from 'react'
import Strong from '../font/strong'
import FontLarge from '../font/large'
import './styles.css'

class UnitTitle extends React.Component {
    render() {
        return (
            <div className="unit-title-container">
                <FontLarge><Strong>{this.props.children}</Strong></FontLarge>
            </div>
        )
    }
}

export default UnitTitle
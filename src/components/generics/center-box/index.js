import React from 'react'
import './styles.css'

class CenterBox extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div id={this.props.id} className="box" key={this.props.key}>
                {this.props.children}
            </div>
        )
    }
}

export default CenterBox
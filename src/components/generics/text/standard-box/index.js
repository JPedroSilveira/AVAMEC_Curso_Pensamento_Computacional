import React from 'react'
import FontMedium from '../../font/medium'
import Regular from '../../font/regular'
import './styles.css'

//props.text = Texto a ser exibido
class TextStandardBox extends React.Component {
    constructor(props) {
        super(props)

        this.style = {
            marginBottom: props.marginBottom ? props.marginBottom : "0",
            marginTop: props.marginTop ? props.marginTop : "0"
        }

        this.borderStyle = {
            borderImage: "url(" + props.image + ") 0 fill",
        }
    }
    render() {
        return (
            <div className="text-standard-box-container" style={this.style}> 
                <div className="text-standard-box" style={this.borderStyle}>
                    <div className="text-standard-box-text-container">
                        <Regular><FontMedium>{this.props.children}</FontMedium></Regular>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextStandardBox
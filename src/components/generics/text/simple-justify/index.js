import React from 'react'
import FontMedium from '../../font/medium'
import Regular from '../../font/regular'
import './styles.css'

//props.src = Imagem a ser utilizada
//props.height = Altura da imagem introduzida
class SimpleJustify extends React.Component {
    constructor(props){
        super(props)
        this.style = {
            marginTop: props.marginTop !== undefined ? props.marginTop : "0",
            marginBottom: props.marginBottom !== undefined ? props.marginBottom : "0"
        }
    }

    render() {
        return (
            <div className="text-simple-justify-container" style={this.style}>
                <div className="text-simple-justify">
                    <Regular><FontMedium>{this.props.children}</FontMedium></Regular>
                </div>
            </div>
        )
    }
}

export default SimpleJustify
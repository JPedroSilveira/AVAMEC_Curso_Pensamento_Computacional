import React from 'react'
import Image from '../../image'
import FontMedium from '../../font/medium'
import Regular from '../../font/regular'
import './styles.css'

//props.src = Imagem a ser utilizada
//props.height = Altura da imagem introduzida
class TextWithImageLeft extends React.Component {
    constructor(props) {
        super(props)
        this.style = {
            marginBottom: props.marginBottom ? props.marginBottom : "0",
        }
    }

    render() {
        return (
            <div className="text-with-image-left-container" style={this.style}>
                <Image paddingTop={this.props.paddingTop} marginRight={this.props.marginRight} height={this.props.height} width={this.props.width} src={this.props.src} />
                <Regular><FontMedium>{this.props.children}</FontMedium></Regular>
            </div>
        )
    }
}

export default TextWithImageLeft
import React from 'react'
import Image from '../../image'
import FontMedium from '../../font/medium'
import Regular from '../../font/regular'
import './styles.css'

//props.src = Imagem a ser utilizada
//props.height = Altura da imagem introduzida
class TextWithImageRight extends React.Component {
    render() {
        return (
            <div className="text-with-image-right-container">
                <Regular><FontMedium>{this.props.children}</FontMedium></Regular>
                <Image height={this.props.height} width="auto" src={this.props.src} />
            </div>
        )
    }
}

export default TextWithImageRight
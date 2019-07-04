import React from 'react'
import FontMedium from '../../font/medium'
import Regular from '../../font/regular'
import './styles.css'

//props.src = Imagem a ser utilizada
//props.height = Altura da imagem introduzida
class SimpleJustify extends React.Component {
    render() {
        return (
            <div className="text-simple-justify-container">
                <div className="text-simple-justify">
                    <Regular><FontMedium>{this.props.children}</FontMedium></Regular>
                </div>
            </div>
        )
    }
}

export default SimpleJustify
import React, { Fragment } from 'react'
import MiniGameNames from '../../../../constants/miniGameNames'
import MiniGameLoader from '../../../generics/mini_game_loader'
import Strong from '../../../generics/font/strong'

class AplicacaoInterativa extends React.Component {
    render() {
        return (
            <Fragment>
                <h2>Mini-jogo: Conceitos Interativos</h2>
                <p>Nessa unidade veremos o Pilar <Strong>Abstração</Strong>. Vamos começar com o jogo abaixo que ilustra uma noção bem básica de abstração que usamos no nosso dia a dia.</p>
                <MiniGameLoader miniGameName={MiniGameNames.ABSTRACAO}/>
            </Fragment>
        )
    }
}
export default AplicacaoInterativa

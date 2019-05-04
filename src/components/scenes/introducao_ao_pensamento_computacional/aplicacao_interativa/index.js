import React, { Fragment } from 'react'
import MiniGameNames from '../../../../constants/miniGameNames'
import MiniGameLoader from '../../../generics/mini_game_loader'

class AplicacaoInterativa extends React.Component {
    render() {
        return (
            <Fragment>
                <h2>Mini-jogo: Conceitos Interativos</h2>
                <p>Entre no jogo e ajude o fazendeiro com uma estratégia para a travessia do rio!</p>
                <MiniGameLoader miniGameName={MiniGameNames.INTRODUCAO} />
            </Fragment>
        )
    }
}
export default AplicacaoInterativa

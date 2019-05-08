import React, { Fragment } from 'react'
import MiniGameNames from '../../../../constants/miniGameNames'
import MiniGameLoader from '../../../generics/mini_game_loader'

class AplicacaoInterativa extends React.Component {
    render() {
        return (
            <Fragment>
                <p>Finalmente chegamos ao Pilar Algoritmo! Antes de examinarmos em mais detalhes esse pilar do Pensamento Computacional, que tal praticar, com o jogo a seguir, o processo de defini&ccedil;&atilde;o de uma sequ&ecirc;ncia de passos para atingir um determinado objetivo?</p>            
                <h2>Mini-jogo: Conceitos Interativos</h2>
                <MiniGameLoader miniGameName={MiniGameNames.ALGORITMOS} />
            </Fragment>
        )
    }
}
export default AplicacaoInterativa

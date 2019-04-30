import React from 'react'
import MiniGameNames from '../../../../constants/miniGameNames'
import MiniGameLoader from '../../../generics/mini_game_loader'

class AplicacaoInterativa extends React.Component {
    render() {
        return (
            <div>
                <h2>Mini-jogo: Conceitos Interativos</h2>
                <MiniGameLoader miniGameName={MiniGameNames.ABSTRACAO}/>
            </div>
        )
    }
}
export default AplicacaoInterativa

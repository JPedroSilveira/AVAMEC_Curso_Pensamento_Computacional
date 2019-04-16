import React from 'react'
import MiniGameNames from '../../../../constants/miniGameNames'
import MiniGameLoader from '../../../generics/mini-game-loader'

class AplicacaoInterativa extends React.Component {
    render() {
        return (
            <div>
                <h2>Mini-jogo: Conceitos Interativos</h2>
                <MiniGameLoader miniGameUnitName={MiniGameNames.PADROES} />
            </div>
        )
    }
}
export default AplicacaoInterativa

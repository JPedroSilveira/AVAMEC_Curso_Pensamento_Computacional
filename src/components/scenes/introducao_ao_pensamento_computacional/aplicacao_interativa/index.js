import React, { Fragment } from 'react'
import MiniGameNames from '../../../../constants/miniGameNames'
import MiniGameLoader from '../../../generics/mini_game_loader'

class AplicacaoInterativa extends React.Component {
    render() {
        return (
            <Fragment>
                <h2>Mini-jogo: Conceitos Interativos</h2>
                <MiniGameLoader miniGameName={MiniGameNames.INTRODUCAO} />
            </Fragment>
        )
    }
}
export default AplicacaoInterativa

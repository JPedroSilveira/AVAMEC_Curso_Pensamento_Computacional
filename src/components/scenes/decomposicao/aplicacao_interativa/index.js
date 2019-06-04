import React, { Fragment } from 'react'
import MiniGameNames from '../../../../constants/miniGameNames'
import MiniGameLoader from '../../../generics/mini_game_loader'
import Strong from '../../../generics/font/strong'

class AplicacaoInterativa extends React.Component {
    render() {
        return (
            <Fragment>
                <h2>Mini-jogo: Conceitos Interativos</h2>
                <p>Antes de iniciarmos a discussão sobre o Pilar <Strong>Decomposição</Strong> que tal experimentar a ideia de decompor um problema em partes no clássico contexto da solução de um mistério?</p>
                <MiniGameLoader miniGameName={MiniGameNames.DECOMPOSICAO} />
            </Fragment>
        )
    }
}
export default AplicacaoInterativa

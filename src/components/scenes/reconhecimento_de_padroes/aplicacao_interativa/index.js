import React, { Fragment } from 'react'
import MiniGameNames from '../../../../constants/miniGameNames'
import MiniGameLoader from '../../../generics/mini_game_loader'

class AplicacaoInterativa extends React.Component {
    render() {
        return (
            <Fragment>
                <h2>Mini-jogo: Conceitos Interativos</h2>
                <p>Antes de iniciarmos nosso estudo do Pilar Reconhecimento de Padrões, vejamos no jogo a seguir uma situação em que o reconhecimento de padrões pode ser muito interessante.</p>
                <MiniGameLoader miniGameName={MiniGameNames.PADROES} />
            </Fragment>
        )
    }
}
export default AplicacaoInterativa

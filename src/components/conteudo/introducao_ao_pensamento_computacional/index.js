import React from 'react'
import ConteudoGenerico from '../utils/conteudo_generico'
import Texto1 from './texto_1'
import Desafios from './desafios'


/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
*/
class IntroducaoAoPensamentoComputacional extends ConteudoGenerico {
    constructor(props) {
        super(props)

        this.state = {
            paginasDisponiveis: 1
        }
    }

    /*Retorna o título da unidade*/
    carregarTitulo = () => {
        return (<h1>2. Introdução ao Pensamento Computacional</h1>)
    }

    /*Carrega o conteúdo que deve ser exibido na unidade atual*/
    carregarPaginaAtual = () => {
        return(
            <div>
                <Texto1 />
                <Desafios />
            </div>
        )
    }

    render() {
        return (
            <div className="aprc-container">
                {this.carregarTitulo()}
                {this.carregarPaginaAtual()}
                {this.carregarPaginacao()}
                {this.carregarMudarUnidade()}
            </div>
        )
    }
}

export default IntroducaoAoPensamentoComputacional

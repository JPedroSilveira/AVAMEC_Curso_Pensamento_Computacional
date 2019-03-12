import React from 'react'
import ConteudoGenerico from '../../generics/conteudo_generico'
import Conceituacao from './conceituacao'
import Aplicacoes from './aplicacoes'
import Recomendacoes from './recomendacoes'
import AtividadeAvaliativa1 from './atividade_avaliativa_1'
import Problemas from './problemas'
import AtividadeComplementar1 from './atividade_complementar_1'


/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class Decomposicao extends ConteudoGenerico {
    constructor(props) {
        super(props)

        this.state = {
            availablePages: 3
        }
    }

    /*Retorna o título da unidade.*/
    carregarTitulo = () => {
        return (<h1>3. Decomposição </h1>)
    }

    /*Carrega o conteúdo que deve ser exibido na unidade atual.*/
    carregarPaginaAtual = () => {
        switch (this.state.paginaAberta){
            case "1":
                return (
                    <div>
                        <Conceituacao />
                        <Aplicacoes />
                        <Recomendacoes />
                    </div>
                ) 
            case "2":
                return (
                    <AtividadeAvaliativa1 idUnidade={this.props.id} />
                )
            case "3":
                return (
                    <div>
                        <Problemas />
                        <AtividadeComplementar1 idUnidade={this.props.id} />
                    </div>
                )
            default:
                return null
        }
    }

    render() {
        return (
            <div className="aprc-container">
                {this.carregarTitulo()}
                {this.carregarPaginaAtual()}
                {this.loadPagination()}
                {this.loadUnitController()}
            </div>
        )
    }
}

export default Decomposicao

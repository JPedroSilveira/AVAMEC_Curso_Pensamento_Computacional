import React from 'react'
import UnitBase from '../../generics/unit_base'
import AplicacaoInterativa from './aplicacao_interativa'
import ConceituacaoParte1 from './conceituacao/parte_1'
import ConceituacaoParte2 from './conceituacao/parte_2'
import ConceituacaoParte3 from './conceituacao/parte_3'
import AplicacoesParte1 from './aplicacoes/parte_1'
import AplicacoesParte2 from './aplicacoes/parte_2'
import Recomendacoes from './recomendacoes'
import AtividadeAvaliativa from './atividade_avaliativa'
import AtividadeCooperativa from './atividade_cooperativa'
import Problemas from './problemas'
import TopicosAvancados from './topicos_avancados'
import ParaSaberMais from './para_saber_mais'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class Algoritmos extends UnitBase {
    constructor(props) {
        super(props)

        this.state = {
            availablePages: 9
        }
    }

    renderTitle = () => {
        return (<h1>6. Algoritmos</h1>)
    }

    renderPage = () => {
        switch (this.state.openPage) {
            case "1":
                return (
                    <AplicacaoInterativa />
                )
            case "2":
                return (
                    <div>
                        <ConceituacaoParte1 />
                        <ConceituacaoParte2 />
                        <ConceituacaoParte3 />
                    </div>
                )
            case "3":
                return (
                    <div>
                        <AplicacoesParte1 />
                        <AplicacoesParte2 />
                    </div>
                )
            case "4":
                return (
                    <Recomendacoes />
                )
            case "5":
                return (
                    <AtividadeAvaliativa unitId={this.props.id} />
                )    
            case "6":
                return (
                    <Problemas unitId={this.props.id} />
                )
            case "7":
                return (
                    <TopicosAvancados />
                )
            case "8":
                return (
                    <AtividadeCooperativa />
                )
            case "9":
                return (
                    <ParaSaberMais />
                )
            default:
                return null
        }
    }

    render() {
        return (
            <div>
                {this.renderTitle()}
                {this.renderPage()}
                {this.loadPagination()}
                {this.loadUnitController()}
            </div>
        )
    }
}

export default Algoritmos
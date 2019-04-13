import React from 'react'
import UnitBase from '../../generics/unit_base'

import AplicacaoInterativa from './aplicacao_interativa'
import ConceituacaoParteUm from './conceituacao/parte_um'
import AtividadeAvaliativaUm from './atividade_avaliativa_um'
import ConceituacaoParteDois from './conceituacao/parte_dois'
import AplicacoesParteUm from './aplicacoes/parte_um'
import AplicacoesParteDois from './aplicacoes/parte_dois'
import AtividadeAvaliativaDois from './atividade_avaliativa_dois'
import AtividadeAvaliativaTres from './atividade_avaliativa_tres'
import Problemas from './problemas'
import AtividadeCooperativa from './atividade_cooperativa';

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class PensamentoComputacionalEInterdisciplinidade extends UnitBase {
    constructor(props) {
        super(props)

        this.state = {
            availablePages: 10
        }
    }

    renderTitle = () => {
        return (<h1>7. Pensamento Computacional e Interdisciplinaridade</h1>)
    }

    renderPage = () => {
        switch (this.state.openPage) {
            case "1":
                return (
                    <AplicacaoInterativa />
                )
            case "2":
                return (
                    <ConceituacaoParteUm />
                )
            case "3":
                return (
                    <AtividadeAvaliativaUm unitId={this.props.id} />
                )
            case "4":
                return (
                    <ConceituacaoParteDois />
                )
            case "5":
                return (
                    <AplicacoesParteUm />
                )
            case "6":
                return (
                    <AtividadeAvaliativaDois unitId={this.props.id} />
                )
            case "7":
                return (
                    <AplicacoesParteDois />
                )
            case "8":
                return (
                    <AtividadeAvaliativaTres unitId={this.props.id} />
                )
            case "9":
                return (
                    <Problemas />
                )
            case "10":
                return (
                    <AtividadeCooperativa unitId={this.props.id} />
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

export default PensamentoComputacionalEInterdisciplinidade
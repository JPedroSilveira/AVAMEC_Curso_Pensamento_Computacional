import React from 'react'
import UnitBase from '../../generics/unit_base'

import Conceituacao from './conceituacao'
import CooperacaoEOPensamentoComputacional from './cooperacao_e_o_pensamento_computacional'
import AtividadeAvaliativaUm from './atividade_avaliativa_um'
import ParaSaberMais from './para_saber_mais'
import AplicacoesParteUm from './aplicacoes/parte_um'
import AtividadeAvaliativaDois from './atividade_avaliativa_dois'
import AplicacoesParteDois from './aplicacoes/parte_dois'
import AtividadeAvaliativaTres from './atividade_avaliativa_tres'
import ResolucaoProblema from './resolucao_de_problema'
import AtividadeCooperativa from '../pensamento_computacional_e_interdisciplinaridade/atividade_cooperativa';

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class PensamentoComputacionalECooperacao extends UnitBase {
    constructor(props) {
        super(props)

        this.state = {
            availablePages: 10
        }
    }

    renderTitle = () => {
        return (<h1>7. Pensamento Computacional e Cooperação</h1>)
    }

    renderPage = () => {
        switch (this.state.openPage) {
            case "1":
                return (
                    <Conceituacao />
                )
            case "2":
                return (
                    <CooperacaoEOPensamentoComputacional />
                )
            case "3":
                return (
                    <AtividadeAvaliativaUm unitId={this.props.id} />
                )
            case "4":
                return (
                    <ParaSaberMais />
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
                    <ResolucaoProblema />
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

export default PensamentoComputacionalECooperacao
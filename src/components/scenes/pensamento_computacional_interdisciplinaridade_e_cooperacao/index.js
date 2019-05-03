import React, { Fragment } from 'react'
import UnitBase from '../../generics/unit_base'

import InterdisciplinaridadeParteUm from './interdisciplinaridade/parte_um'
import InterdisciplinaridadeParteDois from './interdisciplinaridade/parte_dois'
import AtividadeAvaliativaUm from './atividade_avaliativa_um'
import InterdisciplinaridadeEPensamentoComputacional from './interdisciplinaridade_e_pensamento_computacional'
import AplicacaoInterdisciplinaridade from './aplicacao_interdisciplinaridade'
import AtividadeAvaliativaDois from './atividade_avaliativa_dois'
import Problemas from './problemas'
import AtividadeComplementarInterdisciplinaridade from './atividade_complementar_interdisciplinaridade'
import Cooperacao from './cooperacao'
import CooperacaoEPensamentoComputacional from './cooperacao_e_pensamento_computacional'
import AplicacaoCooperacaoParteUm from './aplicacao_cooperacao/parte_um'
import AplicacaoCooperacaoParteDois from './aplicacao_cooperacao/parte_dois'
import AtividadeAvaliativaTres from './atividade_avaliativa_tres'
import AtividadeComplementarCooperacao from './atividade_complementar_cooperacao'
import Referencias from './referencias'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class PensamentoComputacionalInterdisciplinidadeECooperacao extends UnitBase {
    constructor(props) {
        super(props)

        this.state = {
            availablePages: 14
        }
    }

    renderTitle = () => {
        return (<h1>6. Pensamento Computacional Interdisciplinaridade e Coopera&ccedil;&atilde;o</h1>)
    }

    renderPage = () => {
        switch (this.state.openPage) {
            case "1":
                return (
                    <InterdisciplinaridadeParteUm />
                )
            case "2":
                return (
                    <InterdisciplinaridadeParteDois />
                )
            case "3":
                return (
                    <AtividadeAvaliativaUm unitId={this.props.id} />
                )
            case "4":
                return (
                    <InterdisciplinaridadeEPensamentoComputacional />
                )
            case "5":
                return (
                    <AplicacaoInterdisciplinaridade />
                )
            case "6":
                return (
                    <AtividadeAvaliativaDois unitId={this.props.id} />
                )
            case "7":
                return (
                    <Problemas unitId={this.props.id} />
                )
            case "8":
                return (
                    <AtividadeComplementarInterdisciplinaridade unitId={this.props.id} />
                )
            case "9":
                return (
                    <Cooperacao />
                )
            case "10":
                return (
                    <CooperacaoEPensamentoComputacional />
                )  
            case "11":
                return (
                    <AplicacaoCooperacaoParteUm />
                )  
            case "12":
                return (
                    <AplicacaoCooperacaoParteDois />
                )
            case "13":
                return (
                    <AtividadeAvaliativaTres unitId={this.props.id} />
                )
            case "14":
                return (
                    <Fragment>
                        <AtividadeComplementarCooperacao unitId={this.props.id} />
                        <Referencias />
                    </Fragment>
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

export default PensamentoComputacionalInterdisciplinidadeECooperacao
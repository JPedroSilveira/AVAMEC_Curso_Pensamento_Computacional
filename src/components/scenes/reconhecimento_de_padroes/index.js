import React from 'react'
import UnitBase from '../../generics/unit_base'
import AplicacaoInterativa from './aplicacao_interativa'
import Conceituacao from './conceituacao'
import AtividadeAvaliativaUm from './atividade_avaliativa_um'
import Aplicacoes from './aplicacoes'
import AtividadeAvaliativaDois from './atividade_avaliativa_dois'
import Problemas from './problemas'
import AtividadeCooperativa from './atividade_cooperativa'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
*/
class ReconhecimentoDePadroes extends UnitBase {
    constructor(props) {
        super(props)

        this.state = {
            availablePages: 7
        }
    }

    renderTitle = () => {
        return (<h1>4. Reconhecimento de Padrões</h1>)
    }

    renderPage = () => {
        switch (this.state.openPage) {
            case "1":
                return (
                    <AplicacaoInterativa />
                )
            case "2":
                return (
                    <Conceituacao />
                )
            case "3":
                return (
                    <AtividadeAvaliativaUm unitId={this.props.id} />
                )
            case "4":
                return (
                    <Aplicacoes />
                )
            case "5":
                return (
                    <AtividadeAvaliativaDois unitId={this.props.id} />
                )
            case "6":
                return (
                    <Problemas />
                )
            case "7":
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

export default ReconhecimentoDePadroes
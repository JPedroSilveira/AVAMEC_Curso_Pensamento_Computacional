import React from 'react'
import UnitBase from '../../generics/unit_base'
import AplicacaoInterativa from './aplicacao_interativa'
import Conceituacao from './conceituacao'
import Aplicacoes from './aplicacoes'
import AtividadeAvaliativa from './atividade_avaliativa'
import Recomendacoes from './recomendacoes'
import Problemas from './problemas'
import AtividadeComplementar from './atividade_complementar'
import AssuntosCorrelatos from './assuntos_correlatos'
import AtividadeCooperativa from './atividade_cooperativa'
import ParaSaberMais from './para_saber_mais'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class ReconhecimentoDePadroes extends UnitBase {
    constructor(props) {
        super(props)

        this.state = {
            availablePages: 9
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
                    <Aplicacoes />
                )
            case "4":
                return (
                    <AtividadeAvaliativa unitId={this.props.id}/>
                )
            case "5":
                return (
                    <Recomendacoes />
                )
            case "6":
                return (
                    <Problemas />
                )
            case "7":
                return (
                    <AtividadeCooperativa />
                )
            case "8":
                return (
                    <div>
                        <AtividadeComplementar unitId={this.props.id}/>
                        <AssuntosCorrelatos />
                    </div>
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

export default ReconhecimentoDePadroes
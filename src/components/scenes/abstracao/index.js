import React from 'react'
import UnitBase from '../../generics/unit_base'
import AplicacaoInterativa from './aplicacao_interativa'
import Conceituacao from './conceituacao'
import Aplicacoes from './aplicacoes'
import AssuntosCorrelatos from './assuntos_correlatos'
import AtividadeAvaliativa from './atividade_avaliativa'
import Problemas from './problemas'
import AtividadeComplementar from './atividade_complementar'
import Recomendacoes from './recomendacoes'
import AtividadeCooperativa from './atividade_cooperativa'
import ParaSaberMais from './para_saber_mais'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class Abstracao extends UnitBase {
    constructor(props) {
        super(props)
        
        this.state = {
            availablePages: 5,
            openPage: null
        }
    }

    renderTitle = () => {
        return (<h1>4. Abstração</h1>)
    }

    renderPage = () => {
        switch (this.state.openPage){
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
                    <div>
                        <Recomendacoes />
                        <AtividadeComplementar unitId={this.props.id} />
                        <AssuntosCorrelatos />
                    </div>
                )
            case "5":
                return (
                    <AtividadeAvaliativa unitId={this.props.id} />
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

export default Abstracao
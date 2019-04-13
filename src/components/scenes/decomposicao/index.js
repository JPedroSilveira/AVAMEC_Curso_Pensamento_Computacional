import React from 'react'
import UnitBase from '../../generics/unit_base'
import AplicacaoInterativa from './aplicacao_interativa'
import AtividadeCooperativa from './atividade_cooperativa'
import ParaSaberMais from './para_saber_mais'
import Conceituacao from './conceituacao'
import Aplicacoes from './aplicacoes'
import Recomendacoes from './recomendacoes'
import Problemas from './problemas'
import AtividadeAvaliativa from './atividade_avaliativa'
import AtividadeComplementar from './atividade_complementar'


/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class Decomposicao extends UnitBase {
    constructor(props) {
        super(props)

        this.state = {
            availablePages: 3
        }
    }

    renderTitle = () => {
        return (<h1>3. Decomposição </h1>)
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
                    <Recomendacoes />
                )
            case "5":
                return (
                    <AtividadeAvaliativa unitId={this.props.id} />
                )
            case "6":
                return (
                    <div>
                        <Problemas unitId={this.props.id} />
                        <AtividadeComplementar unitId={this.props.id} />
                    </div>
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

export default Decomposicao

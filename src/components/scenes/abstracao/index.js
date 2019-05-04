import React from 'react'
import UnitBase from '../../generics/unit_base'
import AplicacaoInterativa from './aplicacao_interativa'
import Conceituacao from './conceituacao'
import AtividadeAvaliativaUm from './atividade_avaliativa_um'
import AtividadeAvaliativaDois from './atividade_avaliativa_dois'
import AtividadeAvaliativaTres from './atividade_avaliativa_tres'
import Aplicacoes from './aplicacoes'
import Problemas from './problemas'
import AtividadeComplementar from './atividade_complementar'
import Recomendacoes from './recomendacoes'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class Abstracao extends UnitBase {
    constructor(props) {
        super(props)
        
        this.state = {
            availablePages: 9,
            openPage: null
        }
    }

    renderTitle = () => {
        return (<h1>3. Abstração</h1>)
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
                    <Recomendacoes />
                )
            case "7":
                return (
                    <AtividadeAvaliativaTres unitId={this.props.id} />
                )
            case "8":
                return (
                    <Problemas unitId={this.props.id} />
                )
            case "9":
                return (
                    <AtividadeComplementar unitId={this.props.id} />
                )
            default: 
                return null
        }
    }

    render() {
        return (
            <Fragment>
                {this.renderTitle()}
                {this.renderPage()}
                {this.loadPagination()}
                {this.loadUnitController()}
            </Fragment>
        )
    }
}

export default Abstracao
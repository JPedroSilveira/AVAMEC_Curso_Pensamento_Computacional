import React from 'react'
import UnitBase from '../../generics/unit_base'
import ConceituacaoParte1 from './conceituacao/parte_1'
import ConceituacaoParte2 from './conceituacao/parte_2'
import ConceituacaoParte3 from './conceituacao/parte_3'
import AplicacoesParte1 from './aplicacoes/parte_1'
import AplicacoesParte2 from './aplicacoes/parte_2'
import Recomendacoes from './recomendacoes'
import IntegralActivityOne from './integral_activity_one'
import ProblemsOne from './problems_one'
import TopicosAvancados from './topicos_avancados'

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
                    <ConceituacaoParte1/>
                )
            case "2":
                return (
                    <ConceituacaoParte2/>
                )
            case "3":
                return (
                    <ConceituacaoParte3/>
                )
            case "4":
                return (
                    <AplicacoesParte1/>
                )
            case "5":
                return (
                    <AplicacoesParte2/>
                )
            case "6":
                return (
                    <Recomendacoes/>
                )
            case "7":
                return (
                    <IntegralActivityOne unitId={this.props.id}/>
                )
            case "8":
                return (
                    <ProblemsOne unitId={this.props.id}/>
                )
            case "9":
                return (
                    <TopicosAvancados/>
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
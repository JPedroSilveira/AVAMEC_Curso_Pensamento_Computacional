import React from 'react'
import UnitBase from '../../generics/unit_base'
import Conceituacao from './conceituacao'
import Aplicacoes from './aplicacoes'
import IntegralActivityOne from './integral_activity_one'
import ProblemsOne from './problems_one'
import ComplementaryActivityOne from './complementary_activity_one'
import AssuntosCorrelatos from './assuntos_correlatos'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class ReconhecimentoDePadroes extends UnitBase {
    constructor(props) {
        super(props)

        this.state = {
            availablePages: 6
        }
    }

    renderTitle = () => {
        return (<h1>5. Reconhecimento de Padrões</h1>)
    }

    renderPage = () => {
        switch (this.state.openPage) {
            case "1":
                return (
                    <Conceituacao />
                )
            case "2":
                return (
                    <Aplicacoes />
                )
            case "3":
                return (
                    <IntegralActivityOne unitId={this.props.id} />
                )
            case "4":
                return (
                    <ProblemsOne unitId={this.props.id}/>
                )
            case "5":
                return (
                    <ComplementaryActivityOne unitId={this.props.id} />
                )
            case "6":
                return (
                    <AssuntosCorrelatos/>
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
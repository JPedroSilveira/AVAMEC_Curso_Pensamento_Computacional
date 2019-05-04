import React, { Fragment } from 'react'
import UnitBase from '../../generics/unit_base'
import Texto1 from './texto_1'
import Texto2 from './texto_2'
import Texto3 from './texto_3'
import Desafios from './desafios'
import AplicacaoInterativa from './aplicacao_interativa'
import Referencias from './referencias'


/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class IntroducaoAoPensamentoComputacional extends UnitBase {
    constructor(props) {
        super(props)

        this.state = {
            availablePages: 5
        }
    }

    renderTitle = () => {
        return (<h1>1. Introdução ao Pensamento Computacional</h1>)
    }

    renderPage = () => {
        switch (this.state.openPage) {
            case "1":
                return (
                    <Texto1 />
                )
            case "2":
                return (
                    <Texto2 />
                )
            case "3":
                return (
                    <Texto3 />
                )
            case "4":
                return (
                    <AplicacaoInterativa />
                )
            case "5":
                return (
                    <Fragment>
                        <Desafios />
                        <Referencias />
                    </Fragment>
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

export default IntroducaoAoPensamentoComputacional

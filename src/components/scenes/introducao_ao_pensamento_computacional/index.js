import React from 'react'
import UnitBase from '../../generics/unit_base'
import Texto1 from './texto_1'
import Texto2 from './texto_2'
import Texto3 from './texto_3'
import Desafios from './desafios'
import AplicacaoInterativa from './aplicacao_interativa'


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
        return (<h1>2. Introdução ao Pensamento Computacional</h1>)
    }

    renderPage = () => {
        switch (this.state.openPage) {
            case "1":
                return (
                    <AplicacaoInterativa />
                )
            case "2":
                return (
                    <Texto1 />
                )
            case "3":
                return (
                    <Texto2 />
                )
            case "4":
                return (
                    <Texto3 />
                )
            case "5":
                return (
                    <Desafios />
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

export default IntroducaoAoPensamentoComputacional

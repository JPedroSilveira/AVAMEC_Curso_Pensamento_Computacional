import React from 'react'
import UnitBase from '../../generics/unit_base'
import Texto1 from './texto_1'
import Desafios from './desafios'


/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class IntroducaoAoPensamentoComputacional extends UnitBase {
    constructor(props) {
        super(props)

        this.state = {
            availablePages: 1
        }
    }

    renderTitle = () => {
        return (<h1>2. Introdução ao Pensamento Computacional</h1>)
    }

    loadPage = () => {
        return(
            <div>
                <Texto1 />
                <Desafios />
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderTitle()}
                {this.loadPage()}
                {this.loadPagination()}
                {this.loadUnitController()}
            </div>
        )
    }
}

export default IntroducaoAoPensamentoComputacional

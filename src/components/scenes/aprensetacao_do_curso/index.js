import React from 'react'
import ConteudoGenerico from '../../generics/conteudo_generico'
import Texto1 from './texto_1'
import IntegralActivity from '../../generics/activity/integral_activity'
import Texto2 from './texto_2'
import Desafio from './desafio'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class ApresentacaoDoCurso extends ConteudoGenerico {
    constructor(props) {
        super(props)

        this.state = {
            availablePages: 2
        }
    }

    renderTitle = () => {
        return (<h1>1. Apresentação do Curso</h1>)
    }

    renderPage = () => {
        switch(this.state.openPage){
            case "1":
                return (
                    <Texto1 />
                )
            case "2":
                return (
                    <div>
                        <IntegralActivity unitId={this.props.id} />
                        <Texto2 />
                        <Desafio />
                    </div>
                )
            default:
                return null
        }
    }

    render() {
        return (
            <div className="aprc-container">
                {this.renderTitle()}
                {this.renderPage()}
                {this.loadPagination()}
                {this.loadUnitController()}
            </div>
        )
    }
}

export default ApresentacaoDoCurso

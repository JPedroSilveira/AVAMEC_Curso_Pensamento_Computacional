import React from 'react'
import UnitBase from '../../generics/unit_base'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class PensamentoComputacionalEInterdisciplinidade extends UnitBase {
    constructor(props) {
        super(props)

        this.state = {
            availablePages: 7
        }
    }

    renderTitle = () => {
        return (<h1>7. Pensamento Computacional e Interdisciplinaridade</h1>)
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
                    <Recomendacoes />
                )
            case "5":
                return (
                    <Problemas />
                )
            case "6":
                return (
                    <AtividadeCooperativa />
                )
            case "7":
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

export default PensamentoComputacionalEInterdisciplinidade
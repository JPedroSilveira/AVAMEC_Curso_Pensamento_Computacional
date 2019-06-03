import React, { Fragment } from 'react'
import UnitBase from '../../generics/unit_base'
import ContentContainer from '../../generics/content_container'
import AplicacaoInterativa from './aplicacao_interativa'
import Conceituacao from './conceituacao'
import AtividadeAvaliativaUm from './atividade_avaliativa_um'
import Aplicacoes from './aplicacoes'
import AtividadeAvaliativaDois from './atividade_avaliativa_dois'
import Problemas from './problemas'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
*/
class ReconhecimentoDePadroes extends UnitBase {
    constructor(props) {
        super(props)

        this.state = {
            availablePages: 6
        }
    }

    renderTitle = () => {
        return (<h1>4. Reconhecimento de Padrões</h1>)
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
                    <Problemas />
                )
            default:
                return null
        }
    }

    render() {
        return (
            <Fragment>
                <ContentContainer>
                    {this.renderTitle()}
                    {this.renderPage()}
                </ContentContainer>
                {this.loadPagination()}
            </Fragment>
        )
    }
}

export default ReconhecimentoDePadroes
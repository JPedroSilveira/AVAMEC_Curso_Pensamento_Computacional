import React from 'react'
import UnitBase from '../../generics/unit_base'
import AplicacaoInterativa from './aplicacao_interativa'
import Conceituacao from './conceituacao'
import AtividadeAvaliativaUm from './atividade_avaliativa_um'
import TomandoDecisoes from './tomando_decisoes'
import RepeticoesDeAtividades from './repeticoes_de_atividades'
import AtividadeAvaliativaDois from './atividade_avaliativa_dois'
import AplicacoesParte1 from './aplicacoes/parte_1'
import AplicacoesParte2 from './aplicacoes/parte_2'
import AplicacoesParte3 from './aplicacoes/parte_3'
import AplicacoesParte4 from './aplicacoes/parte_4'
import AtividadeAvaliativaTres from './atividade_avaliativa_tres'
import Recomendacoes from './recomendacoes'
import AtividadeAvaliativaQuatro from './atividade_avaliativa_quatro'
import Problemas from './problemas'
import AtividadeComplementar from './atividade_complementar'
import ParaSaberMais from './para_saber_mais'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class Algoritmos extends UnitBase {
    constructor(props) {
        super(props)

        this.state = {
            availablePages: 16
        }
    }

    renderTitle = () => {
        return (<h1>5. Algoritmos</h1>)
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
                    <AtividadeAvaliativaUm unitId={this.props.id}/>
                )
            case "4":
                return (
                    <TomandoDecisoes />
                )
            case "5":
                return (
                    <RepeticoesDeAtividades  />
                )    
            case "6":
                return (
                    <AtividadeAvaliativaDois unitId={this.props.id} />
                )
            case "7":
                return (
                    <AplicacoesParte1 />
                )
            case "8":
                return (
                    <AplicacoesParte2 />
                )
            case "9":
                return (
                    <AplicacoesParte3 />
                )
            case "10":
                return (
                    <AplicacoesParte4 />
                )
            case "11":
                return (
                    <AtividadeAvaliativaTres unitId={this.props.id} />
                )
            case "12":
                return (
                    <Recomendacoes />
                )
            case "13":
                return (
                    <AtividadeAvaliativaQuatro unitId={this.props.id} />
                )
            case "14":
                return (
                    <Problemas unitId={this.props.id} />
                )
            case "15":
                return (
                    <AtividadeComplementar unitId={this.props.id} />
                )
            case "16":
                return(
                    <ParaSaberMais />
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

export default Algoritmos
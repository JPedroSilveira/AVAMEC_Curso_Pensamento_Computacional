import React from 'react'
import ConteudoGenerico from '../../generics/conteudo_generico'
import Conceituacao from './conceituacao'
import Aplicacoes from './aplicacoes'
import AtividadeAvaliativa1 from './atividade_avaliativa_1'
import Problemas1 from './problemas_1'
import AtividadeComplementar1 from './atividade_complementar_1'
import AssuntosCorrelatos from './assuntos_correlatos'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class ReconhecimentoDePadroes extends ConteudoGenerico {
    constructor(props) {
        super(props)

        this.state = {
            availablePages: 6
        }
    }

    /*Retorna o título da unidade.*/
    carregarTitulo = () => {
        return (<h1>5. Reconhecimento de Padrões</h1>)
    }

    /*Carrega o conteúdo que deve ser exibido na unidade atual.*/
    carregarPaginaAtual = () => {
        switch (this.state.paginaAberta) {
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
                    <AtividadeAvaliativa1 idUnidade={this.props.id} />
                )
            case "4":
                return (
                    <Problemas1/>
                )
            case "5":
                return (
                    <AtividadeComplementar1 idUnidade={this.props.id} />
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
            <div className="aprc-container">
                {this.carregarTitulo()}
                {this.carregarPaginaAtual()}
                {this.loadPagination()}
                {this.loadUnitController()}
            </div>
        )
    }
}

export default ReconhecimentoDePadroes
import React from 'react'
import ConteudoGenerico from '../../generics/conteudo_generico'
import ConceituacaoParte1 from './conceituacao/parte_1'
import ConceituacaoParte2 from './conceituacao/parte_2'
import ConceituacaoParte3 from './conceituacao/parte_3'
import AplicacoesParte1 from './aplicacoes/parte_1'
import AplicacoesParte2 from './aplicacoes/parte_2'
import Recomendacoes from './recomendacoes'
import AtividadeAvaliativa1 from './atividade_avaliativa_1'
import ProblemasPropostos from './problemas_propostos'
import TopicosAvancados from './topicos_avancados'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class Algoritmos extends ConteudoGenerico {
    constructor(props) {
        super(props)

        this.state = {
            paginasDisponiveis: 9
        }
    }

    /*Retorna o título da unidade.*/
    carregarTitulo = () => {
        return (<h1>6. Algoritmos</h1>)
    }

    /*Carrega o conteúdo que deve ser exibido na unidade atual.*/
    carregarPaginaAtual = () => {
        switch (this.state.paginaAberta) {
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
                    <AtividadeAvaliativa1 idUnidade={this.props.id}/>
                )
            case "8":
                return (
                    <ProblemasPropostos idUnidade={this.props.id}/>
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
            <div className="aprc-container">
                {this.carregarTitulo()}
                {this.carregarPaginaAtual()}
                {this.carregarPaginacao()}
                {this.carregarMudarUnidade()}
            </div>
        )
    }
}

export default Algoritmos
import React from 'react'
import ConteudoGenerico from '../../generics/conteudo_generico'
import Conceituacao from './conceituacao'
import Aplicacoes from './aplicacoes'
import AssuntosCorrelatos from './assuntos_correlatos'
import AtividadeAvaliativa1 from './atividade_avaliativa_1'
import Problemas1 from './problemas_1'
import ComplementaryActivityOne from './complementary_activity_one'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class Abstracao extends ConteudoGenerico {
    constructor(props) {
        super(props)
        
        this.state = {
            availablePages: 5
        }
    }

    /*Retorna o título da unidade.*/
    carregarTitulo = () => {
        return (<h1>4. Abstração</h1>)
    }

    /*Carrega o conteúdo que deve ser exibido na unidade atual.*/
    carregarPaginaAtual = () => {
        switch(this.state.paginaAberta){
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
                    <div>
                        <AssuntosCorrelatos />
                        <AtividadeAvaliativa1 idUnidade={this.props.id}/>
                    </div>
                )
            case "4":
                return (
                    <Problemas1 idUnidade={this.props.id}/>
                )
            case "5":
                return (
                    <ComplementaryActivityOne unitId={this.props.id}/>
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

export default Abstracao
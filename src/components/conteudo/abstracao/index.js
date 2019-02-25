import React from 'react'
import ConteudoGenerico from '../utils/conteudo_generico'
import Conceituacao from './conceituacao'
import Aplicacoes from './aplicacoes'
import AssuntosCorrelatos from './assuntos_correlatos'
import AtividadeAvaliativa1 from './atividade_avaliativa_1'
import Problemas1 from './problemas_1'
import AtividadeComplementar1 from './atividade_complementar_1'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
*/
class Abstracao extends ConteudoGenerico {
    constructor(props) {
        super(props)
        
        this.state = {
            paginasDisponiveis: 5
        }
    }

    /*Retorna o título da unidade*/
    carregarTitulo = () => {
        return (<h1>4. Abstração</h1>)
    }

    /*Carrega o conteúdo que deve ser exibido na unidade atual*/
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
                    <AtividadeComplementar1 idUnidade={this.props.id}/>
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

export default Abstracao
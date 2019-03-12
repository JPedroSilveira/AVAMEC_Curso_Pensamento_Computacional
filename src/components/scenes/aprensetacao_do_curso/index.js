import React from 'react'
import ConteudoGenerico from '../../generics/conteudo_generico'
import Texto1 from './texto_1'
import AtividadeAvaliativa1 from './atividade_avaliativa_1'
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

    /*Retorna o título da unidade.*/
    carregarTitulo = () => {
        return (<h1>1. Apresentação do Curso</h1>)
    }

    /*Carrega o conteúdo que deve ser exibido na unidade atual.*/
    carregarPaginaAtual = () => {
        switch(this.state.paginaAberta){
            case "1":
                return (
                    <Texto1 />
                )
            case "2":
                return (
                    <div>
                        <AtividadeAvaliativa1 idUnidade={this.props.id} />
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
                {this.carregarTitulo()}
                {this.carregarPaginaAtual()}
                {this.loadPagination()}
                {this.loadUnitController()}
            </div>
        )
    }
}

export default ApresentacaoDoCurso

import React from 'react'
import ApresentacaoDoCurso from './aprensetacao_do_curso'
import IntroducaoAoPensamentoComputacional from './introducao_ao_pensamento_computacional'
import Decomposicao from './decomposicao'
import Abstracao from './abstracao'
import ReconhecimentoDePadroes from './reconhecimento_de_padroes'
import Algoritmos from './algoritmos'
import './styles.css'

/*IDs das unidades: .*/
const APRESENTACAO_CURSO = "apresentacao_do_curso"
const INTRO_PENSAMENTO_COMP = "introducao_ao_pensamento_computacional"
const DECOMPOSICAO = "decomposicao"
const ABSTRACAO = "abstracao"
const RECONHECIMENTO_DE_PADROES = "reconhecimento_de_padroes"
const ALGORITMOS = "algoritmos"

class Conteudo extends React.Component {
    constructor() {
        super()

        /*Recupera a unidade aberta no localStorage e salva no state.*/
        this.state = {
            unidadeAberta: localStorage.getItem("UnidadeAberta")
        }
    }

    /*Seleciona a unidade que deve ser carregada conforme o identificador da unidadeAberta.*/
    CarregarUnidadeAtual = () => {
        switch(this.state.unidadeAberta){
            case APRESENTACAO_CURSO:
                return (<ApresentacaoDoCurso id={APRESENTACAO_CURSO} />)
            case INTRO_PENSAMENTO_COMP:
                return (<IntroducaoAoPensamentoComputacional id={INTRO_PENSAMENTO_COMP} />)
            case DECOMPOSICAO:
                return (<Decomposicao id={DECOMPOSICAO} />)
            case ABSTRACAO:
                return (<Abstracao id={ABSTRACAO} />)
            case RECONHECIMENTO_DE_PADROES:
                return (<ReconhecimentoDePadroes id={RECONHECIMENTO_DE_PADROES}/>)
            case ALGORITMOS:
                return (<Algoritmos id={ALGORITMOS}/>)
            default:
                return null
        }  
    }

    render() {
        return (
            <div className="simple-text">
                {this.CarregarUnidadeAtual()}
            </div>
        )
    }
}

export default Conteudo
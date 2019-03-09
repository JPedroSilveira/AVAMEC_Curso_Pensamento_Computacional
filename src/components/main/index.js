import React from 'react'
import Menu from '../generics/menu'
import Header from '../generics/header'
import localStorageUtils from '../../utils/localStorageUtils'
import unitIds from '../../constants/unitIds'

import ApresentacaoDoCurso from '../scenes/aprensetacao_do_curso'
import IntroducaoAoPensamentoComputacional from '../scenes/introducao_ao_pensamento_computacional'
import Decomposicao from '../scenes/decomposicao'
import Abstracao from '../scenes/abstracao'
import ReconhecimentoDePadroes from '../scenes/reconhecimento_de_padroes'
import Algoritmos from '../scenes/algoritmos'
import './styles.css'

class Conteudo extends React.Component {
    constructor() {
        super()

        /*Recupera a unidade aberta no localStorage e salva no state.*/
        this.state = {
            unidadeAberta: localStorageUtils.getOpenUnit()
        }
    }

    /*Seleciona a unidade que deve ser carregada conforme o identificador da unidadeAberta.*/
    CarregarUnidadeAtual = () => {
        switch(this.state.unidadeAberta){
            case unitIds.APRESENTACAO_CURSO:
                return (<ApresentacaoDoCurso id={unitIds.APRESENTACAO_CURSO} />)
            case unitIds.INTRO_PENSAMENTO_COMP:
                return (<IntroducaoAoPensamentoComputacional id={unitIds.INTRO_PENSAMENTO_COMP} />)
            case unitIds.DECOMPOSICAO:
                return (<Decomposicao id={unitIds.DECOMPOSICAO} />)
            case unitIds.ABSTRACAO:
                return (<Abstracao id={unitIds.ABSTRACAO} />)
            case unitIds.RECONHECIMENTO_DE_PADROES:
                return (<ReconhecimentoDePadroes id={unitIds.RECONHECIMENTO_DE_PADROES}/>)
            case unitIds.ALGORITMOS:
                return (<Algoritmos id={unitIds.ALGORITMOS}/>)
            default:
                return null
        }  
    }

    render() {
        return (
            <div>
                <Menu/>
                <Header/>
                {this.CarregarUnidadeAtual()}
            </div>
        )
    }
}

export default Conteudo
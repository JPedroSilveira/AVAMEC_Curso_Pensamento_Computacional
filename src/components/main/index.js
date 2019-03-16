import React from 'react'
import Menu from '../generics/menu'
import Header from '../generics/header'
import localStorageUtils from '../../utils/localStorageUtils'
import unitId from '../../constants/unitId'

import ApresentacaoDoCurso from '../scenes/aprensetacao_do_curso'
import IntroducaoAoPensamentoComputacional from '../scenes/introducao_ao_pensamento_computacional'
import Decomposicao from '../scenes/decomposicao'
import Abstracao from '../scenes/abstracao'
import ReconhecimentoDePadroes from '../scenes/reconhecimento_de_padroes'
import Algoritmos from '../scenes/algoritmos'
import './styles.css'

class Main extends React.Component {
    constructor() {
        super()

        this.state = {
            openUnitId: localStorageUtils.getOpenUnit()
        }
    }

    LoadUnit = () => {
        switch (this.state.openUnitId){
            case unitId.APRESENTACAO_CURSO:
                return (<ApresentacaoDoCurso id={unitId.APRESENTACAO_CURSO} />)
            case unitId.INTRO_PENSAMENTO_COMP:
                return (<IntroducaoAoPensamentoComputacional id={unitId.INTRO_PENSAMENTO_COMP} />)
            case unitId.DECOMPOSICAO:
                return (<Decomposicao id={unitId.DECOMPOSICAO} />)
            case unitId.ABSTRACAO:
                return (<Abstracao id={unitId.ABSTRACAO} />)
            case unitId.RECONHECIMENTO_DE_PADROES:
                return (<ReconhecimentoDePadroes id={unitId.RECONHECIMENTO_DE_PADROES}/>)
            case unitId.ALGORITMOS:
                return (<Algoritmos id={unitId.ALGORITMOS}/>)
            default:
                return null
        }  
    }

    render() {
        return (
            <div>
                <Menu/>
                <Header/>
                <div className="main-content">
                    <div className="unit-container">
                        {this.LoadUnit()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
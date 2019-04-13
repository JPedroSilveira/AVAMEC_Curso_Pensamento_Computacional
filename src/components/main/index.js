import React from 'react'
import Menu from '../generics/menu'
import Header from '../generics/header'
import localStorageUtils from '../../utils/localStorageUtils'
import UnitId from '../../constants/unitId'

import ApresentacaoDoCurso from '../scenes/aprensetacao_do_curso'
import IntroducaoAoPensamentoComputacional from '../scenes/introducao_ao_pensamento_computacional'
import Decomposicao from '../scenes/decomposicao'
import Abstracao from '../scenes/abstracao'
import ReconhecimentoDePadroes from '../scenes/reconhecimento_de_padroes'
import Algoritmos from '../scenes/algoritmos'
import PensamentoComputacionalEInterdisciplinaridade from '../scenes/pensamento_computacional_e_interdisciplinaridade'
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
            case UnitId.APRESENTACAO_CURSO:
                return (<ApresentacaoDoCurso id={UnitId.APRESENTACAO_CURSO} />)
            case UnitId.INTRO_PENSAMENTO_COMP:
                return (<IntroducaoAoPensamentoComputacional id={UnitId.INTRO_PENSAMENTO_COMP} />)
            case UnitId.DECOMPOSICAO:
                return (<Decomposicao id={UnitId.DECOMPOSICAO} />)
            case UnitId.ABSTRACAO:
                return (<Abstracao id={UnitId.ABSTRACAO} />)
            case UnitId.RECONHECIMENTO_DE_PADROES:
                return (<ReconhecimentoDePadroes id={UnitId.RECONHECIMENTO_DE_PADROES}/>)
            case UnitId.ALGORITMOS:
                return (<Algoritmos id={UnitId.ALGORITMOS}/>)
            case UnitId.PENSAMENTO_COMPUTACIONAL_E_INTERDISCIPLINARIDADE:
                return (<PensamentoComputacionalEInterdisciplinaridade id={UnitId.PENSAMENTO_COMPUTACIONAL_E_INTERDISCIPLINARIDADE}/>)
            default:
                return null
        }  
    }

    render() {
        return (
            <div>
                <Menu />
                <Header />
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
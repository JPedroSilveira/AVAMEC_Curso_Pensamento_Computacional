import React from 'react'
import Menu from '../generics/menu'
import Header from '../generics/header'
import localStorageUtils from '../../utils/localStorageUtils'
import UnitId from '../../constants/UnitId'
import UnitData from '../generics/unit_data'

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
            default:
                return null
        }  
    }

    render() {
        return (
            <div>
                <Menu />
                <Header />
                <UnitData unitId={this.state.openUnitId}/>
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
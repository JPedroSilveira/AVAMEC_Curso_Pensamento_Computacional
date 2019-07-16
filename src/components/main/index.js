import React from 'react'
import localStorageUtils from '../../utils/localStorageUtils'
import UnitId from '../../constants/unitId'

import IntroducaoAoPensamentoComputacional from '../scenes/introducao_ao_pensamento_computacional'
import Decomposicao from '../scenes/decomposicao'
import Abstracao from '../scenes/abstracao'
import ReconhecimentoDePadroes from '../scenes/reconhecimento_de_padroes'
import Algoritmos from '../scenes/algoritmos'
import PensamentoComputacionalInterdisciplinaridadeECooperacao from '../scenes/pensamento_computacional_interdisciplinaridade_e_cooperacao'
import Conclusao from '../scenes/conclusao'
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
            case UnitId.PENSAMENTO_COMPUTACIONAL_INTERDISCIPLINARIDADE_E_COOPERACAO:
                return (<PensamentoComputacionalInterdisciplinaridadeECooperacao id={UnitId.PENSAMENTO_COMPUTACIONAL_INTERDISCIPLINARIDADE_E_COOPERACAO}/>)
            case UnitId.CONCLUSAO:
                return (<Conclusao id={UnitId.CONCLUSAO} />)
            default:
                return null
        }  
    }

    render() {
        return (
            <div className="main-content">
                <div className="unit-container">
                    {this.LoadUnit()}
                </div>
            </div>
        )
    }
}

export default Main
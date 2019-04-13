import UnidId from '../constants/unitId'
import UnitName from '../constants/unitName';
import UnitState from '../constants/unitState'

class UnitDataServices {

    getUnitStateFromCallback = eventReturn => {
        if (eventReturn.detail.status === 200) {
            if (eventReturn.detail.data.concluido) {
                return UnitState.COMPLETED
            } else {
                return UnitState.NOT_COMPLETED
            }
        }
    }

    getUnitStateName = unitState => {
        if (unitState === UnitState.COMPLETED) {
            return "concluída."
        } else {
            return "em andamento."
        }
    }

    getUnitNameById = unit => {
        switch(unit){
            case UnidId.APRESENTACAO_CURSO:
                return UnitName.APRESENTACAO_CURSO
            case UnidId.INTRO_PENSAMENTO_COMP:
                return UnitName.INTRO_PENSAMENTO_COMP
            case UnidId.DECOMPOSICAO:
                return UnitName.DECOMPOSICAO
            case UnidId.ABSTRACAO:
                return UnitName.ABSTRACAO
            case UnidId.RECONHECIMENTO_DE_PADROES:
                return UnitName.RECONHECIMENTO_DE_PADROES
            case UnidId.ALGORITMOS:
                return UnitName.ALGORITMOS
            default:
                throw Error("Unit not defined!")
        }
    }
}

const unitDataServices = new UnitDataServices()

export default unitDataServices


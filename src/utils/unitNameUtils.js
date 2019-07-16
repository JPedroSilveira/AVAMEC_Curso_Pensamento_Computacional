import UnitName from '../constants/unitName'
import UnitId from '../constants/unitId'

class UnitNameUtils {
    getUnitName = (unitId) => {
        switch(unitId){
            case UnitId.INTRO_PENSAMENTO_COMP:
                return UnitName.INTRO_PENSAMENTO_COMP
            case UnitId.DECOMPOSICAO:
                return UnitName.DECOMPOSICAO
            case UnitId.ABSTRACAO:
                return UnitName.ABSTRACAO
            case UnitId.RECONHECIMENTO_DE_PADROES:
                return UnitName.RECONHECIMENTO_DE_PADROES
            case UnitId.ALGORITMOS:
                return UnitName.ALGORITMOS
            case UnitId.PENSAMENTO_COMPUTACIONAL_INTERDISCIPLINARIDADE_E_COOPERACAO:
                return UnitName.PENSAMENTO_COMPUTACIONAL_INTERDISCIPLINARIDADE_E_COOPERACAO
            case UnitId.CONCLUSAO:
                return UnitName.CONCLUSAO
            default:
                return "NaN"
        }
    }

}

const unitNameUtils = new UnitNameUtils()

export default unitNameUtils


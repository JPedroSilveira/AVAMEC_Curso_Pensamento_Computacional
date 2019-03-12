import eventNames from '../constants/avaMECApiEvents'

class AvaMecApi {   
    constructor(){
        this.api = new window.BridgeRestApi()
    }
    
    getCourseData = (callbackFunction) => {
        window.addEventListener(eventNames.COURSE_DATA, callbackFunction, false)

        this.api.obterDadosCurso()  
    }

    closeGetCourseData = (callbackFunction) => {
        window.removeEventListener(eventNames.COURSE_DATA, callbackFunction, false)
    }

    changeUnit = (unitId) => {
        this.api.obterUnidade(unitId)  
    }
    
    getIfNextUnitExist = (unit, callbackFunction) => {        
        window.addEventListener(eventNames.GET_IF_NEXT_UNIT_EXIST, callbackFunction, false)

        this.api.obterSeExisteUnidadeAnterior(unit)
    }

    closeGetIfNextUnitExist = (callbackFunction) => {
        window.removeEventListener(eventNames.GET_IF_NEXT_UNIT_EXIST, callbackFunction, false)
    }

    getIfPreviousUnitExist = (unit, callbackFunction) => {
        window.addEventListener(eventNames.GET_IF_PREVIOUS_UNIT_EXIST, callbackFunction, false)

        this.api.obterSeExisteProximaUnidade(unit)
    }

    closeGetIfPreviousUnitExist = (callbackFunction) => {
        window.removeEventListener(eventNames.GET_IF_PREVIOUS_UNIT_EXIST, callbackFunction, false)
    }

    getPreviousUnit = (unit) => {
        this.api.obterUnidadeAnterior(unit)
    }

    getNextUnit = (unit) => {
        this.api.obterProximaUnidade(unit)
    }

    saveUnitProgress = (unit, percentage) => {
        this.api.registrarPorcentagemConclusaoUnidade(unit, String(percentage))
    }

    getUnitProgress = (unit, callbackFunction) => {
        window.addEventListener(eventNames.UNIT_PROGRESS, callbackFunction, false)

        this.api.obterDadosConclusaoUnidade(unit, callbackFunction)
    }

    closeGetUnitProgress = (callbackFunction) => {
        window.removeEventListener(eventNames.UNIT_PROGRESS, callbackFunction, false)
    }
}

const avaMecApi = new AvaMecApi()

export default avaMecApi


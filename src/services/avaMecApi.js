import EventNames from '../constants/AvaMECApiEvents'
import PaginationUtils from '../utils/paginationUtils'
import AvaMECApiEvents from '../constants/AvaMECApiEvents';

class AvaMecApi {   
    constructor(){
        this.api = new window.BridgeRestApi()
    }

    getUnitConclusionData = (unit, callback) => {
        window.addEventListener(EventNames.GET_UNIT_CONCLUSION_DATA, callback, false)

        this.api.obterDadosConclusaoUnidade(unit)
    }

    closeGetUnitConclusionDataListener = callback => {
        window.removeEventListener(EventNames.GET_UNIT_CONCLUSION_DATA, callback, false)
    }
    
    getCourseData = callback => {
        window.addEventListener(EventNames.COURSE_DATA, callback, false)

        this.api.obterDadosCurso()  
    }

    closeGetCourseDataListener = callback => {
        window.removeEventListener(EventNames.COURSE_DATA, callback, false)
    }

    changeUnit = unitId => {
        this.api.obterUnidade(unitId)  
    }
    
    getIfNextUnitExist = (unit, callback) => {        
        window.addEventListener(EventNames.GET_IF_NEXT_UNIT_EXIST, callback, false)

        this.api.obterSeExisteUnidadeAnterior(unit)
    }

    closeGetIfNextUnitExistListener = callback => {
        window.removeEventListener(EventNames.GET_IF_NEXT_UNIT_EXIST, callback, false)
    }

    getIfPreviousUnitExist = (unit, callback) => {
        window.addEventListener(EventNames.GET_IF_PREVIOUS_UNIT_EXIST, callback, false)

        this.api.obterSeExisteProximaUnidade(unit)
    }

    closeGetIfPreviousUnitExistListener = callback => {
        window.removeEventListener(EventNames.GET_IF_PREVIOUS_UNIT_EXIST, callback, false)
    }

    getPreviousUnit = unit => {
        this.api.obterUnidadeAnterior(unit)
    }

    getNextUnit = unit => {
        this.api.obterProximaUnidade(unit)
    }

    saveUnitProgress = (unit, percentage) => {
        this.api.registrarPorcentagemConclusaoUnidade(unit, String(percentage))
    }

    getUnitProgress = (unit, callback) => {
        window.addEventListener(EventNames.UNIT_PROGRESS, callback, false)

        this.api.obterDadosConclusaoUnidade(unit, callback)
    }

    closeGetUnitProgressListener = (callback) => {
        window.removeEventListener(EventNames.UNIT_PROGRESS, callback, false)
    }

    saveLastPage = unit => {
        this.api.registrarUltimaPaginaAcessada(unit, PaginationUtils.getPath())
    }

    getGenericData = (id, callback) => {
        window.addEventListener(AvaMECApiEvents.GET_GENERIC_DATA, callback, false)

        this.api.obterDadosGenericos(id)
    }

    closeGenericDataListener = (callback) => {
        window.removeEventListener(AvaMECApiEvents.GET_GENERIC_DATA, callback, false)
    }

    saveGenericData = (id, data) => {
        this.api.registrarDadosGenericos(id, JSON.stringify(data))
    }
}

const avaMecApi = new AvaMecApi()

export default avaMecApi


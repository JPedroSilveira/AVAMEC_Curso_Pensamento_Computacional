import PaginationUtils from '../utils/paginationUtils'
import AvaMecApiEvents from '../constants/avaMECApiConstants.js';

class AvaMecApi {   
    constructor(){
        this.api = new window.BridgeRestApi()
    }

    getUnitConclusionData = (unit, callback) => {
        if (unit !== undefined) {
            window.addEventListener(AvaMecApiEvents.GET_UNIT_CONCLUSION_DATA, callback, false)

            this.api.obterDadosConclusaoUnidade(unit)
        }
    }

    closeGetUnitConclusionDataListener = callback => {
        window.removeEventListener(AvaMecApiEvents.GET_UNIT_CONCLUSION_DATA, callback, false)
    }
    
    getCourseData = callback => {
        window.addEventListener(AvaMecApiEvents.COURSE_DATA, callback, false)

        this.api.obterDadosCurso()  
    }

    closeGetCourseDataListener = callback => {
        window.removeEventListener(AvaMecApiEvents.COURSE_DATA, callback, false)
    }

    changeUnit = unit => {
        if (unit !== undefined) {
            this.api.obterUnidade(unit)  
        }
    }
    
    getIfNextUnitExist = (unit, callback) => {   
        if (unit !== undefined) {
            window.addEventListener(AvaMecApiEvents.GET_IF_NEXT_UNIT_EXIST, callback, false)

            this.api.obterSeExisteUnidadeAnterior(unit)
        }     
    }

    closeGetIfNextUnitExistListener = callback => {
        window.removeEventListener(AvaMecApiEvents.GET_IF_NEXT_UNIT_EXIST, callback, false)
    }

    getIfPreviousUnitExist = (unit, callback) => {
        if (unit !== undefined) {
            window.addEventListener(AvaMecApiEvents.GET_IF_PREVIOUS_UNIT_EXIST, callback, false)

            this.api.obterSeExisteProximaUnidade(unit)
        }
    }

    closeGetIfPreviousUnitExistListener = callback => {
        window.removeEventListener(AvaMecApiEvents.GET_IF_PREVIOUS_UNIT_EXIST, callback, false)
    }

    getPreviousUnit = unit => {
        if (unit !== undefined) {
            this.api.obterUnidadeAnterior(unit)
        }
    }

    getNextUnit = unit => {
        if (unit !== undefined) {
            this.api.obterProximaUnidade(unit)
        }
    }

    saveUnitProgress = (unit, percentage) => {
        if (unit !== undefined) {
            this.api.registrarPorcentagemConclusaoUnidade(unit, String(percentage))
        }
    }

    closeGetUnitProgressListener = (callback) => {
        window.removeEventListener(AvaMecApiEvents.UNIT_PROGRESS, callback, false)
    }

    saveLastPage = unit => {
        if (unit !== undefined) {
            this.api.registrarUltimaPaginaAcessada(unit, PaginationUtils.getPath())
        }
    }

    getGenericData = (id, callback) => {
        if (id !== undefined) {
            window.addEventListener(AvaMecApiEvents.GET_GENERIC_DATA, callback, false)

            this.api.obterDadosGenericos(id)
        }
    }

    closeGenericDataListener = (callback) => {
        window.removeEventListener(AvaMecApiEvents.GET_GENERIC_DATA, callback, false)
    }

    saveGenericData = (id, data) => {
        if (id !== undefined) {
            this.api.registrarDadosGenericos(id, JSON.stringify(data))
        }
    }

    getActivity = (id, callback) => {
        if (id !== undefined) {
            window.addEventListener(AvaMecApiEvents.GET_ACTIVITY, callback, false)

            this.api.obterRespostaAtividade(id)
        }
    }

    closeGetActivity = (callback) => {
        window.removeEventListener(AvaMecApiEvents.GET_ACTIVITY, callback, false)
    }

    saveActivity = (activity, callback) => {
        if (activity !== undefined) {
            window.addEventListener(AvaMecApiEvents.REGISTER_ACTIVITY, callback, false)

            this.api.registrarRespostaAtividade(activity)
        }
    }

    closeSaveActivity = (callback) => {
        window.removeEventListener(AvaMecApiEvents.REGISTER_ACTIVITY, callback, false)
    }
}

const avaMecApi = new AvaMecApi()

export default avaMecApi


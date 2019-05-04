import PaginationUtils from '../utils/paginationUtils'
import AvaMecApiEvents from '../constants/avaMECApiEvents'
import apiErrorMessages from '../constants/apiErrorMessages'

class AvaMecApiServices {
    constructor() {
        this.api = new window.BridgeRestApi()
    }

    getUnitConclusionData = (unit, callback) => {
        if (unit !== undefined) {
            window.addEventListener(AvaMecApiEvents.GET_UNIT_CONCLUSION_DATA, callback, false)

            try {
                this.api.obterDadosConclusaoUnidade(unit)
            } catch {
                console.log(apiErrorMessages.GET_UNIT_CONCLUSION_DATA)
            }
        }
    }

    closeGetUnitConclusionDataListener = callback => {
        window.removeEventListener(AvaMecApiEvents.GET_UNIT_CONCLUSION_DATA, callback, false)
    }

    getCourseData = callback => {
        window.addEventListener(AvaMecApiEvents.COURSE_DATA, callback, false)

        try {
            this.api.obterDadosCurso()
        } catch {
            console.log(apiErrorMessages.COURSE_DATA)
        }
    }

    closeGetCourseDataListener = callback => {
        window.removeEventListener(AvaMecApiEvents.COURSE_DATA, callback, false)
    }

    changeUnit = unit => {
        if (unit !== undefined) {
            try {
                this.api.obterUnidade(unit)
            } catch {
                console.log(apiErrorMessages.NEXT_UNIT)
            }
        }
    }

    getIfNextUnitExist = (unit, callback) => {
        if (unit !== undefined) {
            window.addEventListener(AvaMecApiEvents.GET_IF_NEXT_UNIT_EXIST, callback, false)

            try {
                this.api.obterSeExisteUnidadeAnterior(unit)
            } catch {
                console.log(apiErrorMessages.GET_IF_NEXT_UNIT_EXIST)
            }
        }
    }

    closeGetIfNextUnitExistListener = callback => {
        window.removeEventListener(AvaMecApiEvents.GET_IF_NEXT_UNIT_EXIST, callback, false)
    }

    getIfPreviousUnitExist = (unit, callback) => {
        if (unit !== undefined) {
            window.addEventListener(AvaMecApiEvents.GET_IF_PREVIOUS_UNIT_EXIST, callback, false)

            try {
                this.api.obterSeExisteProximaUnidade(unit)
            } catch {
                console.log(apiErrorMessages.GET_IF_PREVIOUS_UNIT_EXIST)
            }
        }
    }

    closeGetIfPreviousUnitExistListener = callback => {
        window.removeEventListener(AvaMecApiEvents.GET_IF_PREVIOUS_UNIT_EXIST, callback, false)
    }

    getPreviousUnit = unit => {
        if (unit !== undefined) {
            try {
                this.api.obterUnidadeAnterior(unit)
            } catch {
                console.log(apiErrorMessages.GET_PREVIOUS_UNIT)
            }
        }
    }

    getNextUnit = unit => {
        if (unit !== undefined) {
            try {
                this.api.obterProximaUnidade(unit)
            } catch {
                console.log(apiErrorMessages.GET_NEXT_UNIT)
            }
        }
    }

    saveUnitProgress = (unit, percentage) => {
        if (unit !== undefined) {
            try {
                this.api.registrarPorcentagemConclusaoUnidade(unit, String(percentage))
            } catch {
                console.log(apiErrorMessages.SAVE_UNIT_PROGRESS)
            }
        }
    }

    closeGetUnitProgressListener = callback => {
        window.removeEventListener(AvaMecApiEvents.UNIT_PROGRESS, callback, false)
    }

    saveLastPage = unit => {
        if (unit !== undefined) {
            try {
                this.api.registrarUltimaPaginaAcessada(unit, PaginationUtils.getPath())
            } catch {
                console.log(apiErrorMessages.SAVE_LAST_PAGE)
            }
        }
    }

    getGenericData = (id, callback) => {
        if (id !== undefined) {
            window.addEventListener(AvaMecApiEvents.GET_GENERIC_DATA, callback, false)

            try {
                this.api.obterDadosGenericos(id)
            } catch {}
        }
    }

    closeGenericDataListener = callback => {
        window.removeEventListener(AvaMecApiEvents.GET_GENERIC_DATA, callback, false)
    }

    saveGenericData = (id, data) => {
        if (id !== undefined) {
            try {
                this.api.registrarDadosGenericos(id, JSON.stringify(data))
            } catch {
                console.log(apiErrorMessages.SAVE_GENERIC_DATA)
            }
        }
    }

    getActivity = (id, callback) => {
        if (id !== undefined) {
            window.addEventListener(AvaMecApiEvents.GET_ACTIVITY, callback, false)

            try {
                this.api.obterRespostaAtividade(id)
            } catch { }
        }
    }

    closeGetActivity = callback => {
        window.removeEventListener(AvaMecApiEvents.GET_ACTIVITY, callback, false)
    }

    saveActivity = (activity, callback) => {
        if (activity !== undefined) {
            window.addEventListener(AvaMecApiEvents.REGISTER_ACTIVITY, callback, false)

            try {
                this.api.registrarRespostaAtividade(activity)
            } catch {
                console.log(apiErrorMessages.SAVE_ACTIVITY)
            }
        }
    }

    closeSaveActivity = callback => {
        window.removeEventListener(AvaMecApiEvents.REGISTER_ACTIVITY, callback, false)
    }
}

const avaMecApiServices = new AvaMecApiServices()

export default avaMecApiServices


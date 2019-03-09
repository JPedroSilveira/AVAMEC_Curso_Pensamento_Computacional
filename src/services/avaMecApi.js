import eventNames from '../constants/avaMECApiEvents'

class AvaMecApi {   
    constructor(){
        this.api = new window.BridgeRestApi()
    }
    
    getCourseData = (returnFunction) => {
        window.addEventListener(eventNames.COURSE_DATA, returnFunction, false)

        this.api.obterDadosCurso()  
    }

    closeCourseData = (callFunction) => {
        window.removeEventListener(eventNames.COURSE_DATA, callFunction, false)
    }

    changeUnit = (unitId) => {
        this.api.obterUnidade(unitId)  
    }
}

const avaMecApi = new AvaMecApi()

export default avaMecApi


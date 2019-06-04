import AvaMecApiServices from './avaMecApiServices'

class PaginationServices {

    constructor(){
        this.unit = null;
    }

    nextUnit = unit => {
        this.unit = unit;
        AvaMecApiServices.getUnitConclusionData(unit, this.nextUnitCallback)
    }

    nextUnitCallback = info => {
        if (info.detail.status === 200) {
            if (info.detail.data.unidade !== undefined && info.detail.data.unidade.permitePorcentagem) {
                if (String(info.detail.data.porcentagemConclusao) < "100") {
                    AvaMecApiServices.saveUnitProgress(this.unit, 100)
                }
            }
        }

        AvaMecApiServices.closeGetUnitConclusionDataListener(this.nextUnitCallback)

        AvaMecApiServices.getNextUnit(this.unit)
    }

    previousUnit = unit => {
        AvaMecApiServices.getPreviousUnit(unit)
    }

}

const paginationServices = new PaginationServices()

export default paginationServices
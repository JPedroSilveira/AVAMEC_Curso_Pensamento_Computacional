import ActivityConstants from '../constants/activityConstants'

class AvaMecUtils {

    getGenericId(unitId, genericId, number){
        return unitId 
            + ActivityConstants.SEPARADOR 
            + genericId 
            + (number !== undefined ? 
                ActivityConstants.SEPARADOR + number : "")
    }

}

const avaMecUtils = new AvaMecUtils()

export default avaMecUtils


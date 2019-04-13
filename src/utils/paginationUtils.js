import AvaMECApiConsts from '../constants/avaMECApiConstants'
import LocalStorageUtils from './localStorageUtils'

class PaginationUtils {

    getPath(){
        return AvaMECApiConsts.FIRST_PATH 
               + LocalStorageUtils.getOpenUnit()  
               + AvaMECApiConsts.SECOND_PATH 
               + LocalStorageUtils.getOpenPage() 
               + AvaMECApiConsts.FINISH_OF_PATH
    }

}

const paginationUtils = new PaginationUtils()

export default paginationUtils


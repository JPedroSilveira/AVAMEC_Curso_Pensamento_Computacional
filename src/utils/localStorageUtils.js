import LS_KEYS from '../constants/localStorageKeys'

class LocalStorageUtils {
    get(key) {
        return localStorage.getItem(key)
    }

    set(key, value) {
        if (!key || !value) {
            throw Error("Invalid Key or Value!")
        } else {
            return localStorage.setItem(key, value)
        } 
    }

    getOpenPage() {
        return this.get(LS_KEYS.OPEN_PAGE)
    }

    setOpenPage(page) {
        this.set(LS_KEYS.OPEN_PAGE, page)
    }

    getOpenUnit() {
        return this.get(LS_KEYS.OPEN_UNIT)
    }

    setOpenUnit(unit) {
        this.set(LS_KEYS.OPEN_UNIT, unit)
    }

}

const localStorageUtils = new LocalStorageUtils()

export default localStorageUtils


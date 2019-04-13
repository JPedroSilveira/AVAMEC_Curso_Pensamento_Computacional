class ListUtils {

    shuffle(list){
        return list.sort(() => (Math.round(Math.random()) - 0.5))
    }

}

const listUtils = new ListUtils()

export default listUtils


export const getIntersectionInArray = (array = []) => {
    let IntersectionArray = []

    const countEachEl = array.flat().reduce((obj = {}, el) => {
        if (Object.keys(obj).includes(`${el}`)) {
            obj[el]++
            return obj
        } 
        obj[el] = 1
        return obj
    }, {})
    
    Object.keys(countEachEl).forEach(el => {
        if (countEachEl[el] > 1) {
            IntersectionArray.push(el)
        }
    })
    return IntersectionArray
}
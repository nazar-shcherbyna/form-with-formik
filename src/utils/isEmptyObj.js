export const isEmptyObject = (obj = {}) => {
    if (typeof obj === 'object' && !Array.isArray(obj) && (obj !== null)) {
        if (Object.keys(obj).length === 0) {
            return true
        }
        const recursion = (obj) => {
            for (const key in obj) {
                if (Array.isArray(obj[key]) && obj[key].length > 0) return false
                if (Array.isArray(obj[key]) && obj[key].length === 0) return true
                if ((typeof obj[key] === 'object') && !Array.isArray(obj[key]) && (obj[key] !== null)) {
                    return recursion(obj[key])
                }
                return true
            }
        }
        return recursion(obj)
    } 
    return 'Your variable it isn`t {}'
}
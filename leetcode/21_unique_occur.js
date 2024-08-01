

var uniqueOccurrences = function(arr) {
    const countMap = new Map()

    for ( const num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1 )
    }

    const conutSet = new Set()

    for (const count of countMap.values()) {
        if (conutSet.has(count)) {
            return false
        }
        conutSet.add(count)
    }
    return true
};
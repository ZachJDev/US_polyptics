module.exports = weave = (seedArray1, seedArray2) => {
    // If an array doesn't exist (i.e. if the regExp didn't match anything), use an empty array.
    let array1 = seedArray1 ?? []
    let array2 = seedArray2 ?? []
    const final = [] // Final to be joined and returned.
    for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
        //As long as words still exist in the array, push it to the final array.
        if (array1[i]) final.push(array1[i])
        if (array2[i]) final.push(array2[i])
    }
    return final.join('')
}
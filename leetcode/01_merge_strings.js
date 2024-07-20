var mergeAlternately = function(word1, word2) {
    let merged = ""
    let i = 0
    let j = 0

    while (i < word1.length && j < word2.length){
        merged += word1[i]
        merged += word2[j]
        i++
        j++

        //add remainder of word1
        while (i < word1.length){
            merged += word1[i]
            i++
        }
        while (k < word2.length){
            merged += word2[j]
            j++

        }
        
        return merged

    }
}
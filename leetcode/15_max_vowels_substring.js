
var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])

    let currentVowelsCount = 0, maxVowelsCount = 0

    //initial window
    for(let i = 0; i < k; i++){
        if(vowels.has(s[i])) currentVowelsCount++
    }
    maxVowelsCount = currentVowelsCount

    for(let i = k; i < s.length; i++){
        if(vowels.has(s[i])) currentVowelsCount++
        if(vowels.has(s[i-k])) currentVowelsCount--

        maxVowelsCount = Math.max(maxVowelsCount, currentVowelsCount)
    }

    return maxVowelsCount
};
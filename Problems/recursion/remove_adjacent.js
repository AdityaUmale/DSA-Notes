// iterative 

function removeAdjDup(inputString){
    let result = ""
    for (let i = 0; i < inputString.length; i++) {
        if (i === inputString.length - 1 || inputString[i] !== inputString[i+1]){
            result += inputString[i]
        }
    }
    return result
}

// recursive 

function recursiveRAD(inputString){

    if(inputString.length <= 1){
        return inputString
    }

    if (inputString[0] === inputString[1]){
        return recursiveRAD(inputString.substring(1))
    } else {
        return recursiveRAD(inputString[0] + recursiveRAD(inputString.substring(1)))
    }
}
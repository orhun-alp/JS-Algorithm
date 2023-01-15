export const firstNonRepeating = (strng) => {
    const str = strng.toLowerCase()

    let returnValue = ""

    for(let i=0; i<str.length; i++){
        let itemInTheLoop = str[i]
        let newStr = str.slice(0,i) + str.slice(i+1)

        if(returnValue === "" && newStr.indexOf(itemInTheLoop) === -1){
            returnValue = itemInTheLoop
        }
    }

    return returnValue === "" ? "none" : returnValue
}
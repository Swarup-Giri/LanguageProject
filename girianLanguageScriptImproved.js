function rCD(input, value = 1) {
    if(input.length<=1)
            return input;
        if(input[0]==input[1])
            return rCD(input.substring(value));
        else
            return input[0] + rCD(input.substring(value));
}
function translate(text = "", returnType = false) {
    var returnText = text
    returnText = returnText.replaceAll(".", " . ").replaceAll(",", " , ").replaceAll("!", " ! ").replaceAll("?", " ? ").replaceAll(":", " : ").replaceAll(";", " ; ").replaceAll("\"", " \" ").replaceAll("\'", " \' ")
    returnText = returnText.split(" ")
    for (var i = 0; i < returnText.length; i++) {
        /*if (i < returnText.length-1) {
            if (returnText[i + 1].length < 5) {
                returnText[i] = returnText[i] + returnText[i + 1]
                delete returnText[i + 1]
            }
        }*/
        returnText[i] = translateIndividual(returnText[i])
        
    }
    returnText = returnText.join(" ").replaceAll(" . ", ".").replaceAll(" , ", ",").replaceAll(" ! ", "!").replaceAll(" ? ", "?").replaceAll(" : ", ":").replaceAll(" ; ", ";").replaceAll(" \" ", "\"").replaceAll(" \' ", "\'").replaceAll("  ", " ").replaceAll("  ", " ")
    if (returnType) { return returnText } console.log(returnText)
}
function translateIndividual(text = "") {
    var returnText = text
    returnText = returnText.split("").reverse().join("")
    var last1 = returnText[returnText.length-1]
    var last2 = returnText.length >= 2 ? returnText[returnText.length-2] : ""
    var last3 = returnText.length >= 3 ? returnText[returnText.length-3] : ""
    var last4 = returnText.length >= 4 ? returnText[returnText.length-4] : ""
    var last5 = returnText.length >= 5 ? returnText[returnText.length-5] : ""
    returnText = returnText.split("")
    returnText[0] = ""
    returnText[returnText.length-1] = ""
    returnText[1] = ""
    returnText[4] = ""
    returnText = returnText.join("")
    returnText = `${last4}a${last1}${last5}e${last2}${returnText}`
    if (returnText == undefined) {
        returnText = ""
        
    }
    return rCD(returnText)
}
translate("hi hello this is someone I think")

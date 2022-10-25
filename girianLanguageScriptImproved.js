function translate(text = "", returnType = false) {
    var returnText = text
    returnText = returnText.replaceAll(".", " . ").replaceAll(",", " , ").replaceAll("!", " ! ").replaceAll("?", " ? ").replaceAll(":", " : ").replaceAll(";", " ; ").replaceAll("\"", " \" ").replaceAll("\'", " \' ")
    returnText = returnText.split(" ")
    for (var i = 0; i < returnText.length; i++) {
        if (i < returnText.length-1) {
            if (returnText[i + 1].length < 5) {
                returnText[i] = returnText[i] + returnText[i + 1]
                returnText[i + 1] = ""
            }
        }
        returnText[i] = translateIndividual(returnText[i])
    }
    returnText = returnText.join(" ").replaceAll(" . ", ".").replaceAll(" , ", ",").replaceAll(" ! ", "!").replaceAll(" ? ", "?").replaceAll(" : ", ":").replaceAll(" ; ", ";").replaceAll(" \" ", "\"").replaceAll(" \' ", "\'").replaceAll("  ", " ").replaceAll("  ", " ")
    if (returnType) { return returnText } console.log(returnText)
}
function translateIndividual(text = "") {
    var returnText = text
    returnText = returnText.split("").reverse().join("")
    firstLast = returnText[returnText.length-1]
    

    return returnText
}
translate("hi this is someone. haha?")

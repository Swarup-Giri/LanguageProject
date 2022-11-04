function rCD(input, value = 1) {
    if(input.length<=1)
            return input;
        if(input[0]==input[1])
            return rCD(input.substring(value));
        else
            return input[0] + rCD(input.substring(value));
}
function translate(text = "", regionalVarient = 0, joiningThreshold = 3, returnType = false) {
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
        returnText[i] = translateIndividual(returnText[i], regionalVarient)
        
    }
    for (var i = 0; i < returnText.length; i++) {
        /*if (i < returnText.length-1) {
            if (returnText[i + 1].length < 5) {
                returnText[i] = returnText[i] + returnText[i + 1]
                delete returnText[i + 1]
            }
        }*/
        
        if (returnText[i+1] != undefined && returnText[i+1] != "" && returnText[i] != "") {
            if (returnText[i].length <= joiningThreshold) {
                returnText[i] = returnText[i] + returnText[i][0] + "y" + returnText[i+1]
                returnText[i+1] = ""
                returnText[i] = rCD(returnText[i])
            }
        }
            if (returnText[i].length > 1) {
                returnText[i] = returnText[i] + "a"
                returnText[i] = returnText[i].replaceAll("ia", "a").replaceAll("ua", "a").replaceAll("ea", "a").replaceAll("oa", "a")
                returnText[i] = rCD(returnText[i])
            }
        
        
    }
    returnText = returnText.join(" ").replaceAll(" . ", ".").replaceAll(" , ", ",").replaceAll(" ! ", "!").replaceAll(" ? ", "?").replaceAll(" : ", ":").replaceAll(" ; ", ";").replaceAll(" \" ", "\"").replaceAll(" \' ", "\'").replaceAll("  ", " ").replaceAll("  ", " ")
    if (returnType) { return returnText } console.log(returnText)
}
function translateIndividual(text = "", rv = 0) {
    var returnText = text
    var minusOne = returnText[returnText.length-1]
    minusOne = minusOne === undefined ? "" : minusOne
    var minusTwo = returnText[returnText.length-2]
    minusTwo = minusTwo === undefined ? "" : minusTwo
    var minusThree = returnText[returnText.length-3]
    minusThree = minusThree === undefined ? "" : minusThree
    var minusFour = returnText[returnText.length-4]
    minusFour = minusFour === undefined ? minusThree : minusFour
    var minusFive = returnText[returnText.length-5]
    minusFive = minusFive === undefined ? minusFour : minusFive
    returnText = returnText.split("")
    returnText[returnText.length-1] = returnText[0]
    returnText[0] = minusOne
    returnText = returnText.join("").replaceAll(",")
    var firstLetter = rv == 0 ? minusFour : rv == 1 ? minusFive : rv == 2 ? minusThree : rv == 3 ? minusOne : minusTwo
    returnText = `${firstLetter}a${returnText}`
    if (returnText.length > 2) {
        returnText = returnText.replaceAll(returnText[0], returnText[1])
        if (returnText.length > 4) {
            returnText = returnText.replaceAll(returnText[2], returnText[3])
        }
    }
    return rCD(change(returnText))
}
function change(returnText = "") {
    returnText = returnText.toLowerCase()
    /*returnText = returnText.replaceAll("a", "e").replaceAll("i", "a").replaceAll("o", "i").replaceAll("e", "o")
    returnText = returnText.replaceAll("kc", "k")
    returnText = returnText.replaceAll("ck", "k")
    returnText = returnText.replaceAll("wh", "w")
    returnText = returnText.replaceAll("hw", "h")
    returnText = returnText.replaceAll("q", "k")
    returnText = returnText.replaceAll("ae", "a").replaceAll("oe", "o").replaceAll("ea", "e").replaceAll("eo", "e")
    returnText = returnText.replaceAll("ak", "as")
    returnText = returnText.replaceAll("ka", "sa")
    returnText = returnText.replaceAll("ik", "is")
    returnText = returnText.replaceAll("ki", "ke")
    returnText = returnText.replaceAll("ku", "su")
    returnText = returnText.replaceAll("sh", "s")
    returnText = returnText.replaceAll("kh", "k")
    returnText = returnText.replaceAll("ng", "a") // we don't use this anymore
    returnText = returnText.replaceAll("gn", "e")
    returnText = returnText.replaceAll("th", "t") // we don't use this anymore
    returnText = returnText.replaceAll("ht", "t")
    returnText = returnText.replaceAll("oa", "oi")
    returnText = returnText.replaceAll("ao", "io")
    returnText = returnText.replaceAll("lh", "l")
    returnText = returnText.replaceAll("oh", "o")
    returnText = returnText.replaceAll("hl", "l")
    returnText = returnText.replaceAll("lb", "b")
    returnText = returnText.replaceAll("bl", "b")
    returnText = returnText.replaceAll("y", "i")
    returnText = returnText.replaceAll("'", "")*/
    return returnText
}
var text = "I think that you are bald"
translate(text, 0)
translate(text, 1)
translate(text, 2)
translate(text, 3)
translate(text, 4)

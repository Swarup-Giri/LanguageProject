var replaceCharacters = [".", ",", "<", ">", "?", "/", "\\", "-", "=", "_", "+", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "`", "~", "\"", "\'", "[", "]", "{", "}", ";", ":", "|"]
function replace(value = "") {
            value = value.replaceAll("kc", "k").replaceAll("kc", "k").replaceAll("undefined", "")
            value = value.replaceAll("ck", "k").replaceAll("ck", "k")
            value = value.replaceAll("wh", "w").replaceAll("wh", "w")
            value = value.replaceAll("hw", "h").replaceAll("hw", "h")
            value = value.replaceAll("q", "k")
            value = value.replaceAll("quu", "qua").replaceAll("quu", "qua")
            value = value.replaceAll("ae", "a").replaceAll("oe", "o").replaceAll("ea", "e").replaceAll("eo", "e")
            value = value.replaceAll("ee", "ē").replaceAll("ēe", "ē").replaceAll("ee", "ē").replaceAll("ēe", "ē")
            value = value.replaceAll("ēē", "è").replaceAll("ēē", "ê")
            value = value.replaceAll("aa", "ā").replaceAll("āa", "ā").replaceAll("ee", "ē").replaceAll("ēe", "ē")
            value = value.replaceAll("āā", "â").replaceAll("āā", "à")
            value = value.replaceAll("oo", "ō").replaceAll("ōo", "ō").replaceAll("ee", "ē").replaceAll("ēe", "ē")
            value = value.replaceAll("ōō", "ò").replaceAll("ōō", "ô")
            value = value.replaceAll("uu", "ū").replaceAll("ūu", "ū").replaceAll("ee", "ē").replaceAll("ēe", "ē")
            value = value.replaceAll("ūū", "û").replaceAll("ūū", "ù")
            value = value.replaceAll("en", "eñ").replaceAll("en", "eñ")
            value = value.replaceAll("ne", "ñe").replaceAll("ne", "ñe")
            value = value.replaceAll("ac", "as").replaceAll("ac", "aç")
            value = value.replaceAll("ca", "sa").replaceAll("ca", "ça")
            value = value.replaceAll("in", "iñ").replaceAll("in", "iñ")
            value = value.replaceAll("ni", "ñi").replaceAll("ni", "iñ")
            value = value.replaceAll("on", "oñ").replaceAll("on", "oñ")
            value = value.replaceAll("ec", "eç").replaceAll("ec", "eç")
            value = value.replaceAll("ce", "çe").replaceAll("ce", "çe")
            value = value.replaceAll("ic", "is").replaceAll("ic", "iç")
            value = value.replaceAll("ci", "ce").replaceAll("ci", "çi").replaceAll(("ce", "çe"))
            value = value.replaceAll("uc", "iç").replaceAll("uc", "iç")
            value = value.replaceAll("cu", "su").replaceAll("cu", "çu")
            value = value.replaceAll("ng", "ŋ").replaceAll("ng", "ŋ") // we don't use this anymore
            value = value.replaceAll("gn", "ŋ").replaceAll("gn", "ŋ")
            value = value.replaceAll("th", "þ").replaceAll("th", "þ") // we don't use this anymore
            value = value.replaceAll("ht", "þ").replaceAll("ht", "þ")
            value = value.replaceAll("an", "on").replaceAll("an", "åñ")
            value = value.replaceAll("na", "no").replaceAll("na", "ñå")
            value = value.replaceAll("in", "în").replaceAll("in", "iñ")
            value = value.replaceAll("ni", "nî").replaceAll("ni", "ñi")
            value = value.replaceAll("nu", "ny").replaceAll("nu", "ñ")
            value = value.replaceAll("un", "yn").replaceAll("un", "yn")
            value = value.replaceAll("ny", "ñ").replaceAll("ny", "ñ")
            value = value.replaceAll("e ", "é ").replaceAll("e || ", "é || ").replaceAll("e | ", "é | ")
            value = value.replaceAll("'", "")
            return value
}
const varient = {
    normal: "normal",
    informal: "informal",
    formal: "formal",
    northern: "northern",
    southern: "southern",
    eastern: "eastern",
    western: "western",
    old: "old",
    rude: "rude" // Dropping support later
}
function removeConsecutiveDuplicates(input) {
        if(input.length<=1)
                return input;
            if(input[0]==input[1])
                return removeConsecutiveDuplicates(input.substring(1));
            else
                return input[0] + removeConsecutiveDuplicates(input.substring(1));
}
function format(text = "") {
    var returnText = text + " "
    returnText = returnText.replaceAll("\n", " ")
    returnText = returnText.replaceAll("? ", ". ").replaceAll("! ", ". ")
    returnText = returnText.replaceAll(". ", " | ").replaceAll(", ", " || ").replaceAll("\n", " ").replaceAll("	", "")
    
    return returnText
}
function translate(text = "", returnType = "translated", varient = "informal", simplified = true, type="m") {
    text = format(text)
    if ((type != "m") & (type != "f")) {
        type = "m"
    }
    text = text.replaceAll("\n", " ")
    text = text.replaceAll("	", " ")
    while (text !== text.replaceAll("  ", " ")) {
        text = text.replaceAll("  ", " ").replaceAll("  ", " ").replaceAll("  ", " ")
    }
    returnType = returnType === "translated" ? 0 : returnType === "original" ? 1 : 0
    console.log("Old Ophidian: " + GETOLF(text, varient, type, simplified)[returnType])
}
function GETOL(textString = "", type="m") {
    var returnText = textString.toLowerCase()
    returnText = returnText.split("").reverse().join().replaceAll(",", "")
    var minusOne = returnText[returnText.length-1]
    minusOne = minusOne === undefined ? "" : minusOne
    var minusTwo = returnText[returnText.length-2]
    minusTwo = minusTwo === undefined ? "" : minusTwo
    var minusThree = returnText[returnText.length-3]
    minusThree = minusThree === undefined ? "" : minusThree
    var minusFive = returnText[returnText.length-5]
    minusFive = minusFive === undefined ? "" : minusFive
    returnText = returnText.replace(returnText[returnText.length-1], "").replace(returnText[returnText.length-2], "")
    if (type == "m") {
        returnText = `${minusOne}e${minusFive}${minusOne}a${returnText}am`
    } else {
        returnText = returnText.split("").reverse().join().replaceAll(",", "")
        returnText = `${minusOne}o${minusThree}e${minusTwo}a${returnText}an`
    }
    return returnText
}
function GETOLF(theText = "", varient="informal", type="m", simplified = true) {
    var returnData = theText
    if (varient === "old") {
        varient = -1
    }
    else if (varient === "formal") {
        varient = 0
    } else if (varient === "normal") {
        varient = 3
    } else if (varient === "northern") {
        varient = 4
    } else if (varient === "southern") {
        varient = 2 
    } else if (varient === "eastern") {
        varient = 2
    } else if (varient === "western") {
        varient = 6
    } else if (varient === "rude") {
        varient = 7
    } else if (varient === "informal") {
        varient = Infinity
    } else {
        varient = Infinity
    }
    returnData = returnData.split(' ')
    for (var i = 0; i < returnData.length; i++) {
        if ((returnData[i] !== "|") && (returnData[i] !== "||") && (!returnData[i].includes("0") && !returnData[i].includes("1") && !returnData[i].includes("2") && !returnData[i].includes("3") && !returnData[i].includes("4") && !returnData[i].includes("5") && !returnData[i].includes("6") && !returnData[i].includes("7") && !returnData[i].includes("8") && !returnData[i].includes("9") && !(returnData[i][0] == "."))) {
            if (returnData[i] === "") {
                break;
            }
            else if (varient === -1) {
                returnData[i] = GETOL(GETOL(GETOL(returnData[i], type), type), type)
            }
            else if (returnData[i].length >= varient) {
                returnData[i] = GETOL(returnData[i], type)
            } else if ((returnData[i].length > 2) & (varient < 7)) {
                returnData[i] = returnData[i].split("").reverse().join().replaceAll(",", "").toLowerCase()
                var minusOne = returnData[i][returnData[i].length-1]
                minusOne = minusOne === undefined ? "" : minusOne
                var minusTwo = returnData[i][returnData[i].length-2]
                minusTwo = minusTwo === undefined ? "" : minusTwo
                var minusThree = returnData[i][returnData[i].length-3]
                minusThree = minusThree === undefined ? "" : minusThree
                var minusFive = returnData[i][returnData[i].length-5]
                minusFive = minusFive === undefined ? "" : minusFive
                returnData[i] = returnData[i].replace(returnData[i][returnData[i].length-1], "").replace(returnData[i][returnData[i].length-2], "")
                if (type == "m") {
                    returnData[i] = `${minusOne}e${minusFive}e${minusThree}o${minusOne}${minusTwo}a${returnData[i]}am`
                } else {
                    returnData[i] = `${minusOne}o${minusThree}on${minusOne}a${minusTwo}an${returnData[i]}naf`
                }
            } else {
                returnData[i] = returnData[i].split("").reverse().join().replaceAll(",", "").replaceAll("e", "a").replaceAll("u", "e").replaceAll("i", "u").replaceAll("o", "a").replaceAll("a", "e").toLowerCase()
                returnData[i] = removeConsecutiveDuplicates(returnData[i])
                var minusOne = returnData[i][returnData[i].length-1]
                minusOne = minusOne === undefined ? "" : minusOne
                var minusTwo = returnData[i][returnData[i].length-2]
                minusTwo = minusTwo === undefined ? "" : minusTwo
                var minusThree = returnData[i][returnData[i].length-3]
                minusThree = minusThree === undefined ? "" : minusThree
                var minusFour = returnData[i][returnData[i].length-4]
                minusFour = minusFour === undefined ? minusThree : minusFour
                var minusFive = returnData[i][returnData[i].length-5]
                minusFive = minusFive === undefined ? minusFour : minusFive
                returnData[i] = returnData[i].split("")
                returnData[i][returnData[i].length-1] = returnData[i][0]
                returnData[i][0] = minusOne
                returnData[i] = returnData[i].join("").replaceAll(",")
                returnData[i] = `${minusFour}a${returnData[i]}`
                if (returnData[i][returnData[i].length - 1] == "e") {
                    returnData[i] = returnData[i].split("")
                    returnData[i][returnData[i].length - 1] = "é"
                    if (returnData[i][returnData[i].length - 2] == "e") {
                        returnData[i][returnData[i].length - 2] = ""
                    }
                    returnData[i] = returnData[i].join("")
                }
            }
        }
        if (!(returnData[i][0] == ".") && simplified && !(varient > 100)) {
            if (returnData[i][returnData[i].length - 1] == "e") {
            returnData[i] = returnData[i].replaceAll("e", "é")
            } else if (returnData[i][returnData[i].length - 1] == "a") {
                returnData[i] = returnData[i].replaceAll("a", "à")
            } else if (returnData[i][returnData[i].length - 1] == "i") {
                returnData[i] = returnData[i].replaceAll("i", "ï")
            } else if (returnData[i][returnData[i].length - 1] == "o") {
                returnData[i] = returnData[i].replaceAll("o", "ê")
            } else if (returnData[i][returnData[i].length - 1] == "c") {
                returnData[i] = returnData[i].replaceAll("e", "é")
            } else if (returnData[i][returnData[i].length - 1] == "e") {
                returnData[i] = returnData[i].replaceAll("e", "é")
            }
            if (varient === "informal") {
                text = removeConsecutiveDuplicates(text)
            }
            returnData[i] = replace(returnData[i].replaceAll("undefined", "e"))
        } else if (returnData[i][0] == ".") {
            returnData[i] = returnData[i].replace(".", "\"")
            returnData[i] = returnData[i] + "\""
        } else if (varient > 100) {
            returnData[i] = replace(returnData[i].replaceAll("undefined", "e"))
            
            if (returnData[i][returnData[i].length - 1] == "ñ") {
                returnData[i] = returnData[i].split("")
                returnData[i][returnData[i].length - 1] = "o"
                returnData[i] = returnData[i].join("")
            }
        }
        returnData[i][0] = returnData[i][0].replace(returnData[i][0], returnData[i][0].toUpperCase())
    }
    returnData = returnData.join().replaceAll(",", " ").replaceAll(" || ", ", ").replaceAll(" |", "| ").replaceAll("  ", " ").replaceAll("  ", " ")
    if (varient > 100) {
        returnData = removeConsecutiveDuplicates(returnData)
    }
    returnData = returnData.replaceAll("þ", "th").replaceAll("ŋ", "ng").replaceAll("yndefîned", "e")
    return [returnData, theText]
}
var translateText = `Emerald Of Everything`

/*
const ff = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

ff.question('', name => {
    translate(name.split("***"), "translated", "western")
    ff.close()
})*/
module.exports = {translate}
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
                returnText[i] = returnText[i] + returnText[i][0] + "\'" + returnText[i+1]
                returnText[i+1] = ""
                returnText[i] = rCD(returnText[i])
            }
        }
        
        
    }
    returnText = returnText.join(" ").replaceAll(" . ", ".").replaceAll(" , ", ",").replaceAll(" ! ", "!").replaceAll(" ? ", "?").replaceAll(" : ", ":").replaceAll(" ; ", ";").replaceAll(" \" ", "\"").replaceAll(" \' ", "\'").replaceAll("  ", " ").replaceAll("  ", " ")
    returnText = change(returnText)
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
    var minusSix = returnText[returnText.length-6]
    minusSix = minusSix === undefined ? minusFive : minusSix
    var minusSeven = returnText[returnText.length-7]
    minusSeven = minusSeven === undefined ? minusSix : minusSeven
    var minusEight = returnText[returnText.length-8]
    minusEight = minusEight === undefined ? minusSeven : minusEight
    var minusNine = returnText[returnText.length-9]
    minusNine = minusNine === undefined ? minusEight : minusNine
    returnText = returnText.split("")
    returnText[returnText.length-1] = returnText[0]
    returnText[0] = minusOne
    returnText = returnText.join("").replaceAll(",")
    var firstLetter = rv == 0 ? minusFour : rv == 1 ? minusFive : rv == 2 ? minusThree : rv == 3 ? minusOne : rv == 4 ? minusSix : rv == 5 ? minusEight : rv == 6 ? minusSeven : minusNine
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
    //returnText = returnText.replaceAll("a", "e").replaceAll("i", "a").replaceAll("o", "i").replaceAll("e", "o"
    returnText = returnText.replaceAll("wh", "w")
    returnText = returnText.replaceAll("hw", "h")
    returnText = returnText.replaceAll("q", "k")
    returnText = returnText.replaceAll("kc", "k")
    returnText = returnText.replaceAll("ck", "k")
    returnText = returnText.replaceAll("x", "e")
    /*returnText = returnText.replaceAll("ae", "a").replaceAll("oe", "o").replaceAll("ea", "e").replaceAll("eo", "e")
    returnText = returnText.replaceAll("ak", "as")
    returnText = returnText.replaceAll("ka", "sa")
    returnText = returnText.replaceAll("ik", "is")
    returnText = returnText.replaceAll("ki", "ke")
    returnText = returnText.replaceAll("ku", "su")
    returnText = returnText.replaceAll("sh", "s")
    returnText = returnText.replaceAll("kh", "k")
    returnText = returnText.replaceAll("ng", "a") // we don't use this anymore
    returnText = returnText.replaceAll("gn", "e")*/
    returnText = returnText.replaceAll("th", "t")
    returnText = returnText.replaceAll("ht", "t")
    returnText = returnText.replaceAll("yu", "y")
    returnText = returnText.replaceAll("uy", "y")
    returnText = returnText.replaceAll("y", "i")
    /*returnText = returnText.replaceAll("oa", "oi")
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
var text = "hello this is an example of something I guess the quick brown fox jumps over the lazy dog hello the dog said when the dog then decided to jump over the fence after the quick brown fox jumped over the lazy dog which was the dog that then decided to jump over the fence"

/******************************************
 0 alha'ahia sis'n aeaple fof'aometains aia'aeag aha'aik aowb aoa'ampj avea aha'aza aoa'alh aha'aoa aia'ahea aha'aoa ahea aecae oto'auma avea aha'ancf atea aha'aik aowb aoa'auapej avea aha'aza aoa'aicw a'aha aoa'h ahea aecae oto'auma avea aha'ancf
 1 aela ahia sis'n aeample fof'aomeahins aia'aueua aha'auica arowa aoa'aumpa avea aha'aza aoa'aela aha'aoa aia'ahea aha'aoa ahea aeaie oto'auma avea aha'aenca aftea aha'auica arowa aoa'ampej avea aha'aza aoa'ahica a'aha aoa'h ahea aeaie oto'auma avea aha'aenca
 2 aeah aita'si n'aeamale fof'aometans aia'auaug aha'auak arawb aoa'auapj aeoa'aha azla'aoa aeah aha'aoa aisa'aew aha'aoa aeta'ecie oto'amj aeoa'aha aeacf afaea aha'auak arawb aoa'aumaej aeoa'aha azla'aoa ahacw a'aha aoa'a aeta'ecie oto'amj aeoa'aha aeacf
 3 elhe'hit aia'a emple aoa'ometins a'ueug t'uik rowb ofo'umpj veov't azla'od elhe't odo'ais hew't odo'het ecie ata'umj veov't ancf ftef t'uik rowb ofo'umpej veov't azla'od aicw awa't odo'h het'ecie ata'umj veov't ancf
 4 aela ahia sis'n ampla fof'aomatins aia'aueua aha'auica arowa aoa'aumpa avea aha'aza aoa'aela aha'aoa aia'ahea aha'aoa ahea acia oto'auma avea aha'aenca aftea aha'auica arowa aoa'aumpea avea aha'aza aoa'ahica a'aha aoa'h ahea acia oto'auma avea aha'aenca
 5 aela ahia sis'n emple fof'ametins aia'aueua aha'auica arowa aoa'aumpa avea aha'aza aoa'aela aha'aoa aia'ahea aha'aoa ahea ecie oto'auma avea aha'aenca aftea aha'auica arowa aoa'aumpea avea aha'aza aoa'ahica a'aha aoa'h ahea ecie oto'auma avea aha'aenca
 6 aela ahia sis'n emple fof'aoaetins aia'aueua aha'auica arowa aoa'aumpa avea aha'aza aoa'aela aha'aoa aia'ahea aha'aoa ahea ecie oto'auma avea aha'aenca aftea aha'auica arowa aoa'aumpea avea aha'aza aoa'ahica a'aha aoa'h ahea ecie oto'auma avea aha'aenca
 7 aela ahia sis'n emple fof'aometina aia'aueua aha'auica arowa aoa'aumpa avea aha'aza aoa'aela aha'aoa aia'ahea aha'aoa ahea ecie oto'auma avea aha'aenca aftea aha'auica arowa aoa'aumpea avea aha'aza aoa'ahica a'aha aoa'h ahea ecie oto'auma avea aha'aenca
 ******************************************/

translate(text, 0)
translate(text, 1)
translate(text, 2)
translate(text, 3)
translate(text, 4)
translate(text, 5)
translate(text, 6)
translate(text, 7)
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
    returnText = returnText.replaceAll(".", " . ").replaceAll(",", " , ").replaceAll("!", " ! ").replaceAll("?", " ? ").replaceAll(":", " : ").replaceAll(";", " ; ").replaceAll("\"", " \" ").replaceAll("\'", " \' ").replaceAll("0", " 0 ").replaceAll("1", " 1 ").replaceAll("2", " 2 ").replaceAll("3", " 3 ").replaceAll("4", " 4 ").replaceAll("5", " 5 ").replaceAll("6", " 6 ").replaceAll("7", " 7 ").replaceAll("8", " 8 ").replaceAll("9", " 9 ").replaceAll("\\", " \\ ").replaceAll("/", " / ").replaceAll("<", " < ").replaceAll(">", " > ")
    returnText = returnText.split(" ")
    for (var i = 0; i < returnText.length; i++) {
        if (returnText[i].length > 1) {
            returnText[i] = translateIndividual(returnText[i], regionalVarient)
        }
        
        
    }
    returnText = returnText.join(" ").replaceAll(" . ", ".").replaceAll(" , ", ",").replaceAll(" ! ", "!").replaceAll(" ? ", "?").replaceAll(" : ", ":").replaceAll(" ; ", ";").replaceAll(" \" ", "\"").replaceAll(" \' ", "\'").replaceAll("  ", " ").replaceAll("  ", " ").replaceAll(" 0 ", "0").replaceAll(" 1 ", "1").replaceAll(" 2 ", "2").replaceAll(" 3 ", "3").replaceAll(" 4 ", "4").replaceAll(" 5 ", "5").replaceAll(" 6 ", "6").replaceAll(" 7 ", "7").replaceAll(" 8 ", "8").replaceAll(" 9 ", "9").replaceAll(" \\ ", "\\").replaceAll(" / ", "/").replaceAll(" < ", "<").replaceAll(" > ", ">")
    returnText = change(returnText)
    if (returnType) { return returnText } console.log("Viperish: " + returnText)
}
function translateIndividual(text = "", rv = 0) {
    var returnText = text
    var minusOne = returnText[returnText.length-1]
    minusOne = minusOne === undefined ? "" : minusOne
    var minusTwo = returnText[returnText.length-2]
    minusTwo = minusTwo === undefined ? "" : minusTwo
    var minusTwoV2 = text[text.length-3]
    minusTwoV2 = minusTwoV2 === undefined ? text[text.length-1] : minusTwoV2
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
    returnText[returnText.length-2] = returnText[1]
    returnText[0] = minusOne
    returnText[1] = minusTwo
    returnText = returnText.join("").replaceAll(",")
    var firstLetter = rv == 0 ? minusFour : rv == 1 ? minusFive : rv == 2 ? minusThree : rv == 3 ? minusOne : rv == 4 ? minusSix : rv == 5 ? minusEight : rv == 6 ? minusSeven : minusNine
    var firstVowel = rv == 0 ? `a${minusFour}'`  : rv == 1 ? `e${minusTwo}i` : rv == 2 ? `i${firstLetter}${firstVowel}'` : rv == 3 ? "o'" : rv == 4 ? "u'" : rv == 5 ? "a" : rv == 6 ? "e'" : "ew'u'"
    returnText = `${firstLetter}${firstVowel}'${returnText}'${minusTwoV2}`
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
    returnText = returnText.replaceAll("c", "k")
    returnText = returnText.replaceAll("kk", "kh")
    returnText = returnText.replaceAll("x", "e")
    returnText = returnText.replaceAll("th", "t")
    returnText = returnText.replaceAll("ht", "t")
    returnText = returnText.replaceAll("yu", "u")
    returnText = returnText.replaceAll("ya", "a")
    returnText = returnText.replaceAll("ye", "e")
    returnText = returnText.replaceAll("yi", "i")
    returnText = returnText.replaceAll("yo", "o")
    returnText = returnText.replaceAll("uy", "i")
    returnText = returnText.replaceAll("y", "i")
    returnText = returnText.replaceAll("tw", "w")
    returnText = returnText.replaceAll("dw", "w")
    returnText = returnText.replaceAll("tw", "w")
    returnText = returnText.replaceAll("ts", "s")
    returnText = returnText.replaceAll("ug", "ang")
    returnText = returnText.replaceAll("dl", "dul")
    returnText = returnText.replaceAll("wr", "w")
    returnText = returnText.replaceAll("bi", "ba")
    returnText = returnText.replaceAll("by", "be")
    returnText = returnText.replaceAll("bo", "bu")
    returnText = returnText.replaceAll("kw", "k")
    returnText = returnText.replaceAll("nw", "n")
    returnText = returnText.replaceAll("hk", "kh")
    returnText = returnText.replaceAll("hn", "han")
    returnText = returnText.replaceAll("tl", "til")
    returnText = returnText.replaceAll("f", "p")
    returnText = returnText.replaceAll("ku", "khu")
    returnText = returnText.replaceAll("ka", "kha")
    returnText = returnText.replaceAll("ke", "khe")
    returnText = returnText.replaceAll("ki", "khi")
    returnText = returnText.replaceAll("ko", "kho")
    returnText = returnText.replaceAll("dr", "dur")
    returnText = returnText.replaceAll("gn", "n")
    returnText = returnText.replaceAll("kn", "n")
    returnText = returnText.replaceAll("hl", "hil")
    returnText = returnText.replaceAll("nk", "nik")
    return returnText
}
/******************************************
 0 alha'ahia sis'n aeaple fof'aometains aia'aeag aha'aik aowb aoa'ampj avea aha'aza aoa'alh aha'aoa aia'ahea aha'aoa ahea aekae oto'auma avea aha'ankf atea aha'aik aowb aoa'auapej avea aha'aza aoa'aikw a'aha aoa'h ahea aekae oto'auma avea aha'ankf
 1 aela ahia sis'n aeample fof'aomeahins aia'aueua aha'auika arowa aoa'aumpa avea aha'aza aoa'aela aha'aoa aia'ahea aha'aoa ahea aeaie oto'auma avea aha'aenka aftea aha'auika arowa aoa'ampej avea aha'aza aoa'ahika a'aha aoa'h ahea aeaie oto'auma avea aha'aenka
 2 aeah aita'si n'aeamale fof'aometans aia'auaug aha'auak arawb aoa'auapj aeoa'aha azla'aoa aeah aha'aoa aisa'aew aha'aoa aeta'ekie oto'amj aeoa'aha aeakf afaea aha'auak arawb aoa'aumaej aeoa'aha azla'aoa ahakw a'aha aoa'a aeta'ekie oto'amj aeoa'aha aeakf
 3 elhe'hit aia'a emple aoa'ometins a'ueug t'uik rowb ofo'umpj veov't azla'od elhe't odo'ais hew't odo'het ekie ata'umj veov't ankf ftef t'uik rowb ofo'umpej veov't azla'od aikw awa't odo'h het'ekie ata'umj veov't ankf
 4 aela ahia sis'n ampla fof'aomatins aia'aueua aha'auika arowa aoa'aumpa avea aha'aza aoa'aela aha'aoa aia'ahea aha'aoa ahea akia oto'auma avea aha'aenka aftea aha'auika arowa aoa'aumpea avea aha'aza aoa'ahika a'aha aoa'h ahea akia oto'auma avea aha'aenka
 5 aela ahia sis'n emple fof'ametins aia'aueua aha'auika arowa aoa'aumpa avea aha'aza aoa'aela aha'aoa aia'ahea aha'aoa ahea ekie oto'auma avea aha'aenka aftea aha'auika arowa aoa'aumpea avea aha'aza aoa'ahika a'aha aoa'h ahea ekie oto'auma avea aha'aenka
 6 aela ahia sis'n emple fof'aoaetins aia'aueua aha'auika arowa aoa'aumpa avea aha'aza aoa'aela aha'aoa aia'ahea aha'aoa ahea ekie oto'auma avea aha'aenka aftea aha'auika arowa aoa'aumpea avea aha'aza aoa'ahika a'aha aoa'h ahea ekie oto'auma avea aha'aenka
 7 aela ahia sis'n emple fof'aometina aia'aueua aha'auika arowa aoa'aumpa avea aha'aza aoa'aela aha'aoa aia'ahea aha'aoa ahea ekie oto'auma avea aha'aenka aftea aha'auika arowa aoa'aumpea avea aha'aza aoa'ahika a'aha aoa'h ahea ekie oto'auma avea aha'aenka
 ******************************************/
var text = "Emerald Of Everything"
/*translate(text, 0) // good
translate(text, 1)
translate(text, 2) // good
translate(text, 3) // good
translate(text, 4)
translate(text, 5)
translate(text, 6)
translate(text, 7)
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', name => {
    translate(name, 0)
    readline.close()
})*/
module.exports = {translate}
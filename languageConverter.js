function isVowel(input = "") {
    if (input == "a" || input == "e" || input == "i" || input == "o" || input == "u") {
        return true
    }
    return false
}
function findFirstVowel(input = "", min = true) {
    var a = input.indexOf("a") == -1 ? Infinity : input.indexOf("a")
    var e = input.indexOf("e") == -1 ? Infinity : input.indexOf("e")
    var i = input.indexOf("i") == -1 ? Infinity : input.indexOf("i")
    var o = input.indexOf("o") == -1 ? Infinity : input.indexOf("o")
    var u = input.indexOf("u") == -1 ? Infinity : input.indexOf("u")
    var lowest = Math.min(a, e, i, o, u)
    var highest = Math.max(a, e, i, o, u)
    if (min) {    
        if (lowest == a) {
            return "a"
        } else if (lowest == e) {
            return "e"
        } else if (lowest == i) {
            return "i"
        } else if (lowest == o) {
            return "o"
        } else if (lowest == u) {
            return "u"
        }
    } else {
        if (highest == a) {
            return "a"
        } else if (highest == e) {
            return "e"
        } else if (highest == i) {
            return "i"
        } else if (highest == o) {
            return "o"
        } else if (highest == u) {
            return "u"
        }
    }
}
function removeDuplicates(input, value = 1) {
    if(input.length<=1)
            return input;
        if(input[0]==input[1])
            return removeDuplicates(input.substring(value));
        else
            return input[0] + removeDuplicates(input.substring(value));
}
function translate (text = "", varient = 0, returnBack = false) {
    var rt = text
    rt.replaceAll("\s", " ")
    var replaceCharacters = [".", ",", "<", ">", "?", "/", "\\", "-", "=", "_", "+", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "`", "~", "\"", "\'", "[", "]", "{", "}", ";", ":", "|"]
    for (var j = 0; j < replaceCharacters.length; j++) { rt = rt.replaceAll(replaceCharacters[j], " " + replaceCharacters[j] + " ") }
    rt = rt.split(" ")

    for (var i = 0; i < rt.length; i++) {
        if (rt[i].length > 1) {
            // change
            var originalText = rt[i]
            var last1 = rt[i][rt[i].length - 1] === undefined ? "" : rt[i][rt[i].length - 1]
            var last2 = rt[i][rt[i].length - 2] === undefined ? last1 : rt[i][rt[i].length - 2]
            var last3 = rt[i][rt[i].length - 3] === undefined ? last2 : rt[i][rt[i].length - 3]
            var last4 = rt[i][rt[i].length - 4] === undefined ? last3 : rt[i][rt[i].length - 4]
            var last5 = rt[i][rt[i].length - 5] === undefined ? last4 : rt[i][rt[i].length - 5]
            var last6 = rt[i][rt[i].length - 6] === undefined ? last5 : rt[i][rt[i].length - 6]
            var last7 = rt[i][rt[i].length - 7] === undefined ? last6 : rt[i][rt[i].length - 7]
            var last8 = rt[i][rt[i].length - 8] === undefined ? last7 : rt[i][rt[i].length - 8]
            var last9 = rt[i][rt[i].length - 9] === undefined ? last8 : rt[i][rt[i].length - 9]
            var endingHalf = rt[i].substring(Math.floor(rt[i].length/2))
            var firstLast = varient == 0 ? last2 : varient == 1 ? last4 : varient == 2 ? last3 : varient == 3 ? last5 : varient == 4 ? last7 : "wu"
            rt[i] = `${firstLast}${endingHalf}`
            rt[i] = (rt[i])
            var vowels = ["a", "e", "i", "o", "u"]
            var isGood1 = false
            var isGood2 = false
            for (var j = 0; j < vowels.length; j++) {
                if (rt[i][0] == vowels[j]) {
                    isGood1 = true
                }
                if (rt[i][1] == vowels[j]) {
                    isGood2 = true
                }
            }
            if (!isGood1 && !isGood2) {
                rt[i] = rt[i].split("")
                var replace1 = varient == 0 ? "a" : varient == 1 ? "e" : varient == 2 ? "i" : varient == 3 ? "o" : varient == 4 ? "u" : "y"
                rt[i][1] = replace1 + rt[i][1]
                rt[i] = rt[i].join("")
            } else if (!isGood1) {
                var replace2 = varient == 0 ? "i" : varient == 1 ? "o" : varient == 2 ? "u" : varient == 3 ? "a" : varient == 4 ? "e" : "y"
                rt[i][1] = replace2 + rt[i][1]
            } else if (!isGood2) {
                var replace3 = varient == 0 ? "e" : varient == 1 ? "i" : varient == 2 ? "o" : varient == 3 ? "u" : varient == 4 ? "a" : "y"
                rt[i][1] = replace3 + rt[i][1]
            }
            rt[i] = rt[i].replace(findFirstVowel(rt[i]), findFirstVowel(originalText))
            if (rt[i].length <= Math.floor(originalText.length/2)) {
                rt[i] = rt[i] //+ originalText[0]
            }
            if (!(rt[i] == originalText)) {
                rt[i] = rt[i] + findFirstVowel(rt[i], false)+ originalText[0].toLowerCase()
            }
            rt[i] = rt[i].split("")
            for (var k = 0; k < rt[i].length; k++) {
                if (k < rt[i].length - 1) {
                    if (isVowel(rt[i][k]) && isVowel(rt[i][k + 1])) {
                        rt[i][k + 1] = ""
                    }
                }
                if (k < rt[i].length - 2) {
                    if (isVowel(rt[i][k]) && isVowel(rt[i][k + 2])) {
                        rt[i][k + 2] = ""
                    }
                }
            }
            rt[i] = rt[i].join("")
        }
    }
    rt = rt.join(" ")
    rt = rt.replaceAll("undefined", "").replaceAll("ck", "ch").replaceAll("tch", "ch")
    for (var j = 0; j < replaceCharacters.length; j++) { rt = rt.replaceAll(" " + replaceCharacters[j] + " ", replaceCharacters[j]) }
    rt = removeDuplicates(rt)
    if (returnBack) {
        return rt
    } 
    console.log(rt) //replace the first vowel in the result with the real first vowel.
}
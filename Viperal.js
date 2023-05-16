var vowels = ['a', 'e', 'i', 'o', 'u']
var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
function contains(input = "", range = vowels) {
    for (var i in range) { // loop through all the possible matches
        if (input.replace(range[i], "") !== input) {
            return true // if there is a match return true
        }
    }
    return false // otherwise return false
}
const replaceLast = (input, pattern, replacement) => {
    const match =
      typeof pattern === 'string'
        ? pattern
        : (input.match(new RegExp(pattern.source, 'g')) || []).slice(-1)[0];
    if (!match) return input;
    const last = input.lastIndexOf(match);
    return last !== -1
      ? `${input.slice(0, last)}${replacement}${input.slice(last + match.length)}`
      : input;
  };
function findVowel(input = "", min = true) {
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
        } else {
            return "aa"
        }
    }
    if (highest == a) {
        return 'a'
    } else if (highest == e) {
        return 'e'
    } else if (highest == i) {
        return 'i'
    } else if (highest == o) {
        return 'o'
    } else if (highest == u) {
        return 'u'
    } else {
        return "aa"
    }
    
}
function removeDuplicates(input = "", value = 1) {
    if(input.length <= 1) {
            return input;
    }
    if(input[0] == input[1]) {
        return removeDuplicates(input.substring(value));
    }
    else {
        return input[0] + removeDuplicates(input.substring(value));
    }
}
function format(input = "") {
    input = input.replaceAll("ch", "þ")
    var s = ["e", "i", "y"]
    input = input.replaceAll("cie", "cee")
    for (var i in s) {
        input = input.replaceAll("c" + s[i], "s" + s[i])
        input = input.replaceAll("g" + s[i], "j" + s[i])
    }
    input = input.replaceAll("tt", "d").replaceAll("tion", "shun")
    input = input.replaceAll("c", "k").replaceAll("þ", "ch")
    return input
}
function translate(input = "", giveBack = false) {
    input = removeDuplicates(format(input.replaceAll("qu", "kw").replaceAll("q", "k").replaceAll("x", "ks").toLowerCase()))
    var replaceCharacters = [".", ",", "<", ">", "?", "/", "\\", "-", "=", "_", "+", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "`", "~", "\"", "\'", "[", "]", "{", "}", ";", ":", "|"]
    for (var j = 0; j < replaceCharacters.length; j++) { input = input.replaceAll(replaceCharacters[j], " " + replaceCharacters[j] + " ") }
    
    input = input.split(" ")
    var middleReplacer = ""
    for (var i = 0; i < input.length - 1; i++) {
        input[i] = input[i].split("")
        for (var j = 0; j < input[i].length - 1; j++) {
            if (j + 1 < input[i].length) {
                var goodFirst = false
                var goodSecond = false
                for (var k = 0; k < consonants.length - 1; k++) {
                    if (input[i][j] === consonants[k]) { goodFirst = true }
                    if (input[i][j + 1] === consonants[k]) { goodSecond = true }
                    if (goodFirst && goodSecond) {
                        k = consonants.length
                        input[i][j] = input[i][j] + middleReplacer
                    }
                }
            }
            
        }
        input[i] = input[i].join("")
        input[i] = input[i].replaceAll("c" + middleReplacer + "h", "ch" + middleReplacer).replaceAll("t" + middleReplacer + "h", "th" + middleReplacer).replaceAll("s" + middleReplacer + "h", "sh" + middleReplacer).replaceAll("n" + middleReplacer + "g", "ng" + middleReplacer).replaceAll("g" + middleReplacer + "h", "gh" + middleReplacer).replaceAll(middleReplacer + middleReplacer, middleReplacer)
        var firstVowel = findVowel(input[i])
        var lastVowel = findVowel(input[i], false)
        input[i] = input[i].replaceAll("'", lastVowel+ "'" + firstVowel)
        input[i] = input[i].replace(firstVowel, firstVowel + firstVowel)
        // a -> o, e -> u, i -> a, o -> e, u -> i
        input[i] = replaceLast(input[i], "i", "þ")
        input[i] = replaceLast(input[i], "u", "u")
        input[i] = replaceLast(input[i], "e", "u")
        input[i] = replaceLast(input[i], "o", "e")
        input[i] = replaceLast(input[i], "a", "o")
        input[i] = input[i].replaceAll("þ", "a")
        var longVowelReplacements = ['b', "d", "k", "m", "n", "t", "v"]
        for (var l = 0; l < longVowelReplacements.length; l++) {
            if (input[i][0] !== longVowelReplacements[l]) {
                input[i] = input[i].replaceAll(longVowelReplacements[l] + "a", firstVowel + longVowelReplacements[l] + longVowelReplacements[l] + "a")
                input[i] = input[i].replaceAll(longVowelReplacements[l] + "e", firstVowel + longVowelReplacements[l] + longVowelReplacements[l] + "e")
                input[i] = input[i].replaceAll(longVowelReplacements[l] + "o", firstVowel + longVowelReplacements[l] + longVowelReplacements[l] + "o")
                /*
                input[i] = input[i].replaceAll("a" + longVowelReplacements[l] + "e", "a" +longVowelReplacements[l] + longVowelReplacements[l] + "e")
                input[i] = input[i].replaceAll("e" + longVowelReplacements[l] + "e", "e" +longVowelReplacements[l] + longVowelReplacements[l] + "e")
                input[i] = input[i].replaceAll("i" + longVowelReplacements[l] + "e", "i" +longVowelReplacements[l] + longVowelReplacements[l] + "e")
                input[i] = input[i].replaceAll("o" + longVowelReplacements[l] + "e", "o" +longVowelReplacements[l] + longVowelReplacements[l] + "e")
                input[i] = input[i].replaceAll("u" + longVowelReplacements[l] + "e", "u" +longVowelReplacements[l] + longVowelReplacements[l] + "e")

                input[i] = input[i].replaceAll("a" + longVowelReplacements[l] + "o", "a" +longVowelReplacements[l] + longVowelReplacements[l] + "o")
                input[i] = input[i].replaceAll("e" + longVowelReplacements[l] + "o", "e" +longVowelReplacements[l] + longVowelReplacements[l] + "o")
                input[i] = input[i].replaceAll("i" + longVowelReplacements[l] + "o", "i" +longVowelReplacements[l] + longVowelReplacements[l] + "o")
                input[i] = input[i].replaceAll("o" + longVowelReplacements[l] + "o", "o" +longVowelReplacements[l] + longVowelReplacements[l] + "o")
                input[i] = input[i].replaceAll("u" + longVowelReplacements[l] + "o", "u" +longVowelReplacements[l] + longVowelReplacements[l] + "o")
                */
            }
            
        }
    }

    input = input.join(" ")

    for (var j = 0; j < replaceCharacters.length; j++) { input = input.replaceAll(" " + replaceCharacters[j] + " ", replaceCharacters[j]) }
    input = input.replaceAll("inging", "ť")
    input = input.replaceAll("ing", "in").replaceAll("ng", "n")
    input = input.replaceAll("ť", "ingin")
    if (giveBack) {
        return input
    }
    console.log(input)
}
/*
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', name => {
    if (name.replace("***") != name) {
        var varientL = (Math.abs((name.split("***")[1])) % 26) - 1
    }
    console.log("" + translate(name.split("***")[0], true, varientL))
    readline.close()
})*/
module.exports = {translate}
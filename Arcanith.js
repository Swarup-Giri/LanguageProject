var vowels = ['a', 'e', 'i', 'o', 'u', 'e', 'á', 'é', 'í', 'ó', 'ú', 'à', 'è', 'ì', 'ò', 'ù', "ā", "ē", "ī", "ō", "ū"]
var consonants = ['b', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 'sh', 't', 'v', 'w', 'y', 'z', 'th', 'tsh', 'ñ', 'x']

function translate(text = "") {
    text = text.toLowerCase()
    text = text.replace(/th/g, "f").replace(/ch/g, "ȝ").replace(/c|q/g, "k").replace(/z/g, "j") // ȝ is temporary
    text = text.replace(/si/g, "shi").replace(/se/g, "she").replace(/sy/g, "shy")
    text = text.replace(/g|d/g, "sh").replace(/t/g, "s").replace(/b/g, "gh")
    text = text.replace(/v|p/g, "f").replace(/n/g, "i")
    text = text.replace(/y/g, "eh").replace(/r/g, "wh")


    text = text.replace(/ȝ/g, "tsh")
    return text
}

module.exports = {translate}
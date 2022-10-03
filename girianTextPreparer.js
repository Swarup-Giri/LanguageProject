function format(text = "") {
    var returnText = text
    returnText = returnText.replaceAll("? ", ". ").replaceAll("! ", ". ")
    returnText = returnText.replaceAll(". ", " | ").replaceAll(", ", " || ").replaceAll("\n", " ").replaceAll("	", "")
    return returnText
}
var text = `hello this is an example of some text, so um yeah any ways what is the point of .life`
console.log(format(text))
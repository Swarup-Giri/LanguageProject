def translate(text = "", varient = "informal", simplified = True, returnType = "translated", type = "m"):
    text = format_text(text)
    text = text.replace("\n", " ").replace("	", " ")
    while text != text.replace("  ", " "):
        text = text.replace("  ", " ")
    returnType = 0 if returnType == "translated" else 1 if returnType == "original" else 0
    print(girian(text, varient, type, simplified,)[returnType])
def format_text(text = ""):
    return (text + " ").replace("\n", " ").replace("? ", ". ").replace("! ", ". ").replace(". ", " | ").replace(", ", " || ").replace("	", "")
def remove_duplicates(text = ""):
    if text.__len__() <= 1:
        return text
    if text[0] == text[1]:
        return remove_duplicates(text[1:])
    else:
        return text[0] + remove_duplicates(text[1:])
def convert(text = "", type = "m"):
    returnText = text.lower()
    returnText = returnText.split("").reverse()
    returnText = "".join(returnText)
    print(returnText)
print(convert("jo"))
def girian(text = "", varient = "informal", type = "m", simplified = "true"):
    print("JD")
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
def convert(text = "", type = "m"): # AKA GETOL
    returnText = text.lower()[::-1]  # lowercase, reverse
    minusOne, minusTwo, minusThree, minusFive = ""
    try:
        minusOne = returnText[len(returnText) - 1]
    except:
        minusOne = ""
    try:
        minusTwo = returnText[len(returnText) - 2]
    except:
        minusTwo = ""
    try:
        minusThree = returnText[len(returnText) - 3]
    except:
        minusThree = ""
    try:
        minusFive = returnText[len(returnText) - 5]
    except:
        minusFive = ""
    print(returnText)
    if type == "m":
        returnText = f"{minusOne}e{minusFive}{minusOne}a{returnText}am"
convert("hejekele")
print("dlkjf"[10] == False)
def girian(text = "", varient = "informal", type = "m", simplified = "true"): # AKA GETOLF
    print("JD")
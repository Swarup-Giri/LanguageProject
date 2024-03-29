from numpy import Infinity


def help():
    print("Girian Language Script v1.4 \n To use this, simply... UPDATE SOON")
def replace(value = ""):
    value = value.replace("", "")
    value = value.replace("qc", "k").replace("cq", "k")
    value = value.replace("wh", "w").replace("hw", "h")
    value = value.replace("q", "k").replace("x", "k")
    value = value.replace("ae", "a").replace("oe", "o").replace("ea", "e").replace("eo", "e").replace("ao", "a").replace("oa", "o")
    value = value.replace("ee", "e").replace("ee", "e").replace("ee", "e").replace("ee", "e")
    value = value.replace("aa", "a").replace("aa", "a").replace("aa", "a").replace("aa", "a")
    value = value.replace("oo", "o").replace("oo", "o").replace("oo", "o").replace("oo", "o")
    value = value.replace("uu", "u").replace("uu", "u").replace("uu", "u").replace("uu", "u")
    value = value.replace("sh", "s").replace("ak", "k").replace("nt", "t").replace("tch", "ts")
    value = value.replace("a", "e").replace("e", "i").replace("i", "o").replace("o", "u").replace("u", "a")
    value = value.replace("ac", "as").replace("ca", "sa")
    value = value.replace("ic", "is").replace("ci", "ce")
    value = value.replace("uc", "ic").replace("cu", "su")
    value = value.replace("gn", "ng").replace("ht", "th")
    value = value.replace("an", "on").replace("na", "no")
    value = value.replace("nu", "ny").replace("un", "yn")
    value = value.replace("kc", "k").replace("ck", "k")
    value = value.replace("td", "t").replace("dt", "d").replace("z", "g")
    value = value.replace("'", "")
    return value
varient = {
    "normal": "normal",
    "informal": "informal",
    "formal": "formal",
    "northern": "northern",
    "southern": "southern",
    "western": "western",
    "old": "old",
    "rude": "rude"
}
def remove_consecutive_duplicates(input = ""):
    if len(input) <= 1:
        return input
    if input[0] == input[1]:
        return remove_consecutive_duplicates(input[1:])
    else:
        return input[0] + remove_consecutive_duplicates(input[1:])
def format(text = ""):
    returnText = text + " "
    returnText = returnText.replace("\n", " ")
    returnText = returnText.replace("? ", "| ").replace("! ", "| ").replace(". ", " | ")
    returnText = returnText.replace(", ", " || ")
    return returnText
def translate (text = "", varient = "informal", simplified = True, type = "m"):
    text = format(text)
    text = text.lower()
    text = text.replace("—", "").replace("–", "").replace("-", "").replace("\"", "").replace("\'", "").replace("\'", "").replace("“", "").replace("”", "")
    
    if (type != "m") & (type != "f"):
        type = "m"
    text = text.replace("\n", " ").replace("	", " ")
    while (text != text.replace("  ", " ")):
        text = text.replace("  ", " ")
    print(GETOLF(text, varient))
def GETOL(textString = "", type = "m"):
    returnText = textString.lower()
    returnText = returnText[::-1] # [::-1] means reverse
    minusOne = returnText[-1]
    minusTwo = returnText[-2] if len(returnText) >= 2 else ""
    minusThree = returnText[-3] if len(returnText) >= 3 else ""
    minusFive = returnText[-5] if len(returnText) >= 5 else ""
    returnText = returnText.replace(minusOne, "").replace(minusTwo, "")
    returnText = f"{minusOne}e{minusFive}{minusOne}a{returnText}am"
    return returnText

def GETOLF(text = "", varient = "informal", type = "m", simlified = True):
    returnData = text
    if varient == "old":
        varient = -1
    elif varient == "formal":
        varient = 0
    elif varient == "normal":
        varient = 3
    elif varient == "northern":
        varient = 4
    elif varient == "southern":
        varient = 2
    elif varient == "western":
        varient = 6
    elif varient == "informal":
        varient = Infinity
    else:
        varient = Infinity
    returnData = returnData.split(" ")
    for i in range(len(returnData)):
        if ((returnData[i] != "|") and (returnData[i] != "||") and ("0" not in returnData[i]) and ("1" not in returnData[i]) and ("2" not in returnData[i]) and ("3" not in returnData[i]) and ("4" not in returnData[i]) and ("5" not in returnData[i]) and ("6" not in returnData[i]) and ("7" not in returnData[i]) and ("8" not in returnData[i]) and ("9" not in returnData[i]) and (not (returnData[i] == "."))):
            if (returnData[i] == ""):
                break
            elif varient == -1:
                returnData[i] = GETOL(GETOL(GETOL(returnData[i], type), type), type)
            elif len(returnData[i]) >= varient:
                returnData[i] = GETOL(returnData[i], type)
            elif (len(returnData[i]) > 2) and (varient < 7):
                returnData[i] = returnData[i][::-1].lower()
                minusOne = returnData[i][-1]
                minusTwo = returnData[i][-2] if len(returnData[i]) >= 2 else ""
                minusThree = returnData[i][-3] if len(returnData[i]) >= 3 else ""
                minusFive = returnData[i][-5] if len(returnData[i]) >= 5 else ""
                returnData[i] = returnData[i].replace(minusOne, "").replace(minusTwo, "")
                returnData[i] = returnData[i].replace(returnData[i][0], minusOne, 1)
                returnData[i] = f"{minusOne}e{minusFive}e{minusThree}o{minusOne}{minusTwo}a{returnData[i]}am"
            else:
                returnData[i] = returnData[i][::-1]
                returnData[i] = remove_consecutive_duplicates(returnData[i])
                minusOne = returnData[i][-1]
                minusTwo = returnData[i][-2] if len(returnData[i]) >= 2 else ""
                minusThree = returnData[i][-3] if len(returnData[i]) >= 3 else ""
                minusFour = returnData[i][-4] if len(returnData[i]) >= 4 else ""
                minusFive = returnData[i][-5] if len(returnData[i]) >= 5 else ""
                returnData[i] = list(returnData[i])
                returnData[i][-1] = returnData[i][0]
                returnData[i][0] = minusOne
                returnData[i] = "".join(returnData[i])
                returnData[i] = f"{minusFour}a{returnData[i]}"
        
        if not(returnData[i][0] == ".") and True and not(varient > 100):
            if (varient == "informal"): #COME BACK TO LATER
                text = remove_consecutive_duplicates(text)
            returnData[i] = replace(returnData[i])
        elif returnData[i][0] == ".":
            returnData[i] = returnData[i].replace(".", "\"")
            returnData[i]  = returnData[i] + "\""
        elif varient > 100:
            returnData[i] = "".join(returnData[i])
            returnData[i] = replace(returnData[i])
            if returnData[i][len(returnData[i]) - 1] == "n":
                returnData[i] = list(returnData[i])
                returnData[i][-1] = "o"
                returnData[i] = "".join(returnData[i])
    returnData = " ".join(returnData)
    #returnData = returnData.replace(",", " ")
    returnData = returnData.replace(" || ", ", ").replace(" |", "| ").replace("  ", " ").replace("  ", " ")
    if varient > 100:
        returnData = remove_consecutive_duplicates(returnData)
    returnData = returnData.replace("ak", "a")
    return returnData
translateText = "Emerald Of Everything"
translate(translateText, varient["normal"])
translate(translateText, varient["informal"])
translate(translateText, varient["formal"])
translate(translateText, varient["northern"])
translate(translateText, varient["southern"])
translate(translateText, varient["western"])
translate(translateText, varient["old"])
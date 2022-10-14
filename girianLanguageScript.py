from numpy import Infinity


def help():
    print("Girian Language Script v1.4 \n To use this, simply... UPDATE SOON")
def replace(value = ""):
    value = value.replace("", "")
    value = value.replace("kc", "k").replace("ck", "k")
    value = value.replace("wh", "w").replace("hw", "h")
    value = value.replace("q", "k").replace("x", "k")
    value = value.replace("ae", "a").replace("oe", "o").replace("ea", "e").replace("eo", "e")
    value = value.replace("ee", "e").replace("ee", "e").replace("ee", "e").replace("ee", "e")
    value = value.replace("aa", "a").replace("aa", "a").replace("aa", "a").replace("aa", "a")
    value = value.replace("oo", "o").replace("oo", "o").replace("oo", "o").replace("oo", "o")
    value = value.replace("uu", "u").replace("uu", "u").replace("uu", "u").replace("uu", "u")
    value = value.replace("ac", "as").replace("ca", "sa")
    value = value.replace("ic", "is").replace("ci", "ce")
    value = value.replace("uc", "ic").replace("cu", "su")
    value = value.replace("gn", "ng").replace("ht", "th")
    value = value.replace("an", "on").replace("na", "no")
    value = value.replace("nu", "ny").replace("un", "yn")
    value = value.replace("'", "")
    return value
varient = {
    "normal": "normal",
    "informal": "informal",
    "formal": "formal",
    "northern": "northern",
    "southern": "southern",
    "eastern": "eastern",
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
    if (type != "m") & (type != "f"):
        type = "m"
    text = text.replace("\n", " ").replace("	", " ")
    while (text != text.replace("  ", " ")):
        text = text.replace("  ", " ")
    print(GETOLF(text, varient, type, simplified))
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
    elif varient == "eastern":
        varient == 2
    elif varient == "western":
        varient = 6
    elif varient == "informal":
        varient = Infinity
    else:
        varient = Infinity
    returnData = returnData.split(" ")
    for i in range(len(returnData)):
        if ((returnData[i] != "|") and (returnData[i] != "||") and ("0" not in returnData[i]) and ("1" not in returnData[i]) and ("2" not in returnData[i]) and ("3" not in returnData[i]) and ("4" not in returnData[i]) and ("5" not in returnData[i]) and ("6" not in returnData[i]) and ("7" not in returnData[i]) and ("8" not in returnData[i]) and ("9" not in returnData[i]) and (not (returnData[i][0] == "."))):
            if (returnData[i] == ""):
                break
            elif varient == -1:
                returnData[i] = GETOL(GETOL(GETOL(returnData[i], type), type), type)
            elif len(returnData[i] >= varient):
                returnData[i] = GETOL(returnData[i], type)
            elif (len(returnData[i]) > 2) and (varient < 7):
                returnData[i] = returnData[i][::-1].lower()
                minusOne = returnData[i][-1]
                minusTwo = returnData[i][-2] if len(returnData[i]) >= 2 else ""
                minusFour = returnData[i][-4] if len(returnData[i]) >= 4 else ""
                minusFive = returnData[i][-5] if len(returnData[i]) >= 5 else ""
                returnData[i] = returnData[i].replace(minusOne, "").replace(minusTwo, "")
                returnData[i] = returnData[i].replace(returnData[i][0], minusOne, 1)
                returnData[i] = f"{minusFour}a{returnData[i]}"
                # COMPLETED UNTIL LINE 178
print(replace("eeeeeeeeeeeeeeeeen this is an example of something haha"))
print(remove_consecutive_duplicates("hiiii"))
print(format("hello. this is something, I think? or is it? I really don't know. "))
print(GETOL("hello"))

/*const OT = require("./TheOldTongue")
const OO = require("./OldOphidian")
const OP = require("./Ophidian")
const VO = require("./Viperosian")
const VA = require("./Viperal")
const VI = require("./Viperish")
const SS = require("./Ssyrinthonic")
*/
import * as TOT from "./TheOldTongue.js"
import * as OOP from "./OldOphidian.js"
import * as OPH from "./Ophidian.js"
import * as VIO from "./Viperosian.js"
import * as VIA from "./Viperal.js"
import * as VII from "./Viperish.js"
import * as SSY from "./Ssyrinthonic.js"
import * as ReadLine from "readline"
/*TOT.translate("hello worlldldlfld")
OOP.translate("hello worlldldlfld")
OPH.translate("hello worlldldlfld")
VIO.translate("hello worlldldlfld")
VIA.translate("hello worlldldlfld")
VII.translate("hello worlldldlfld")
SSY.fictionalLanguage("hello worlldldlfld")
*/

const readline = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("")
readline.question('English: ', name => {
    console.log("")
    TOT.translate(name.split("***"), "translated", "old")
    console.log("")
    OOP.translate(name.split("***"), "translated", "western")
    console.log("")
    OPH.translate(name.split("***"))
    console.log("")
    console.log("" + VIO.translate(name.split("***")[0], true, VIO.varientL))
    console.log("")
    console.log("" + VIA.translate(name.split("***")[0], true, VIA.varientL))
    console.log("")
    VII.translate(name, 0)
    console.log("")
    console.log("Ssyrinthonic: " + SSY.fictionalLanguage(name))
    readline.close()
})
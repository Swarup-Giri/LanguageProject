import * as TOT from "./TheOldTongue.js"
import * as OOP from "./OldOphidian.js"
import * as OPH from "./Ophidian.js"
import * as VIO from "./Viperosian.js"
import * as VIA from "./Viperal.js"
import * as VII from "./Viperish.js"
import * as SSY from "./Ssyrinthonic.js"
import * as ARC from "./Arcanith.js"
import * as ReadLine from "readline"

const readline = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log(`
██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗██╗██╗██╗
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝██║██║██║
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  ██║██║██║
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  ╚═╝╚═╝╚═╝
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗██╗██╗██╗
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝╚═╝╚═╝
                                                                       
██╗   ██╗██████╗     ██████╗    ██╗                                    
██║   ██║╚════██╗   ██╔═████╗  ███║                                    
██║   ██║ █████╔╝   ██║██╔██║  ╚██║                                    
╚██╗ ██╔╝██╔═══╝    ████╔╝██║   ██║                                    
 ╚████╔╝ ███████╗██╗╚██████╔╝██╗██║                                    
  ╚═══╝  ╚══════╝╚═╝ ╚═════╝ ╚═╝╚═╝                                    
                                                                       
`)
readline.question('English: ', name => {
    console.log("")
    TOT.translate(name.split("***"), "translated", "old")
    console.log("")
    OOP.translate(name.split("***"), "translated", "western")
    console.log("")
    OPH.translate(name.split("***"))
    console.log("")
    console.log("Arcanith: " + ARC.translate(VIA.translate(OPH.translate(name.split("***"), 'original').split("***")[0], true, VIA.varientL)))
    console.log("")
    console.log("Brolvith: " + ARC.translate(OPH.translate(VIA.translate(name.split("***")[0], true, VIA.varientL).split("***"), 'original')))
    console.log("")
    console.log("Abolnith: " + OPH.translate(ARC.translate(OPH.translate(VIA.translate(ARC.translate(name).split("***")[0], true, VIA.varientL).split("***"), 'original')).split("***"), 'original'))
    console.log("")
    console.log("Old Viperosian: " + OPH.translate(VIO.translate(name.split("***")[0], true, VIO.varientL).split("***"), 'original', "western"))
    console.log("")
    console.log("Viperosian: " + VIO.translate(name.split("***")[0], true, VIO.varientL))
    console.log("")
    console.log("Vipthonian: " + VIO.translate(VIO.translate(VIO.translate(name.split("***")[0], true, VIO.varientL).split("***")[0], true, VIO.varientL).split("***")[0], true, VIO.varientL))
    console.log("")
    console.log("Viperal: " + VIA.translate(name.split("***")[0], true, VIA.varientL))
    console.log("")
    VII.translate(name, 0)
    console.log("")
    console.log("Ssyrinthonic: " + SSY.fictionalLanguage(name))
    readline.close()
})
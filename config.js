const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6282257529886@s.whatsapp.net"]
global.nomerOwner = "6282257529886"
global.nomorOwner = ['6282257529886']
global.nameGEDE = "DMSS"
global.namaDeveloper = "dmss-slebww"
global.namaBot = "Sadbot WhatsApp"
global.packname = ""
global.author = "Sticker By dmss"
global.thumb = fs.readFileSync("./thumb.png")

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By KirBotz
Base Ori By KirBotz
Ubah Nomor Owner?
Ganti Di File ./owner.json
Harap Jangan Jual Sc Ini
Karena Sc Ini Free Langsung Dari
Youtube : https://youtube.com/@kangbotwhatsapp

*/
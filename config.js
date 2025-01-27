import { watchFile, unwatchFile } from 'fs'  
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 
import { en, es, id, ar, pt } from './lib/idiomas/total-idiomas.js' 

//⊱ ━━━━━.⋅ Añada los numeros a ser Propietario/a | Add the numbers to be Owner ⋅.━━━━ ⊰   

global.owner = [
['573203993812', '⚡Tekⱥshi⚡', true], 
['573105514142', '𝙊𝙬𝙣𝙚𝙧 (1) 💻', true], 
['573116344909', '𝙊𝙬𝙣𝙚𝙧 (2) 💻', true],
['573105514142', '𝘾𝙪𝙨𝙩𝙤𝙢𝙚𝙧 𝙎𝙪𝙥𝙥𝙤𝙧𝙩 🤖', true],
['593968585383'], 
['59894808483'],
['5217441745001'],
['5492266613038']]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.mods = [] 
global.prems = []
   
  
/*⊱ ━━━━━.⋅ IDIOMA : LENGUAJE ⋅.━━━━ ⊰  
Agrega el Idioma que quieres que tenga GataBotLite-MD
Add the language you want GataBotLite-MD to have
  es = Español         id = Bahasa Indonesia
  en = English         pt = Português 
  ar = عرب
*/
global.lenguajeGB = es  //<--- [es, en, ar, id, pt] Escribir el código de Idioma
 
//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


global.openai_key = 'sk-0'
/* Consigue tu ApiKey en este enlace: https://platform.openai.com/account/api-keys */

global.openai_org_id = 'org-3'
/* Consigue tu ID de organizacion en este enlace: https://platform.openai.com/account/org-settings */


global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = 'SGWN'
global.itsrose = ['4b146102c4d500809da9d1ff']

global.APIs = { 
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',	
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',	
  rose: 'https://api.itsrose.site',
  popcat : 'https://api.popcat.xyz',
  xcoders : 'https://api-xcoders.site'
},
global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren'
}

global.mods = [] 


/*************************/
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

//⊱ ━━━━━.⋅ Sticker WM ⋅.━━━━ ⊰

global.packname = '⚡Tekⱥshi⚡'
global.author = 'Juancho'

//⊱ ━━━━━.⋅ Versión | Nombre | cuentas ⋅.━━━━ ⊰

global.official = [ // Agregate si eres Owner
['573203993812', 'cuajose 💻', 1], 
['573105514142', '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1],  
['573105514142', '𝘾𝙪𝙨𝙩𝙤𝙢𝙚𝙧 𝙎𝙪𝙥𝙥𝙤𝙧𝙩 💻 ', 1],
['573105514142', '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1]] 

global.mail = 'rojasreinoso27@gmail.com' //agrega tú correo
global.desc = 'bot con herramientas' //agrega una descripción corta
global.desc2 = '' //agrega una descripción larga (Solo se aplicará si su whasapp no tiene descripción)
global.country = 'Co' //agrega tú país ejemplo: 🇪🇨

global.vs = '1.0.1'
global.vsJB = '3.0'

global.gt = '𝙂𝙖𝙩𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿'
global.yt2 = 'https://www.youtube.com/watch?v=Ko019wvu2Tc&t=71s'
global.ig = 'https://www.instagram.com/juanchorojas7894'
global.md = 'https://github.com/Juancho92/Tekashi'

global.nna = 'https://chat.whatsapp.com/DVhu9S9Zr7cBFFl26N61U3' //UPDATE GATABOT
global.nna2 = 'https://chat.whatsapp.com/IXZ0aBryB1cHjNxe0VIm76' //Help
global.nn = 'https://chat.whatsapp.com/IXZ0aBryB1cHjNxe0VIm76' //Grupo 1
global.nnn = 'https://chat.whatsapp.com/DUU638FK74P7KWmRAd4u4J' //Grupo 2
global.nnnt = 'https://chat.whatsapp.com/Kt5EXwUhcO8Ay76CIDLs7d' //Grupo 3
global.nnntt = 'https://chat.whatsapp.com/K0UCo7igED92q9c1w2DiEH' //Grupo 4
global.nnnttt = 'https://chat.whatsapp.com/HJLpWS2BDrWCPH6uAUKIRG' //Grupo 5
global.nnnttt2 = 'https://chat.whatsapp.com/F63pQpKCsWiF2zFXxhYnky' //Grupo 6 COL
global.nnnttt3 = 'https://chat.whatsapp.com/CcJKHrxGBWAAH3PiBL07JS' //Grupo 7 COL
global.nnnttt4 = 'https://chat.whatsapp.com/ErnXC51D9lWJtRWOD4stR2' //Grupo 8 COL
global.nnnttt5 = 'https://chat.whatsapp.com/Gv6wY102k9v4I2MrXPicOT' //Grupo 9 COL
global.paypal = 'https://paypal.me/OficialGD'
global.asistencia = 'Wa.me/573105514142' //Dudas? escríbeme...

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ Información | Information ⋅.━━━━ ⊰

global.wm = '⚡Tekⱥshi⚡ : Juancho'
global.igfg = '𝙂𝙖𝙩𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿'
//global.wait = lenguajeGB.smsWait()
global.nomorown = owner[0][0]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ IMG ⋅.━━━━ ⊰

global.imagen1 = fs.readFileSync('./media/menus/Menu3.jpg')
global.imagen2 = fs.readFileSync('./media/menus/img1.jpg')
global.imagen3 = fs.readFileSync('./media/menus/img2.jpg')
global.imagen4 = fs.readFileSync('./media/menus/img3.jpg')
global.imagen5 = fs.readFileSync('./media/menus/img4.jpg')
global.imagen6 = fs.readFileSync('./media/menus/img5.jpg')
global.imagen7 = fs.readFileSync('./media/menus/img6.jpg')
global.imagen8 = fs.readFileSync('./media/menus/img7.jpg')
global.imagen9 = fs.readFileSync('./media/menus/img8.jpg')
global.imagen10 = fs.readFileSync('./media/menus/img9.jpg')
global.imagen11 = fs.readFileSync('./media/menus/img10.jpg')
global.imagen12 = fs.readFileSync('./media/menus/img11.jpg')
global.imagen13 = fs.readFileSync('./media/menus/img12.jpg')

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//━━━━━━━━━━━━━━ img ━━━━━━━━━

global.img = 'https://i.imgur.com/6awaI6K.jpg'
global.img2 = 'https://i.imgur.com/4C22IOp.jpg'

global.img3 = 'https://i.imgur.com/RMCge6S.jpg' //ft rectangular

//global.img3 = 'https://i.imgur.com/oUAGYc2.jpg' //prem   //no
//global.img4 = 'https://i.imgur.com/i0pccuo.jpg' //prem   //no

global.img5 = 'https://i.imgur.com/fdo8bGg.jpg'
global.img6 = 'https://i.imgur.com/5H6wSR0.jpg'
global.img7 = 'https://i.imgur.com/2K2bwtr.jpg'
global.img8 = 'https://i.imgur.com/j0cmeJw.jpg'
global.img9 = 'https://i.imgur.com/XMJvwCY.jpg'

global.img10 = 'https://i.imgur.com/J6yBAuK.jpg'
global.img11 = 'https://i.imgur.com/rLGxBMI.jpg'
global.img12 = 'https://i.imgur.com/ZsE6ow9.jpg'
global.img13 = 'https://i.imgur.com/UgBZLsr.jpg'
global.img14 = 'https://i.imgur.com/YDSaPCs.jpg'
global.img15 = 'https://i.imgur.com/GORchEj.jpg'

//global.img16 = 'https://i.imgur.com/11MRjo4.jpeg' //+18   //no

global.img17 = 'https://i.imgur.com/LNftyVj.jpg'
global.img18 = 'https://i.imgur.com/aeBjkBU.jpg'
global.img19 = 'https://i.imgur.com/VLGq8gp.jpg'
global.img20 = 'https://i.imgur.com/FGevVKq.jpg'
global.img21 = 'https://i.imgur.com/CnnzfOh.jpg'

global.img21 = 'https://i.imgur.com/wtwbLrf.jpg' //paypal

global.welgata = [ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb]
global.redesMenu = [nna, nn, nnn, nnnt, nnntt, nnnttt, nnnttt2, nnnttt3, nnnttt4, nnnttt5, md, ig, paypal, yt, asistencia, fb]
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18, img19, img20, img21]
global.gataImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'
global.htjava = '⫹⫺'
global.wait = lenguajeGB['smsMeWait']()

global.multiplier = 60 // Cuanto más alto, más difícil subir de nivel 

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.bold.greenBright(lenguajeGB['smsConfigBot']().trim()))
import(`${file}?update=${Date.now()}`)
})

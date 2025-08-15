import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = '' //Ejemplo: 525218138672

//*──ׄ✞ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.owner = [
  ['51936994155', '🜲 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 👻', true],
  ['51936994155'],
  [''], // Espacio 1
  [''], // Espacio 2
  ['']  // Espacio 3
];

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.mods = []
global.suittag = ['5215211111111'] 
global.prems = []

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.8'
global.vs = '2.0.0'
global.languaje = 'Español'
global.nameqr = 'Ghost Mode- Bot'
global.sessions = 'ghostSession'
global.jadi = 'ghostJadiBot'
global.ghostJadibts = true

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.packsticker = `
┃ ✞ 𝙱𝙾𝚃: 𝙶𝚑𝚘𝚜𝚝 𝙱𝚘𝚝 𝚂𝚞𝚙𝚛𝚎𝚖𝚎 ☘
┃ ✞ 𝙰𝚄𝚃𝙾𝚁: @𝚎𝚟𝚘𝚕𝚞𝚝𝚒𝚘𝚗.𝚑𝚊𝚌𝚔 👑ᚲ`;

global.packname = `✠ 𝗚𝗵𝗼𝘀𝘁 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲 ☘ `;
global.author = `
⇝ 📆 ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}
⇝ ⏰ ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}
♾━━━━━━━━━━━━━━━♾`;

global.wm = '𝗚𝗵𝗼𝘀𝘁 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲 ☘';
global.titulowm = '𝗚𝗵𝗼𝘀𝘁 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲 ☘';
global.igfg = '@𝗲𝘃𝗼𝗹𝘂𝘁𝗶𝗼𝗻.𝗵𝗮𝗰𝗸'
global.botname = '𝗚𝗵𝗼𝘀𝘁 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲 ☘'
global.dev = '©𝗲𝘃𝗼𝗹𝘂𝘁𝗶𝗼𝗻.𝗵𝗮𝗰𝗸 ⚡'
global.textbot = '𝗚𝗵𝗼𝘀𝘁 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲  : @𝗲𝘃𝗼𝗹𝘂𝘁𝗶𝗼𝗻.𝗵𝗮𝗰𝗸'
global.gt = '͟͞𝗚𝗵𝗼𝘀𝘁 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲 ☘͟͞';
global.namechannel = '𝗚𝗵𝗼𝘀𝘁 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲 / @𝗲𝘃𝗼𝗹𝘂𝘁𝗶𝗼𝗻.𝗵𝗮𝗰𝗸'

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.moneda = 'moneda'

//• ↳ ◜𝑳𝑰𝑵𝑲𝑺  𝐓𝐇𝐄 𝐋𝐄𝐆𝐄𝐍𝐃𝐒 ™◞ • 🌿
global.gp4 = 'https://chat.whatsapp.com/I4yJ2vrlhGXH3JRg06mxFZ' //Grupo Oficial De black clover 
global.gp1 = 'https://chat.whatsapp.com/I4yJ2vrlhGXH3JRg06mxFZ' //Grupo 2
global.gp2 = 'https://chat.whatsapp.com/I4yJ2vrlhGXH3JRg06mxFZ'//
global.channel = 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m' //Canal Oficial
global.channel2 = 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m' //Canal test 
global.yt = 'https://www.youtube.com/' //Canal De Youtube
global.md = 'https://github.com' //Github Oficial
global.correo = ''
global.cn ='https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m';

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363419947391620@newsletter',
}
global.multiplier = 70

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

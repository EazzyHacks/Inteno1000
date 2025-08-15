import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

  const namegrupo = 'Grupo Oficial'
  const gp1 = 'https://chat.whatsapp.com/I4yJ2vrlhGXH3JRg06mxFZ' // ← tu link real

  const namechannel = 'Canal del Bot'
  const channel = 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m' // ← tu canal real

  const dev = '👾 Desarrollador: @evolution.hack'
  const catalogo = 'https://files.catbox.moe/z604jy.jpeg' // o './media/grupos.jpg'
  const emojis = '📡'

  let grupos = `
╭─⟪ *🌐 GRUPOS OFICIALES * 
│
│ ⚔️ *${namegrupo}*
│ ${gp1}
│
│ ⚡ *${namechannel}*
│ ${channel}
│
│ ${dev}
╰─────────────────╯
`

  await conn.sendFile(m.chat, catalogo, 'grupos.jpg', grupos.trim(), m)
  await m.react(emojis)
}

handler.help = ['grupos']
handler.tags = ['info']
handler.command = ['grupos', 'links', 'groups']

export default handler

const { sticker5 } = require('../lib/sticker')
const fs = require('fs')
let handler = async (m, {conn, text}) => {
  if (!text) throw ('mana teksnya')
  buf = await conn.getBuffer(`https://viko-api.herokuapp.com/api/maker/ttp?apikey=rxking&text=${text}`)
  await fs.writeFileSync('./ttp.webp', buf)
  api = await sticker5('./ttp.webp', '', packname, author)
  conn.sendFile(m.chat, api, '', '', m)
  await fs.unlinkSync('./ttp.webp')
}

handler.help = ['ttp'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(ttp)$/i

module.exports = handler

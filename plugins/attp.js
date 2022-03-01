const {sticker5, sticker} = require('../lib/sticker')
let handler = async (m, {conn, text}) => {
  if (!text) throw ('mana teksnya')
  api = await conn.getBuffer(`https://viko-api.herokuapp.com/api/maker/attp?apikey=rxking&text=${text}`)
  conn.sendMessage(m.chat, {sticker:api},{quoted:m}) 
}

handler.help = ['attp'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(attp)$/i

module.exports = handler

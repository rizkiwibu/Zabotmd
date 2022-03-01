let handler = async (m, {conn, text}) => {
  if (!text) throw ('mana teksnya')
  api = await conn.getBuffer(`https://viko-api.herokuapp.com/api/maker/ttp?apikey=rxking&text=${text}`)
  conn.sendMessage(m.chat, {sticker:api},{quoted:m}) 
}

handler.help = ['ttp'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(ttp)$/i

module.exports = handler

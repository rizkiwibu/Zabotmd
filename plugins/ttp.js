let handler = async (m, {conn, text}) => {
  if (!text) throw ('mana teksnya')
  api = await conn.sendFile(m.chat, `https://viko-api.herokuapp.com/api/maker/ttp?apikey=rxking&text=${text}`, '', '', m)
}

handler.help = ['ttp'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(ttp)$/i

module.exports = handler

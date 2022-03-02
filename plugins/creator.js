const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = "BEGIN:VCARD\nVERSION:3.0\nN:1;ikyBot-MD;;;\nFN:rizkkBot-MD\nitem1.TEL;waid=6283817161861:+62 838 1716 1861\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:ikyBot-MD\nEND:VCARD"
                conn.sendMessage(m.chat, { contacts: { contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler

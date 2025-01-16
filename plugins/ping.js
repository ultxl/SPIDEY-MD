

const config = require('../config')
let fs = require('fs')
const os = require("os")
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "ping",
    react: "⚡",
    alias: ["speed"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '*𝙱𝚄𝙼𝙱𝙻𝙴𝙱𝙴𝙴 sᴘᴇᴇᴅ🚕........*'  }, { quoted: mek } )
var final = new Date().getTime();
await conn.sendMessage(from, { delete: ping.key })
return await conn.sendMessage(from , { text: '*☄️𝙻𝙰𝚃𝙴𝙽𝙲𝚈*\n *' + (final - inital) + ' 𝙼𝚂* '  }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})

const {cmd , commands} = require('../command')

cmd({
    pattern: "support",
    desc: "support bot",
    category: "main",
    react: "💖",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello 𝚑𝚞𝚖𝚊𝚗 ${pushname}*
          

* 🇰🇪Support Channels💗*

👨‍💻◦ Whatsapp  Link:* https://chat.whatsapp.com/EWjLvrXVLzp3Vxn859FXHD

👨‍💻◦ *Telegram Link:* t.me/techhami

👨‍💻◦ *Github Profile Link:* https://github.com/ultxl

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙱𝚞𝚖𝚋𝚕𝚎𝚋𝚎𝚎*
`
await conn.sendMessage(from,{image:{url: `https://i.imgur.com/KUUYRbq.jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})

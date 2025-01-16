const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "💖",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello 𝚑𝚞𝚖𝚊𝚗 ${pushname}*
          
📍𝖱𝖾𝗉𝗈 𝖫𝗂𝗇𝗄 ❤️‍🔥👇

👨‍💻◦ https://github.com/kingmalvn/Arab-v2

📍𝖯𝗅𝖾𝖺𝗌𝖾 𝖥𝗈𝗅𝗅𝗈𝗐 𝖬𝗒 𝖶𝗁𝖺𝗍𝗌𝖺𝗉𝗉 𝖢𝗁𝖺𝗇𝗇𝖾𝗅s 👇

👨‍💻◦ https://chat.whatsapp.com/CNZlSoRwP1eFOte9SvJFkD

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙱𝚞𝚖𝚋𝚕𝚎𝚋𝚎𝚎*
`
await conn.sendMessage(from,{image:{url: `https://i.imgur.com/KUUYRbq.jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})

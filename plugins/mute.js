
const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "mute",	
    alias: ["lock"],
    react: "🔒",
    desc: "mute group.",
    category: "group",
    filename: __filename,
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
if (!isOwner || !isAdmins) return;


if (!m.isGroup) return reply(mg.onlygroup);
if (!isBotAdmins) return reply(mg.needbotadmins);     
            await conn.groupSettingUpdate(m.chat, "announcement")
           const mass = await conn.sendMessage(m.chat, { text: '*ɢʀᴏᴜᴘ ᴄʜᴀᴛ ᴍᴜᴛᴇᴅ ʙʏ 𝙱𝚄𝙼𝙱𝙻𝙴𝙱𝙴𝙴* 🔒' }, { quoted: mek });
            return await conn.sendMessage(m.chat, { react: { text: '🔒', key: mass.key } });
} catch(e) {
console.log(e);
reply('*PLEASE 𝙼𝙰𝙺𝙴 ME 𝙰𝙽 ADMIN ❗*')    
} 
})
cmd({
    pattern: "unmute",	
    alias: ["unlock"],
    react: "🔓",
    desc: "unmute group.",
    category: "group",
    filename: __filename,
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
if (!isOwner || !isAdmins) return;


if (!m.isGroup) return reply(mg.onlygroup);
if (!isBotAdmins) return reply(mg.needbotadmins);     
            await conn.groupSettingUpdate(m.chat, "not_announcement")
           const mass = await conn.sendMessage(m.chat, { text: '*ɢʀᴏᴜᴘ ᴄʜᴀᴛ ᴜɴᴍᴜᴛᴇᴅ ʙʏ 𝙱𝚄𝙼𝙱𝙻𝙴𝙱𝙴𝙴 ᴠ2* 🔒' }, { quoted: mek });
            return await conn.sendMessage(m.chat, { react: { text: '🔒', key: mass.key } });
} catch(e) {
console.log(e);
reply('*PLEASE 𝙼𝙰𝙺𝙴 ME 𝙰𝙽 ADMIN ❗*')    
} 
})


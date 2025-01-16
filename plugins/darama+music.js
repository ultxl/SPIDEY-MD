


const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "ytmp3",
    desc: "To download songs.",
    react: "⏳",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
╭─┈┄┄┉┉┉┅┅┅┅──┅┅┅┅┅┅╮
  *𝙱𝚄𝙼𝙱𝙻𝙴𝙱𝙴𝙴 sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*
╰─┈┄┄┉┉┉┅┅┅┅──┅┅┅┅┅┅╯

➥ *ᴛɪᴛʟᴇ:* ${data.title} 
➥ *ᴅᴜʀᴀᴛɪᴏɴ:* ${data.timestamp} 
➥ *ᴠɪᴇᴡs:* ${data.views} 
➥ *ᴜᴘʟᴏᴀᴅᴇᴅ ᴏɴ:* ${data.ago} 
➥ *ʟɪɴᴋ:* ${data.url} 

╰─┈┄┄┉┉┉┅┅┅┅──┅┅┅┅┅┅◊
 

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙼𝙰𝙻𝙸𝙱𝚄*
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"*© Gᴇɴᴇʀᴀᴛᴇᴅ 𝙱𝚈 𝙱𝙴𝙴❤️🌟*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('${e}')
}
})

//====================video_dl=======================

cmd({
    pattern: "ytmp4",
    alias: ["video2"],
    desc: "To download videos.",
    react: "🎥",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
╭─┈┄┄┉┉┉┅┅┅┅──┅┅┅┅┅┅╮
  *𝙱𝙴𝙴 ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*
╰─┈┄┄┉┉┉┅┅┅┅──┅┅┅┅┅┅╯

➥ *ᴛɪᴛʟᴇ:* ${data.title} 
➥ *ᴅᴜʀᴀᴛɪᴏɴ:* ${data.timestamp} 
➥ *ᴠɪᴇᴡs:* ${data.views} 
➥ *ᴜᴘʟᴏᴀᴅᴇᴅ ᴏɴ:* ${data.ago} 
➥ *ʟɪɴᴋ:* ${data.url} 

╰─┈┄┄┉┉┉┅┅┅┅──┅┅┅┅┅┅◊

> *© ᴄʀᴇᴀᴛᴇᴅ ʙʏ 𝙱𝚄𝙼𝙱𝙻𝙴𝙱𝙴𝙴*
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙼𝙰𝙻𝙸𝙱𝚄*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('${e}')
}
})

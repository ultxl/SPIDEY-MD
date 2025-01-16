const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
///=================When editing, do not accidentally delete anything !!MAIN-CONFIG=================================
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUFvWXJZaGFPNk5INUtsNDd3L0Z5eVBnYnJwZDN3MVBEQnZjUDNxcElsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUdtNUYwNkpIYXFkbDdZZ1g5M1B1QVFzYlp4WWtmcEdJVU1KcTUzcFpDTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRDZ5enBaYk5kQkZZaDlBcDNxTVVDWXZmL2hlNitTYW5nOUUrd3VWK2xVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSlRQYnVacEpINUNHSjJ3ZEVNTVlueDEybUZCQlFVUEdmUHFPbjFlOVJjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVPeVNMbytWalZnU01BNUNHTWNxQWNqNGkrc0s1aHM0aDhCbEhPRjcvSEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJjREdJaDgza2pwZU11TlNvQUdVR3dqMDJDNUdWOW9LbDVoeHc0UGM2aXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0lCaVlrS2lkNit2NmFLUkhVeGNiMktyRkJ4MnpyVU1pQU9DUUp5R3kxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicC9nRThhUFB0YmNMZlB5R05HOWU1aktiQ0pScmdiV1gzMUQxeU9WMjdsND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5iYVFPTVJKSHBqbkJRenlpZm5HVnVLS2FsNE1UZ3VxK1k5d1lWNVhrZWNkM1YwaFZ2UWhKaElpbTlUdDhzdnZCWDNoTkJwaENITjZSeHh2Q3U4WENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI0LCJhZHZTZWNyZXRLZXkiOiJHNzVvME4zblNBNERzOVpWNG4xSnVMNitaeG44WDhPVEQ0TnE2eXNHZW9rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcxMjI2NzIyNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJERThFREI3MjA2RkQ5REUwODBENDUwOThCNTAzOTNBMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM2OTA4NjY2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYSS1vNWpTUlMzV1FHZzRfRXdiTGd3IiwicGhvbmVJZCI6IjIzNmJhN2Q1LTZjNmMtNDEzOC1iOTA0LThkZGFlZjNkZmYwYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkZUJkT2lyVDFJZnpvQjhTdzdZTUtIc09WbGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1FjdzBHQmpqL1pOUGhMbGtxa1hQM1d6dzhrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdIQTY4SkFRIiwibWUiOnsiaWQiOiIyNTQ3MTIyNjcyMjU6NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSS9jZ2RVRUVPZStuTHdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWGdtYVcvVWJvSmJLUnR6ZFQrZU9TVVBUYnMveEw1RWhuWE16UlgxK04xOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiKzAvcEhWb3d2S1hzTFZiZURkTkZLZVE1dlpGMTVrcEZib3RLOVBid05UYlFuVG1sWmo0QzR0NnNrbHc4ZmwvdWlzQng3NVRMcC83d2J3cnZUVG9VRHc9PSIsImRldmljZVNpZ25hdHVyZSI6Ikh0bG5sSk56bFpoZFI2N0NzY3BSS3ZDZ1NxdU1rRmNIbHp1Ukl6WDJKbmFlOUVWWTh4UFZlVFdXbjJhc1lqQmQ1ZVVpYUU3eG5SM1N6UlVUOUdpYkJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzEyMjY3MjI1OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVjRKbWx2MUc2Q1d5a2JjM1UvbmprbEQwMjdQOFMrUklaMXpNMFY5ZmpkZiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNjkwODY2MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCZlIifQ==",  // 📌 𝗚𝗲𝘁 𝗦𝗲𝘀𝘀𝗶𝗼𝗻 𝗶𝗱 𝗶𝗻 𝗣𝗮𝗶𝗿 𝗦𝗶𝘁𝗲 📌
MODE: process.env.MODE || "public",  // Add Your Bot Mode (groups/privet/public)
PREFIX: process.env.PREFIX || ".",   // Add Your Custom Prefix 
OWNER_REACT: process.env.OWNER_REACT || "true", //📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
BOT_NAME: process.env.BOT_NAME || "Bumblebee",
AUTO_VOICE: process.env.AUTO_VOICE || "true", //📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
AUTO_STICKER: process.env.AUTO_STICKER || "true", //📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
AUTO_REPLY: process.env.AUTO_REPLY || "false", //📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
ANTI_LINK: process.env.ANTI_LINK || "true", //📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
ANTI_BAD: process.env.ANTI_BAD || "false", //📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
FAKE_RECORDING: process.env.FAKE_RECORDING || "false", //📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
AUTO_REACT: process.env.AUTO_REACT || "false", //📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", //📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
///==================Do not change anything below=========================
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/KUUYRbq.jpeg", //do not change alive img url
ALIVE_MSG: process.env.ALIVE_MSG || "𝐇𝐢 𝐚𝐦 𝐁𝐮𝐦𝐛𝐥𝐞𝐛𝐞𝐞 𝐚𝐧 𝐚𝐮𝐭𝐨 𝐛𝐨𝐭 𝐟𝐫𝐨𝐦 𝐚𝐧𝐨𝐭𝐡𝐞𝐫 𝐮𝐧𝐢𝐯𝐞𝐫𝐬 𝐡𝐨𝐰 𝐜𝐚𝐧 𝐢 𝐚𝐬𝐬𝐢𝐬𝐭 𝐲𝐨𝐮🚀", // change alive msg if you wish

//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

  
  
MENU_IMG: process.env.MENU_IMG || "https://i.imgur.com/KUUYRbq.jpeg",
    
};

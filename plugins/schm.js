
import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../config.cjs';

// Get total memory and free memory in bytes
const totalMemoryBytes = os.totalmem();
const freeMemoryBytes = os.freemem();

// Define unit conversions
const byteToKB = 1 / 1024;
const byteToMB = byteToKB / 1024;
const byteToGB = byteToMB / 1024;

// Function to format bytes to a human-readable format
function formatBytes(bytes) {
  if (bytes >= Math.pow(1024, 3)) {
    return (bytes * byteToGB).toFixed(2) + ' GB';
  } else if (bytes >= Math.pow(1024, 2)) {
    return (bytes * byteToMB).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes * byteToKB).toFixed(2) + ' KB';
  } else {
    return bytes.toFixed(2) + ' bytes';
  }
}

// Bot Process Time
const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds

// Uptime
const uptimeMessage = `*I am alive now since ${day}d ${hours}h ${minutes}m ${seconds}s*`;
const runMessage = `*☀️ ${day} Day*\n*🕐 ${hours} Hour*\n*⏰ ${minutes} Minutes*\n*⏱️ ${seconds} Seconds*\n`;

const xtime = moment.ke("Kenya/Nairobi").format("HH:mm:ss");
const xdate = moment.ke("Kenya/Nairobi").format("DD/MM/YYYY");
const time2 = moment().ke("Kenya/Nairobi").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

const test = async (m, Matrix) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const mode = config.MODE === 'public' ? 'public' : 'private';
  const pref = config.PREFIX;

  const validCommands = ['searchmenu', 'search', 'menuai'];

  if (validCommands.includes(cmd)) {
    const str = `╭━━━〔 *Sᴘɪᴅᴇʏ Mᴅ* 〕━━━┈⊷
┃★╭──────────────
┃★│ Owner : *Aᴍ Sᴘɪᴅᴇʏ*
┃★│ User : *${m.pushName}*
┃★│ Baileys : *ᴍᴜʟᴛʏ-ᴅᴇᴠɪᴄᴇ*
┃★│ Type : *ɴᴏᴅᴇ.ᴊs*
┃★│ Mode : *${mode}*
┃★│ Platform : *${os.platform()}*
┃★│ Prefix : [${prefix}]
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷ 
> *ʜᴇʏ ${m.pushName} ${pushwish}*
*╭━━〔 Sᴘɪᴅᴇʏ Mᴅ Mᴇɴᴜ 〕━━┈⊷*
*┃◈╭─────────────·๏*
*┃◈┃• ${prefix}𝙿𝚕𝚊𝚢*
*┃◈┃• ${prefix}𝚈𝚝𝚜*
*┃◈┃• ${prefix}𝙸𝚖𝚍𝚋*
*┃◈┃• ${prefix}𝙶𝚘𝚘𝚐𝚕𝚎*
*┃◈┃• ${prefix}𝙶𝚒𝚖𝚊𝚐𝚎*
*┃◈┃• ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝*
*┃◈┃• ${prefix}𝚆𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛*
*┃◈┃• ${prefix}𝚆𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊*
*┃◈┃• ${prefix}𝚈𝚝𝚜𝚎𝚊𝚛𝚌𝚑*
*┃◈┃• ${prefix}𝚁𝚒𝚗𝚐𝚝𝚘𝚗𝚎*
*┃◈┃• ${prefix}𝙻𝚢𝚛𝚒𝚌𝚜*
*┃◈└───────────┈⊷*
*╰──────────────┈⊷*`;

    await Matrix.sendMessage(m.from, {
      image: fs.readFileSync('./media/slayer4.jpg'),
      caption: str,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363299029326322@newsletter',
          newsletterName: "Sᴘɪᴅᴇʏ Mᴅ",
          serverMessageId: 143
        }
      }
    }, {
      quoted: m
    });

    // Send audio after sending the menu
    await Matrix.sendMessage(m.from, {
      audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/menunew.m4a' },
      mimetype: 'audio/mp4',
      ptt: true
    }, { quoted: m });
  }
};

export default test

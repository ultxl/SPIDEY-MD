const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "spidey-md~0W1bmKhB",
  PREFIX: process.env.PREFIX || '.',
  //let's add menu captions by 𝐀𝐦 𝐒𝐩𝐢𝐝𝐞𝐲
  BOT_NAME: process.env.BOT_NAME || "𝐒𝐏𝐈𝐃𝐄𝐘 𝐌𝐃",
  CAPTION: process.env.CAPTION || "> *𝑃𝑜𝑤𝑒𝑟𝑒𝑑 𝑏𝑦 𝐴𝑚 𝑠𝑝𝑖𝑑𝑒𝑦*",
  // don't use my codes without a permission 🙏
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true,
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : true,
  AUTOLIKE_STATUS: process.env.AUTOLIKE_STATUS !== undefined ? process.env.AUTOLIKE_STATUS === 'true' : false,
  AUTOLIKE_EMOJI: process.env.AUTOLIKE_EMOJI || '🫨', // For liking status updates(stories)
  AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS !== undefined ? process.env.AUTO_REPLY_STATUS === 'true' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || 'Status viewed',
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  /*joel james tech added anti delete cmd*/
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false,
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "𝐀𝐦 𝐒𝐩𝐢𝐝𝐞𝐲",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "254785429940",
  SUDO_NUMBER: process.env.SUDO_NUMBER || "254785429940",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false,
};

// Debugging: Log the AUTO_BIO value to ensure it's set correctly
console.log("AUTO_BIO from .env:", process.env.AUTO_BIO);
console.log("AUTO_BIO in config:", config.AUTO_BIO);

module.exports = config;

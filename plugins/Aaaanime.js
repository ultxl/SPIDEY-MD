import axios from 'axios';
import config from '../../config.cjs';

const quranVideo = async (m, gss) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const validCommands = ['waifu', 'wf', 'waifupic'];

  if (validCommands.includes(cmd)) {
    const videoUrl = `https://api.davidcyriltech.my.id/download/ytmp4`;
await m.React('⏳'); // React with a loading icon
    await gss.sendMessage(
      m.from,
      {
        video: { url: videoUrl },
        caption: `*𝐒𝐏𝐈𝐃𝐄𝐘 𝐌𝐃*\n\nCʀᴇᴀᴛᴇᴅ ʙʏ Aᴍ Sᴘɪᴅᴇʏ`,
      },
      { quoted: m }
    );
  }
};

export default quranVideo;

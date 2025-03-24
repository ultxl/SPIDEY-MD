module.exports = async (context) => {
  const { client, m } = context;

  try {
    // Fetch repository data from GitHub
    const response = await fetch("https://api.github.com/repos/ultxl/SPIDEY-MD");
    const repoData = await response.json();

    // Extract relevant information
    const repoInfo = {
      stars: repoData.stargazers_count,
      forks: repoData.forks_count,
      lastUpdate: repoData.updated_at,
      owner: repoData.owner.login,
      createdAt: repoData.created_at,
      url: repoData.html_url
    };

    // Format dates
    const createdDate = new Date(repoInfo.createdAt).toLocaleDateString("en-GB");
    const lastUpdateDate = new Date(repoInfo.lastUpdate).toLocaleDateString("en-GB");

    // Construct message caption
    const messageCaption = `
      *Hello ,,,👋 This is 𝐒𝐏𝐈𝐃𝐄𝐘 𝐌𝐃*
      The best bot in the universe developed by Aᴍ Sᴘɪᴅᴇʏ. Fork and give a star 🌟 to my repo
      ╭───────────────────
      │✞ *Stars:* ${repoInfo.stars}
      │✞ *Forks:* ${repoInfo.forks}
      │✞ *Release Date:* ${createdDate}
      │✞ *Last Update:* ${lastUpdateDate}
      │✞ *Owner:* ${repoInfo.owner}
      │✞ *Repository:* ${repoInfo.url}
      ╰───────────────────
    `;

    // Define an image URL (replace this with your actual image URL)
    const imageUrl = 'https://telegra.ph/file/17c83719a1b40e02971e4.jpg';  // Replace with the actual image URL

    // Send the generated message to the user
    await client.sendMessage(m.chat, {
      text: messageCaption,
      contextInfo: {
        mentionedJid: [m.sender], // Mention the sender
        externalAdReply: {
          title: "🌟 𝐒𝐏𝐈𝐃𝐄𝐘 𝐌𝐃✨",
          body: "Cʀᴇᴀᴛᴇᴅ ʙʏ Aᴍ Sᴘɪᴅᴇʏ",
          sourceUrl: "https://whatsapp.com/channel/0029VakpYHJ4dTnCaDsMBT1Z",
          mediaUrl: imageUrl,  // Make sure this points to a valid image URL
          mediaType: 1, // Image media type
          renderLargerThumbnail: true
        }
      }
    });

  } catch (error) {
    console.error("Error:", error);
    m.reply('An unexpected error occurred while generating the repo information.');
  }
};

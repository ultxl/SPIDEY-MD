module.exports = async (context) => {
  const { client, m } = context;


  const messageCaption = `
   *Follow my channels and join my  groups for more updates*
  ╭────────────────
  │ *Wachannel:* https://whatsapp.com/channel/0029VakpYHJ4dTnCaDsMBT1Z
    
  │ *wagroup:* https://chat.whatsapp.com/EWjLvrXVLzp3Vxn859FXHD

  │ *Telegram:*  https://t.me/techtevi
    
  │ *Contact owner:* https://wa.me/254785429940

 ╰─────────────────── 
  `;

  // Prepare the image URL
  const image = {
    url: "https://telegra.ph/file/17c83719a1b40e02971e4.jpg"
  };

  // Prepare the message object
  const message = {
    image: image,
    caption: messageCaption
  };

  // Send the message
  await client.sendMessage(m.chat, message, { quoted: m });
};


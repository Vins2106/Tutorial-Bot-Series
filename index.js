const Discord = require("discord.js");
const client = new Discord.Client({
  disableMentions: "everyone",
  fetchAllMember: true
}); 

// Embed
const { MessageEmbed } = require("discord.js");

const config = require("./config.json");

// Make Bot Online
client.login(config.token);

client.on("ready", () => {
  console.log('Ready!')
  
  //set bot status
  client.user.setActivity('with friends!')
});

let prefix = config.prefix;

// Embed color
const color = "RED"

client.on('message', async message => {
  
//   client can't response to another bot
  if (message.author.bot) return;
  
//   client commands can't response on dm channel
  if (message.channel.type === "dm") return;
  
//   commands
  const args = message.content
  .slice(prefix.length)
  .trim()
  .split(/  +/g);
  
  // Error
  const cmd = args.shift().toLowerCase()
  
  if (cmd === 'help')
    {
      const embed = new MessageEmbed()
      .setAuthor(client.user.username + ' Help Center.', client.user.displayAvatarURL())
      .setTitle('prefix **tb!**')
      .setColor(color)
      .addField(`Command Name #1`, `Command Desc #1`, true)
      .addField(`Command Name #2`, `Command Desc #2`, true) 
      .addField(`Command Name #3`, `Command Desc #3`, true)
      .setFooter(`Make by [Your Name]`)
//    .setDescription('content')
//    .setThumbnail('url_image.png')
      
      message.channel.send(embed)
    }
  
  if (cmd === 'ping')
    {
      
//       Update ping command
      message.channel.send(`:ping_pong: Pong! **${client.ws.ping}**ms`)
    }
});
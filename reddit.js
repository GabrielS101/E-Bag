const lib = require("reddit-package");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', async message => {
  if(message.content === "e-meme") { 
    let data = lib.reddit('meme') 
    
    message.channel.send(data.img) //sends the image 
} 
  
})
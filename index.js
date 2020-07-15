const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');

bot.login(process.env.token);

const PREFIX = 'E-';

bot.on('ready', () =>{
    console.log('E-bag is Online!');
})

bot.on('message', message=>{

    let args = message.content. substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'embed':
            const embed = new Discord.RichEmbed()
            .setTitle('User Information')
            .addField('Player Name', message.author.username)
            .addField('Version', Discord.version)
            .addField("Current Server", message.guild.name)
            .setColor(0xFF0000)
            message.channel.sendEmbed(embed);
         break;

        case 'ping':                         //this command is if you want the bot to use prefix and no ping.
            message.channel.send('pong')
            break; 
        case 'Ping':
            message.channel.send('Pong')
            break;                              //keep adding cases and breaks to add on to the command.
        case 'pong':
            message.channel.send('ping')
            break;
        case 'Pong':
            message.channel.send('Ping')
            break;
        case 'Spam':
            message.channel.send('No')
            break;
        case 'invite':
            if(args[1] === 'server'){
                message.channel.send('https://discord.gg/pRXmQUr')}
        case 'invite':
             if(args[1] === 'server'){
                message.channel.send('https://discord.gg/pRXmQUr')}
        case 'Stats':
             if(args[1] === 'C-Moon'){
                message.channel.send('**C-Moon**. Health - 800. Punch - 60. **Heart Invert** - 200 - 6 turn cooldown. **Gravity Change** - 4 Turn Wait/Cooldown - Dodge Opponents Attack. **Minor Time Acceleration** - 5 Turn Wait/Cooldown - Add a 1x to your next move. **Gravity Shift** - 5 Turn Wait/Cooldown - Stun opponent for 2 turns. **Gravitational Wall Slam** - 150 - 4 Turn Cooldown. **Gravitational Force Field** - 4 Turn Wait/Cooldown - Block Your Opponents Next Attack. **Passive:** Gravitational Bending: Your attacks cannot be dodged but can be blocked.')}
         case 'Stats':
             if(args[1] === 'Whitesnake'){
                   message.channel.send('**Whitesnake**. Health - 70. Punch - 70. **Stand Steal** - 3 turn wait - 5 turn cooldown - Stuns Opponent for 1 turn. **Sleep**  - 2 turn wait - 5 turn cooldown - Stuns Opponent for 2 turn. Gun - 150 - 3 Turn Cooldown. **Powerfull Punch** - 130 - 3 Turn Cooldown. **Remote Controlled Mode** - 5 Turn Wait/Cooldown - Makes You Invincible for 1 turn. **Illusion** - 4 Turn Cooldown - Roll a 1-10 dice. If you roll a 4 or Lower than take 100 damage. If you roll 5 or higher deal 100 damage. **Plankton Heal** - 5 Turn Cooldown - Heal 100 Health')}
         case 'Stats':
              if(args[1] === 'Purple Haze Distortion'){
                   message.channel.send('**Purple Haze Distortion**. Health - 800. Punch - 50. **Smoke Shot** - 50x5  - 4 turn cooldown. **Wreckless Punch** - 150 - 3 turn cooldown. **Bulb Breaker** - 100x3 - 4 turn cooldown. **Bulb Throw** - 100x2 - 3 turn cooldown. **Virus Cloud** - 100x4 - 5 turn cooldown - roll a 10 sided die, if u roll under 5 then the damage goes to you. **Aimless Barrage** - 100x3 - 5 turn cooldown. **The Final Stand** - 200x3 - 10 turn cooldown - break a bulb in your mouth and blow it at your opponent and roll out of 10 if you roll under 5 you take 100 damage. **Raging Virus** - And x1 on all your abilities - 5 turn wait')} 
         } 
})

bot.on('message', msg=>{
    if(msg.content === "<insert what you want to say>"){
        msg.reply('<insert what you want the bot to say>');       //this command is if you want the bot to ping you when responding.
    }
})

bot.on('message', message=>{

    let args = message.content. substring(PREFIX.length).split(" ");

    switch(args[0]){
        case '<insert what you want to say>':                         //this command is if you want the bot to use prefix and ping.
            message.reply('<insert what you want the bot to say>')
        break;
    }
})

bot.on('message', msg=>{
    if(msg.content === "I, Giorno Giovanna, Have A Dream"){
        msg.channel.send('Shut The Fuck Up Giorno Before I Make You Drink More Of My Piss');       //this command is if you want no prefix and no ping.
    }
})

bot.on('message', msg=>{
    if(msg.content === "I Giorno Giovanna Have A Dream"){
        msg.channel.send('Shut The Fuck Up Giorno Before I Make You Drink More Of My Piss');
    }
})

bot.on('message', msg=>{
    if(msg.content === "I, GIORNO GIOVANNA, HAVE A DREAM"){
        msg.channel.send('SHUT THE FUCK UP GIORNO BEFORE I MAKE YOU DRINK MORE OF MY PISS');
    }
})

bot.on('message', msg=>{
    if(msg.content === "I GIORNO GIOVANNA HAVE A DREAM"){
        msg.channel.send('SHUT THE FUCK UP GIORNO BEFORE I MAKE YOU DRINK MORE OF MY PISS');
    }
})

bot.on('message', msg=>{
    if(msg.content === "I giorno giovanna have a dream"){
        msg.channel.send('Shut the fuck up giorno before i make you drink more of my piss');
    }
})

bot.on('message', msg=>{
    if(msg.content === "i giorno giovanna have a dream"){
        msg.channel.send('shut the fuck up giorno before i make you drink more of my piss');
    }
})

bot.on('message', msg=>{
    if(msg.content === "I Giorno Giovanna have a dream"){
        msg.channel.send('Shut the fuck up Giorno before i make you drink more of my piss');
    }
})

bot.on('message', msg=>{
    if(msg.content === "I, giorno giovanna, have a dream"){
        msg.channel.send('Shut the fuck up giorno before i make you drink more of my piss');
    }
})

bot.on('message', msg=>{
    if(msg.content === "i, giorno giovanna, have a dream"){
        msg.channel.send('shut the fuck up giorno before i make you drink more of my piss');
    }
})

bot.on('message', msg=>{
    if(msg.content === "I, Giorno Giovanna, have a dream"){
        msg.channel.send('Shut the fuck up Giorno before i make you drink more of my piss');
    }
})

bot.on('message', msg=>{
    if(msg.content === "How To Evolve Whitesnake Into C-Moon"){
        msg.channel.send('**__To Evolve Whitesnake Into C-Moon You Must Do These Steps:__** *On Move 8 Green Baby will appear. Roll a 1-10 dice to determine whether green baby will take interest in you or not. If you roll a prime number he will, if you roll a non prime number he will not. *Once Green Baby takes interest in you you will not be able to move for the next turn. *If you survive the turn and win the game, your Whitesnake will evolve into C-Moon.');
    }
})
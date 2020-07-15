const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');

bot.login(process.env.token);

var PREFIX = 'e-';

var PREFIX = 'E-';

bot.on('ready', () =>{
    console.log('E-bag is Online!');
})

bot.on('message', message=>{

    let args = message.content.slice(PREFIX.length).split(" ");

    switch(args[0]){
        case 'PurpleHazeDistortion':
            const PurpleHazeDistortion = new Discord.MessageEmbed()                //this command is if you want embed with prefix and no ping
            .setTitle('Purple Haze Distortion')
            .addField('Health', '800,')
            .addField('Punch', '50.')
            .addField("Smoke Shot", "50x4 - 4 Turn Cooldown.")
            .addField("Wreckless Punch", '150 - 3 Turn Cooldown.')
            .addField("Bulb Breaker", '100x3 - 4 Turn Cooldown.')
            .addField("Bulb Throw", '100x2 - 3 Turn Cooldown.')
            .addField("Virus Cloud", '100x4 - 5 turn cooldown - roll a 10 sided dice, if u roll under 5 then the damage goes to you.')
            .addField("Raging Virus", 'And x1 on all your abilities - 5 turn wait.')
            .setImage('https://vignette.wikia.nocookie.net/jjba/images/6/6c/Purple_Haze_Distortion.png/revision/latest?cb=20160417072947')
            .setColor(0x753c62)
            message.channel.send(PurpleHazeDistortion);
         break;
         case 'StrayCat':  
            const StrayCat = new Discord.MessageEmbed()             
            .setTitle('Stray Cat')
            .addField('Health', '700.')
            .addField('Punch', '20.')
            .addField("Air Cannon", "100x2 - 4 Turn Cooldown.")
            .addField("Air Bubble Barrage", '5x50 - 4 Turn Cooldown.')
            .addField("Bubble Blast", '100x3 - 5 Turn Cooldown.')
            .addField("Air shield", '5 Turn Cooldown - Block An Attack.')
            .addField("Bubble Trap", '5 Turn Cooldown - Stun The Enemy For One Turn.')
            .setImage("https://vignette.wikia.nocookie.net/jjba/images/5/58/Stray_Cat.png/revision/latest?cb=20160417072845")
            .setColor(0xd41961)
            message.channel.send(StrayCat);
         break;
         case 'Whitesnake':  
            const Whitesnake = new Discord.MessageEmbed()             
            .setTitle('Whitesnake')
            .addField('Health', '700.')
            .addField('Punch', '70.')
            .addField("Stand Steal", "3 turn wait - 5 turn cooldown - Stuns Opponent for 1 turn.")
            .addField("Sleep", '2 turn wait - 5 turn cooldown - Stuns Opponent for 2 turn.')
            .addField("Gun", '150 - 3 Turn Cooldown.')
            .addField("Powerfull Punch", '130 - 3 Turn Cooldown.')
            .addField("Remote Controlled Mode", '5 Turn Wait/Cooldown - Makes You Invincible for 1 turn.')
            .addField("Illusion", '4 Turn Cooldown - Roll a 1-10 dice. If you roll a 4 or Lower than take 100 damage. If you roll 5 or higher deal 100 damage.')
            .addField("Plankton Heal", '5 Turn Cooldown - Heal 100 Health.')
            .setColor(0xb5b3b3)
            message.channel.send(Whitesnake);
         break;        
         case 'C-Moon':  
            const CMoon = new Discord.MessageEmbed()             
            .setTitle('C-Moon')
            .addField('Health', '800.')
            .addField('Punch', '60.')
            .addField("Heart Invert", "200 - 6 turn cooldown.")
            .addField("Gravity Change", '4 Turn Wait/Cooldown - Dodge Opponents Attack.')
            .addField("Minor Time Acceleration", '5 Turn Wait/Cooldown - Add a 1x to your next move.')
            .addField("Gravity Shift", '5 Turn Wait/Cooldown - Stun opponent for 2 turns.')
            .addField("Gravitational Wall Slam", '150 - 4 Turn Cooldown.')
            .addField("Gravitational Force Field", '4 Turn Wait/Cooldown - Block Your Opponents Next Attack.')
            .addField("Passive - Gravitational Bending", 'Your attacks cannot be dodged but can be blocked.')
            .setColor(0x34a857)
            message.channel.send(CMoon);
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
        case 'spam':
            message.channel.send('no')
            break;
        case 'invite':
            if(args[1] === 'server'){
                message.channel.send('https://discord.gg/pRXmQUr')}
        case 'invite':
             if(args[1] === 'server'){
                message.channel.send('https://discord.gg/pRXmQUr')} 
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
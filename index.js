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
            .setImage('https://vignette.wikia.nocookie.net/jjba/images/5/58/Stray_Cat.png/revision/latest?cb=20160417072845')
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
            .setImage('https://i.pinimg.com/originals/75/54/f1/7554f1083f8c38f03aba491f50367b31.png')
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
            .setImage('https://vignette.wikia.nocookie.net/jjba/images/e/e6/C-Moon.png/revision/latest?cb=20190914150927')
            .setColor(0x34a857)
            message.channel.send(CMoon);
         break;  
         case 'TWAU':  
         const TheWorldAlternateUniverse = new Discord.MessageEmbed()             
         .setTitle('The World: Alternate Universe')
         .addField('Health', '800.')
         .addField('Punch', '50.')
         .addField("MUDA MUDA", "100x3 - 5 turn cooldown.")
         .addField("Match Toss", '50x4 - 4 turn cooldown.')
         .addField("Oil Bomb", '200 - 6 turn cooldown - this skill can be activate after using match toss after you use oil can.')
         .addField("Heavy Kick", '150 - 4 turn cooldown.')
         .addField("Knives", '50x3 - 3 turn cooldown.')
         .addField("Oil Can", 'Stuns opponent for 1 turn - 5 turn cooldown.')
         .addField("ZA WARUDO", 'Stuns Enemy for 2 turns - 8 turn cooldown/wait')
         .setImage('https://vignette.wikia.nocookie.net/jjba/images/0/0f/THE_WORLD.PNG/revision/latest?cb=20160414121752')
         .setColor(0xcca516)
         message.channel.send(TheWorldAlternateUniverse);
        break;
        case 'SilverChariot':  
         const SilverChariot = new Discord.MessageEmbed()             
         .setTitle('Silver Chariot')
         .addField('Health', '750.')
         .addField('Punch', '50.')
         .addField("Backstab", "75x2 - 4 Turn Cooldown.")
         .addField("Blade Ejection", '150 - 5 Turn Cooldown. Cannot attack next turn.')
         .addField("Pincusion Barrage", '80x5 - 6 Turn Cooldown.')
         .addField("Piercing Lunge", '80x2 - 2 Turn Cooldown - Stun Them For One Turn.')
         .addField("Armor Ejection", '6 Turn Cooldown/Wait - Remove Your Armor For Two Turns Making You Deal 25% More Damage But You Also Take An Additional 25% Damage.')
         .addField("Armor Block", '3 Turn Cooldown - Block an attack. Cannot be activated if armor is currently off.')
         .setImage('https://www.pngkit.com/png/full/384-3849802_silverchariot-jojo-manga-silver-chariot.png')
         .setColor(0x9398c2)
         message.channel.send(SilverChariot);
        break;
        case 'BallBreaker':  
         const BallBreaker = new Discord.MessageEmbed()             
         .setTitle('Ball Breaker')
         .addField('Health', '700.')
         .addField('Punch', '60.')
         .addField("Teleport Through Barrier", "90x2 - 6 Turn Cooldown. Cannot be cancelled or blocked.")
         .addField("Aging Increase", '50x3 - 5 Turn Wait- 2 Turn Cooldown. This Ability is only once per Game. Increases amount of damage you do to the opponent by 25% for the rest of game and decreases the amount of damage your opponent does by 25% for the rest of the game.')
         .addField("Horse Kick Golden Rotation", '75x3 - 4 Turn Cooldown (Deal 100 Damage to Yourself But Negate Your Opponents Attack. This Move Always Goes First. You must be on your horse to use this move before using this move otherwise this move deals no damage.)')
         .addField("Get On Horse", '65×2 - 3 Turn cooldown. (You get on your horse.)')
         .addField("Horse Kick", '90 - 4 turn cooldown. (You get on your horse.)')
         .addField("Passive", 'After 8 turns, you lose this stand for the rest of the battle and instead get the spin moves. Once the battle ends you will get ballbreaker back. You cannot get tusk while you lost ballbreaker and have spin back.')
         .setImage('https://vignette.wikia.nocookie.net/jjba/images/6/63/Ballbreakerasb.png/revision/latest?cb=20130812154811')
         .setColor(0x11d92c)
         message.channel.send(BallBreaker);
        break;
        case 'CrazyDiamond':  
         const CrazyDiamond = new Discord.MessageEmbed()             
         .setTitle('Crazy Diamond')
         .addField('Health', '720.')
         .addField('Punch', '50.')
         .addField("DORA Barrage", "100x4 - 5 turn cooldown.")
         .addField("Restore", 'Heals 100 health (only team battles) - 6 turn cooldown.')
         .addField("Head Kick", '150 - 3 turn cooldown.')
         .addField("Auto Shot Glass", '150 -  3 turn cooldown.')
         .addField("Blood Slash", '200 - 5 turn cooldown - takes away 100 everytime used.')
         .addField("Rage", 'Next time the enemy hits you, you can activate rage mode and do ¼ more damage for 3 turns - 5 turn cooldown.')
         .setImage('https://vignette.wikia.nocookie.net/jjba/images/4/44/CrazyDiamond_ASB.png/revision/latest?cb=20130123210557')
         .setColor(0xde2f83)
         message.channel.send(CrazyDiamond);
        break;
        case 'Metallica':  
         const Metallica = new Discord.MessageEmbed()             
         .setTitle('Metallica')
         .addField('Health', '700.')
         .addField('Punch', '70.')
         .addField("Invisibility", "3 Turn Cooldown - Dodge Your Opponents Next Attack.")
         .addField("Stand Manipulation", '4 Turn Wait/Cooldown - This turn you do no damage but next turn your opponent loses their turn and instead you use your opponents punch attack against them plus whatever buffs they have.')
         .addField("Iron Manipulation", '130 - 4 Turn Cooldown - 3 Turn Wait - If this move is used 3 times successfully, your opponent will take a guaranteed 50 damage (the 50 extra damage still happens even on turns you are stunned, blocked or dodged) + whatever damage you deal to them every turn after the 3rd time this move successfully hits.')
         .addField("Knife Throw", '100×3 - 5 Turn Cooldown.')
         .addField("Remove Foot", '3 Turn Wait/Cooldown - Deal 50 damage to yourself but dodge your opponents next attack.')
         .addField("Summon Iron From Earth", '4 Turn Wait/Cooldown - Add an extra 1x to your next attack. Does not stack with Assassins Resolve.')
         .addField("Scissors In Throat", '130 - 4 Turn Cooldown - Cannot be dodged or blocked.')
         .addField("Iron Heal", '4 Turn Wait/Cooldown - Heal 200 Health.')
         .addField("Razors In Throat", '50×6 - 6 Turn Cooldown - 4 Turn Wait - Cannot be dodged or blocked.')
         .addField("Nails In Throat", '70×4 - 6 Turn Cooldown - 4 Turn Wait - Cannot be dodged or blocked.')
         .addField("Assassins Resolve", '4 Turn Wait Cooldown - Add an extra 1x to your next attack. Does not stack with Summon Iron From Earth.')
         .addField("I Must Know Your Identidy", 'Can Only Be Used Against Characters Whose Attacks Involve Their Identity - Can Only Be Used Once Per Game - Any attack involving the opponents identity can no longer be used by the opponent.')
         .addField("Passive - Magnetism", 'Your attacks cannot be dodged.')
         .addField("2nd Passive - Eat The Frog", 'Every Time you use Iron Manipulation, your opponent can roll a 10 sided dice (your opponent must say they want to use Eat The Frog or this does not activate), if they roll a number lower than 6 than nothing happens and the effect continues as normal. If they roll higher than a 5 than they take damage as normal but you using Iron Manipulation successfully does not count this turn towards the 3 successful uses of Iron Manipulation needed to deal 50 extra damage per turn.')
         .setImage('https://static.jojowiki.com/images/thumb/4/46/latest/20191015212955/Metallica_Infobox_Manga.png/270px-Metallica_Infobox_Manga.png')
         .setColor(0x7b95a8)
         .setFooter("This Stand Is An Admin Exclusive.")
         message.channel.send(Metallica);
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
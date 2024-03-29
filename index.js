require('events').EventEmitter.prototype._maxListeners = 25;
const Discord = require('discord.js');
const client = new Discord.Client();
const {
  Client,
  Util
} = require('discord.js');
const randomPuppy = require('random-puppy');
const covid = require('covidapi');
const {
  countries
} = require('covidapi');
const db = require('quick.db');
const parsems = require('parse-ms');
const ytdl = require('ytdl-core');
const opus = require('opusscript');
const ffmpeg = require('ffmpeg');
const YouTube = require('simple-youtube-api');
const { join } = require('path');
const { ifError } = require('assert');
const { time } = require('console');
const { off } = require('process');
const queue = new Map()
const youtube = new YouTube('AIzaSyC1eobYrce-47-9qnGOY7uJqP7hsQEMjWU')
 
client.on('ready', () => {
  console.log('E-Bag Is Now Online');
  client.user.setActivity('On PC 2', {
    type: 'PLAYING'
  }).catch(console.error);
})

client.login(process.env.token);

const PREFIX = 'e-'||'E-'

const Emperor = new Discord.MessageEmbed()
      .setTitle('Emperor')
      .addField('Health', '700.')
      .addField('Bullet', '40.')
      .addField("HeavyWeight Shot", '150 - 4 Turn Cooldown.')
      .addField("Rapid Bullets", '70x3 -4 Turn Cooldown - Stun the opponent for 1 turn.')
      .addField("Rapid Fire", '50x3 - 3 Turn Cooldown.')
      .addField("Homing Bullet", '120 - Prevents The Enemy From Dodging.')
      .addField("Escape", '3 Turn Wait - Heal 100 Health - Can Only Use Once Per Game - Can Only Be Used When Your Health Goes Below 300.')
      .addField("Hanged Man Assist", 'Can Only Be Used Once Your Health Goes Below 400 - Can Only Be Used Once Per Game - Your attacks do 25% more damage for the next 3 turns.')
      .setImage('https://i.pinimg.com/originals/5f/5e/e2/5f5ee2e47bad5ab77fc0ace627249211.jpg')
      .setColor(0x827c7c)
      
const SexPistols = new Discord.MessageEmbed()
        .setTitle('Sex Pistols')
        .addField('Health', '650.')
        .addField('Bullet', '40.')
        .addField("Rapid Fire", '50x6 - 4 turn cooldown.')
        .addField("Giorno Assist: Gold Experience", '50x4 - 3 turn cooldown.')
        .addField("Rebound Shot", '60x2 - 4 turn cooldown.')
        .addField("Salami", '5 turn cooldown - Heal 100 Health.')
        .addField("Yeehaw!", '120 - 4 turn cooldown.')
        .addField("Narancia Assist: Aerosmith", '60x3 - 4 turn cooldown.')
        .addField("Pass Pass Pass", '70x3 - 5 Turn Cooldown')
        .addField("Torture Dance", "6 Turn Cooldown - Increase The Amount Of Damage You Do For The Next 3 Turns By 60")
        .setImage('https://cdn.discordapp.com/attachments/731415895682973696/735748501820014622/350.png')
        .setColor(0xded82f)
        
const GoldExperience = new Discord.MessageEmbed()
        .setTitle('Gold Experience')
        .addField('Health', '750.')
        .addField('MUDA', '50.')
        .addField("MUDA Barrage", "50x4 - 4 turn cooldown.")
        .addField("Life Imbue", 'Heal 100 health - 4 turn cooldown.')
        .addField("Tracking Fly", 'The enemy cannot dodge for 3 turns - 6 turn cooldown.')
        .addField("Tree", '8 turn cooldown - 6 turn wait - Dodge your opponents next attack and reflect it back at them, dealing 50% more damage they would have done to you.')
        .addField("Consciousness Acceleration", '100 - 5 Turn Cooldown - Can Only Be Used If Punch Was Used Last Turn - Stun the opponent for 1 turn.')
        .addField("7 Page MUDA", '60x8 - 6 turn cooldown - 6 turn wait - Can Only Be Used If Did You Really Think You’d Be That Lucky? Was Used Last Turn.')
        .addField("Did You Really Think You’d Be That Lucky?", '6 Turn Cooldown - 5 Turn Wait - Your opponent cannot dodge or block your next attack.')
        .addField("Life Create", '5 Turn Cooldown - 5 Turn Wait - Roll a 10 sided die depending on what you get is what damage you roll - 1-3 Frog reflect your opponents attack after using this. 4-6 Scorpion do 80x3. 5-9 Bird Add 1x to your next attack. 10 choose which animal you want')
        .addField("Mista Assist: Sex Pistols", '50x6 - 5 Turn Cooldown.')
        .addField("Revival", 'Can Only Be Used In 2v2s - Can Only Be Used Once Per Game - This ability only works if activated the same turn your teammate dies, revive them with 200 health left.')
        .addField("Passive: Piano", 'When you have less than 200 health, your damage output gets increased by 50%.')
        .setImage('https://media.discordapp.net/attachments/731415895682973696/735432435193479188/Z.png')
        .setColor(0xded82f)
        
const MoodyBlues = new Discord.MessageEmbed()
        .setTitle('Moody Blues')
        .addField('Health', '700.')
        .addField('Punch', '50.')
        .addField("Playback", '5 Turn Cooldown/Wait - Whatever attack your opponent did last turn to you, you do now to your opponent (reroll for damage).')
        .addField("Stand Barrage", '50x4 - 4 Turn Cooldown.')
        .addField("Half Stand Half User", 'Take 50% less damage for the next 2 turns - 5 turn cooldown.')
        .addField("Timer Start", '4 Turn Cooldown/Wait - Start The Timer.')
        .addField("Timer Rewind", '5 Turn Cooldown/Wait Choose an attack that was done after you started the timer and do the same amount of damage you took from that attack to the opponent. This automatically stops the timer.')
        .addField("I Will Use My Stand To Solve The Mystery", 'Add an extra 1x to your next attack (including Playback attacks).')
        .addField("Passive: Shut Up Giorno", 'Your opponent can not use healing moves.')
        .setImage('https://i.pinimg.com/564x/f4/ed/93/f4ed93901c1aac2136e37d00268c5fc9.jpg')
        .setColor(0x564bab)
        
const RedHotChiliPepper = new Discord.MessageEmbed()
      .setTitle('Red Hot Chili Pepper')
      .addField('Health', '750.')
      .addField('Punch', '50.')
      .addField("Stand Barrage", '100x3 - 5 turn cooldown.')
      .addField("Overcharge", 'Increase the damage of all your attacks by ¼ for 2 turns - 5 turn cooldown.')
      .addField("Electric Transfer", 'Dodge an Attack - 4 turn cooldown.')
      .addField("Discharge", '200 - 4 turn cooldown.')
      .addField("Electricity Absorb", 'Heal 100 health - 5 turn cooldown.')
      .addField("Blinding Light", 'Stun your opponent for 1 turn - 4 turn cooldown.')
      .addField("Shock", '150 - 4 turn cooldown.')
      .setImage('https://media.discordapp.net/attachments/731415895682973696/735325387084791898/350.png')
      .setColor(0xe8e046)
      
const Geb = new Discord.MessageEmbed()
      .setTitle('Geb')
      .addField('Health', '700.')
      .addField('Scratch', '25.')
      .addField("Neck Detachment", '150 - 5 Turn Cooldown - Stun The Player For One Turn.')
      .addField("200 Water Palms", '50x4 - 3 Turn Cooldown.')
      .addField("Water Blast", '50x3 - 3 Turn Cooldown.')
      .addField("Hardened Claws", '100x2 - 5 Turn Cooldown .')
      .addField("Water Bullets", '70x4 - 4 Turn Cooldown.')
      .addField("Water Aphorism", '4 Turn Cooldown - Dodge An Attack.')
      .addField("Absorb Shield", '6 Turn Cooldown - Dodge An Attack And Reflect Half Of The Damage From The Attack Back Onto The Enemy.')
      .setImage('https://static.jojowiki.com/images/thumb/4/4f/latest/20191015220131/GEB_Card.png/137px-GEB_Card.png')
      .setColor(0x489cd4)
      
const LoveDeluxe = new Discord.MessageEmbed()
        .setTitle('Love Deluxe')
        .addField('Health', '700.')
        .addField('Hair Slap', '50.')
        .addField("Bind", "130 - 5 turn cooldown - Stun your opponent for their next turn.")
        .addField("Hair Shot", '100 - 3 turn cooldown.')
        .addField("Hair Shield", '4 turn cooldown - Block your opponents next attack.')
        .addField("Launch", '150 - 5 turn cooldown.')
        .addField("Hair Whips", '100x4 - 5 turn cooldown.')
        .addField("Hair Suffocate", '200 - 6 Turn Cooldown.')
        .addField("Cinderella Assist: Beautify", '5 Turn Cooldown - Cannot Be Used During Uglify Cooldown - Your opponent does 25% less damage for the next 2 turns.')
        .addField("Cinderella Assist: Uglify", '5 - Turn Cooldown - Cannot Be Used During Beautify Cooldown - Your opponent gets stunned for their next turn.')
        .addField("Madly In Love", '7 Turn Cooldown - Your opponent cannot dodge your attacks for the next 3 turns.')
        .addField("Passive: Hair Abuse", 'After Turn 15, you do 50% less damage.')
        .setImage('https://cdn.discordapp.com/attachments/732140300272795710/735003884778553415/350.png')
        .setColor(0x999797)
        
const TowerOfGray = new Discord.MessageEmbed()
          .setTitle('Tower Of Gray')
          .addField('Health', '700.')
          .addField('Bite', '50.')
          .addField("Poisonous Blood", "80 - 5 Turn Cooldown - Deal 50 extra damage for the next 2 Turns.")
          .addField("Rip Out Tongue", '150 - 4 Turn Wait/Cooldown - Your opponent can no longer use assist moves.')
          .addField("Countless Bites", '50x6 - 5 Turn Cooldown.')
          .addField("Extreme Speed", '50x6 - 5 Turn Cooldown.4 Turn Cooldown - Dodge your opponents next attack.')
          .addField("Massacre Written In Blood", '6 Turn Cooldown - Can Only Be Used If Rip Out Tongue Was Used Last Turn - Add an extra 1x to your attacks for the next 3 turns.')
          .addField("Hidden User", '4 Turn Cooldown - Dodge your opponents next attack.')
          .addField("Closed Space", '5 Turn Cooldown - Deal 25% more damage for the next 2 turns.')
          .addField('Passive: Extremely Small Bug', "Before rolling for damage, your opponent must roll a 10 sided dice. If they roll less than a 6 than their attack gets dodged that turn. If they roll above a 5 than they do 50% more damage this turn.")
          .setImage('https://i.pinimg.com/originals/90/60/b6/9060b6ffb86a08df38e411dda236bb79.jpg')
          .setColor(0x536f96)
          
const MagiciansRed = new Discord.MessageEmbed()
        .setTitle('Magicians Red')
        .addField('Health', '800.')
        .addField('Punch', '50.')
        .addField("Red Bind", '135 - 6 Turn Cooldown - Your opponent is stunned for 1 turn.')
        .addField("Crossfire Hurricane", '80x3 - 3 Turn Cooldown.')
        .addField("Fire Shot", '60x5 - 5 Turn Cooldown.')
        .addField("Flaming Kick", '120 - 5 turn cooldown - allows your next two moves to have burn.')
        .addField("Burn", '0 - 8 Turn Cooldown - Your opponent takes 50 additional damage every turn for the next 3 turns.')
        .addField("Passive", 'Flames cannot miss. Can only be blocked.')
        .setImage('https://i.pinimg.com/originals/19/1f/ff/191fffd235e41ba9e7cf2e19e3d0ae17.jpg')
        .setColor(0xe85c35)
        
const KillerQueenPart4 = new Discord.MessageEmbed()
        .setTitle('Killer Queen (Part 4)')
        .addField('Health', '600.')
        .addField('Punch', '70.')
        .addField("Killer Queen's First Bomb", "130 - 4 turn cooldown - Can only be used if punch was used the turn before.")
        .addField("Killer Queen's Second Bomb: Sheer Heart Attack", '150 - 5 Turn Cooldown - Roll Damage for this attack for 2 turns. You can only activate if you used Remove Hand last turn.')
        .addField("Remove Hand", '5 Turn Cooldown - 3 Turn Wait- Take 50 Damage but dodge your opponents next attack.')
        .addField("Killer Queen's Third Bomb: Bites The Dust", '8 Turn Wait - Can Only Be Used Once Per Game - Roll a 10 sided dice. If you roll an number greater than 8 you successfully activated Bites The Dust and gain 300 health .')
        .addField("Change Identity", '4 Turn Cooldown/Wait - Dodge Your Next Opponents Attack.')
        .addField("Killer Queen has already touched the doorknob", '5 Turn Wait - Can Only Be Used Once Per Game - If your opponent dodged your attack last turn, deal a guaranteed 150 damage to them.')
        .addField("Stray Cat Air Bomb", '130 - 4 Turn Cooldown - Cannot be Dodged.')
        .addField("Killer Instinct", '5 Turn Wait/Cooldown - Add a extra 1x to your next attack. Cannot be used with Bites The Dust, My Name Is Kira Yoshikage, or Sheer Heart Attack.')
        .setImage('https://media.discordapp.net/attachments/731415895682973696/733556309991096381/270px-Killer_Queen_Infobox_Manga.png')
        .setColor(0xe84fa6)
        
const MadeInHeaven = new Discord.MessageEmbed()
          .setTitle('Made In Heaven')
          .addField('Health', '800.')
          .addField('Punch', '80.')
          .addField("Universe Reset", 'Do 25% of your opponents total health - 8 turn cooldown/8 turn wait.')
          .addField("Infinite Speed Escape", '5 Turn Wait/Cooldown - Dodge your opponents attack this turn (even if that move normally wouldnt be able to be doged. This can also negate stuns.)')
          .addField("Infinite Speed Rush", '100x4 - 5 Turn Cooldown.')
          .addField("Speedy Powerfull Punch", '130 - 3 Turn Cooldown.')
          .addField("Breaking Horse Kicks", '150x2 - 4 Turn Cooldown.')
          .addField("Throw Knives", '50x6 - 5 Turn Cooldown.')
          .addField("Know The Future", 'Can Only Be Used Once Per Game - Can Only Be Used If Universe Reset Was Used Last Turn - Dodge your opponents attacks for the next 3 turns.')
          .addField("Speed Up Time", 'Speed Up Time - 3 Turn Wait - 4 Turn Cooldown - Dodge your opponents next attack - This Move Can Still Be Activated During Stuns - If this move is activated during Timestop, lower how many turns that Timestop will Stun you for to only 1 (this one).')
          .addField("Passive: Infinite Speed", 'This stand always goes first unless it is fighting another stand that always goes first in which case the high or low dice roll method shall be used to determine the order of moves.')
          .setImage('https://vignette.wikia.nocookie.net/jjba/images/f/fb/Made_in_Heaven_2.png/revision/latest/top-crop/width/360/height/450?cb=20191205005203')
          .setColor(0xdfe8e1)
          
const Spin = new Discord.MessageEmbed()
      .setTitle('Spin')
      .addField('Health', '600.')
      .addField('Steel Ball', '50.')
      .addField("Wrecking Ball", '80x2 - 4 Turn Cooldown (Roll a additional 1-10 dice. If you roll a 6 or higher than do an additional 50% of the amount of damage you just did to your opponent.)')
      .addField("Left-Half Ataxia", '70x3 - 3 Turn Cooldown (If at least 2 of the dice you rolled roll higher than 40 than for the next turn the opponent only does 50% of the damage they were supposed to do.)')
      .addField("Golden Rotation", '0 - 6 Turn Cooldown (For this turn you do no damage but next turn roll 3 100 sided dice for damage.)')
      .addField("Air Distortion", '0 - 5 turn Cooldown (Your opponent misses their attack this turn and you get to attack first next turn.)')
      .addField("Execution", '300 - Only Once Per Game.')
      .setImage('https://vignette.wikia.nocookie.net/jjba/images/4/4c/XtC6I.png/revision/latest/top-crop/width/360/height/450?cb=20150726055849')
      .setColor(0x4be33d)
      
const TuskAct4 = new Discord.MessageEmbed()
        .setTitle('Tusk Act 4')
        .addField('Health', '800.')
        .addField('Punch', '30.')
        .addField("Rotation Punch", '100x2 - 4 Turn Cooldown.')
        .addField("Rotation Barrage", '100x3 - 4 Turn Cooldown .')
        .addField("Rotation Fingernail Shotgun", '80x3 - 2 Turn Cooldown.')
        .addField("Spinning Nail Shot", '100x2 - 5 Turn Cooldown - Stun The Player For 2 Turns.')
        .addField("Fingernail Glide", '4 Turn Cooldown - Dodge an attack.')
        .setImage('https://i.pinimg.com/originals/4c/af/82/4caf82294d73831d0e35746cda2d9817.jpg')
        .setColor(0xe01fa0)
        
const TuskAct3 = new Discord.MessageEmbed()
        .setTitle('Tusk Act 3')
        .addField('Health', '750.')
        .addField('Punch', '20.')
        .addField("Fingernail Cannon", '100x3 - 6 Turn Cooldown.')
        .addField("Fingernail Shotgun", '50x3 - 3 Turn Cooldown.')
        .addField("Spacial Wormhole", '100x2 - 4 Turn Cooldown.')
        .addField("Fingernail Glide", '5 Turn Cooldown - Dodge An Attack.')
        .setImage('https://vignette.wikia.nocookie.net/jjba/images/a/aa/TuskAct3color.png/revision/latest/scale-to-width-down/340?cb=20140813205954')
        .setColor(0xe01fa0)
        
const TuskAct2 = new Discord.MessageEmbed()
        .setTitle('Tusk Act 2')
        .addField('Health', '700.')
        .addField('Punch', '20.')
        .addField("Fingernail Shot", '50x2 - 3 Turn Cooldown - Each Turn It’s Not Used Is +5 Damage To What it’s rolled when using it. (First Round Doesnt Count).')
        .addField("Fingernail Shotgun", '100x3 - Turn Cooldown.')
        .addField("Spinning Punch", '50x3 - 3 Turn Cooldown.')
        .addField("Fingernail Glide", '5 Turn Cooldown - Dodge An Attack.')
        .setImage('https://vignette.wikia.nocookie.net/jjba/images/7/7a/TuskAct2color.png/revision/latest/scale-to-width-down/340?cb=20160325172005')
        .setColor(0xe01fa0)
        
const TuskAct1 = new Discord.MessageEmbed()
          .setTitle('Tusk Act 1')
          .addField('Health', '650.')
          .addField('Punch', '20.')
          .addField("Sharp Punch", "100x2 - 3 Turn Cooldown.")
          .addField("Fingernail Shot", '50x3 - 2 Turn Cooldown.')
          .addField("Fingernail Bullet", '50x2 - 4 Turn Cooldown Stun The Enemy Oncen.')
          .addField("Fingernail Glide", '4 Turn Cooldown - Dodge An Attack.')
          .addField("Spin Charge", 'Add a extra 1x to your next attack.')
          .setImage('https://vignette.wikia.nocookie.net/jjba/images/5/58/TuskAct1color.png/revision/latest/scale-to-width-down/340?cb=20140813205839')
          .setColor(0xe01fa0)
          
const EchoesAct3 = new Discord.MessageEmbed()
          .setTitle('Echoes Act 3')
          .addField('Health', '800.')
          .addField('Punch', '30.')
          .addField("Heavy Barrage", "100x3 - 5 turn cooldown - stuns the enemy after next turn.")
          .addField("Three Freeze", '100x4 - 5 turn cooldown - stuns for 2 turns.')
          .addField("Rock Drop", '200 - 5 turn cooldown.')
          .addField("Body Drop", '80x4 - 4 turn cooldown - Stuns enemy for 1 turn.')
          .addField("Dropping Uppercut", '150 - 3 turn cooldown.')
          .setImage('https://vignette.wikia.nocookie.net/jjba/images/c/c3/Echoes_Act3_color.png/revision/latest/scale-to-width-down/340?cb=20160423150540')
          .setColor(0x4be33d)
          
const EchoesAct2 = new Discord.MessageEmbed()
          .setTitle('Echoes Act 2')
          .addField('Health', '750.')
          .addField('Punch', '20.')
          .addField("Boing Sound", "150 - 4 turn cooldown.")
          .addField("Boom Sound", '150 - 4 turn cooldown.')
          .addField("Woosh Sound", '150 - 4 turn cooldown.')
          .addField("Sizzle Sound", '60x4 - 4 turn cooldown.')
          .addField("Heal Ball", 'Heals 100 health - 5 turn cooldown.')
          .setImage('https://vignette.wikia.nocookie.net/jjba/images/5/55/Echoes_Act2_color.png/revision/latest/scale-to-width-down/340?cb=20160326105114')
          .setColor(0x4be33d)
          
const EchoesAct1 = new Discord.MessageEmbed()
          .setTitle('Echoes Act 1')
          .addField('Health', '700.')
          .addField('Punch', '20.')
          .addField("Fire Works", "60x4 - 4 turn cooldown.")
          .addField("Screeching Iron", '130 - 4 turn cooldown.')
          .addField("White Noise", '130 - 4 turn cooldown.')
          .addField("Clock Ticking", '50x4 - 3 turn cooldown.')
          .setImage('https://vignette.wikia.nocookie.net/jjba/images/7/7a/Echoes_Act1_color.png/revision/latest/scale-to-width-down/340?cb=20140818160319')
          .setColor(0x4be33d)
          
const EchoesEgg = new Discord.MessageEmbed()
        .setTitle('Echoes Egg')
        .addField('Health', '700.')
        .addField('Stumble', '20.')
        .addField("Egg Toss", "100 - 3 turn cooldown.")
        .addField("Egg Hatch", '3 turn cooldown.')
        .addField("Egg Roll", '100 - 3 turn cooldown.')
        .addField("Fear Toss", '130 - 3 turn cooldown.')
        .addField("Shell Harden", 'Opponent does 50% less damage - 3 turn cooldown.')
        .setImage('https://vignette.wikia.nocookie.net/jjba/images/1/16/Echoes_0.png/revision/latest/top-crop/width/220/height/220?cb=20160423065016')
        .setColor(0x4be33d)
        
const TheHand = new Discord.MessageEmbed()
        .setTitle('The Hand')
        .addField('Health', '700.')
        .addField('Punch', '60.')
        .addField("Barrage", "120x4 - 6 turn cooldown.")
        .addField("Za Hando", '150x2 - 5 turn cooldown.')
        .addField("Oi Josuke", ' 5 Turn Wait/Cooldown - Heal 150 Health.')
        .addField("Delete Space", 'Dodge An Attack - 6 turn cooldown.')
        .addField("Get Over Here", '100x3 - 4 turn cooldown - Your Opponent Cannot Dodge Your Next Attack.')
        .addField("Rapid Kick", '130 - 2 turn cooldown.')
        .addField("Shoot The Flower Pots Foward", '50x? - 6 Turn Wait/Cooldown - Roll a 10 sided dice to determine how many dice to roll.')
        .addField("Passive- Im Not Very Smart", '(Every Turn) After calculating damage, roll a 10 sided dice. If you roll less than a 6, deal 25% of the damage you did to your opponent to yourself.')
        .setImage('https://vignette.wikia.nocookie.net/jjba/images/c/c8/TheHand.png/revision/latest?cb=20140808155617')
        .setColor(0x2d6bcf)
        
const TheFool = new Discord.MessageEmbed()
        .setTitle('The Fool')
        .addField('Health', '750.')
        .addField('Scratch', '40.')
        .addField("Stand Bullets", "50x4 - 3 turn cooldown.")
        .addField("Sand Clone", '4 Turn Cooldown - Dodge your opponents next attack')
        .addField("Sand Shield", '5 turn cooldown - Block your opponents next attack.')
        .addField("Shield Blast", '150 - 5 turn cooldown - This skill can be activated the same turn as sand shield.')
        .addField("Sand Drill", '150 - 4 turn cooldown.')
        .addField("Double Swipe", '100x2 - 4 Turn Cooldown.')
        .addField("Transform", '5 Turn Wait - Can Only Be Used Once Per Game - Transform The Fool into a certain mode depending on what number you roll.1-4 Defense Mode all your opponents attack do 50 less damage for the next 3 turns, 6-9 Attack Mode all your attacks get x1 for the next 3 turns, 10 Power Mode get both modes buffs for the next 3 turns.')
        .setImage('https://vignette.wikia.nocookie.net/jjba/images/3/36/JoJo_Tarot_00_-_The_Fool.png/revision/latest/scale-to-width-down/340?cb=20150826093807')
        .setColor(0xe6e339)
        
const HangedMan = new Discord.MessageEmbed()
        .setTitle('Hanged Man')
        .addField('Health', '650.')
        .addField('Stab', '50.')
        .addField("Enter Mirror", "3 turn cooldown (Once the mirror breaks or Once you leave) - Become invincible until your opponent deals 200 damage total to the mirror. Instead of taking damage when your opponent attacks, the mirror you are currently in breaks once it  takes a total of 200 health and you are forced outside the mirror world. If you are still in the mirror when it breaks than you get stunned for 1 turn.")
        .addField("Leave Mirror", 'You leave the mirror.')
        .addField("Mirror Stab", '130 - 4 Turn Cooldown - Can only be used while inside a mirror.')
        .addField("Mirror Backstab", '150 - 4 Turn Cooldown - Can only be used while inside a mirror.')
        .addField("Emperor Assistance", '100x3 - 4 Turn Cooldown/Wait.')
        .addField("Speed Of Light Escape", 'Dodge your opponents next attack.')
        .addField("Water Sheild", '4 Turn Cooldown - Dodge your opponents next attack.')
        .addField("2 Right Hands Choke", '70 - 4 Turn Cooldown. Stun your opponent for 1 turn.')
        .addField("Passive", 'While outside of the mirror, your opponent does 25% more damage.')
        .setImage('https://i.pinimg.com/originals/9c/ce/4a/9cce4acc44c3f9088d4915508f257f78.jpg')
        .setColor(0x98cad4)
        
const WheelOfFortune = new Discord.MessageEmbed()
          .setTitle('Wheel Of Fortune')
          .addField('Health', '700.')
          .addField('Trample', '50.')
          .addField("Pressurized Trample", "130 - 4 Turn Cooldown.")
          .addField("Spiked Wheels", '50x4 - 3 Turn Cooldown.')
          .addField("Gasoline Bullets", '130x2 - 6 Turn Cooldown .')
          .addField("Drive Away", '4 Turn Cooldown - Dodge Opponents Next Attack..')
          .addField("Suprise!", '150 - 6 Turn Cooldown - (Can Only Be Used If Gasoline Bullets Were Used Last Turn) Deal a Burning Damage To The Enemy For Two Turns. 30 Damage Every Round.')
          .addField("Armor Harden", '6 Turn Cooldown - 5 Turn Wait - Reduce The Damage You Take By 25% And Deal 25% More Damage For The Next 2 Turns (Doesn’t Apply To Suprise! 30 extra damage per round but does apply to the initial Suprise! 150).')
          .setImage('https://i.pinimg.com/originals/98/be/96/98be962beb5da964cbc670ef18423dc4.jpg')
          .setColor(0x737d76)
          
const StarPlatinumTheWorld = new Discord.MessageEmbed()
      .setTitle('Star Platinum: The World')
      .addField('Health', '800.')
      .addField('Punch', '80.')
      .addField("Swift Ora Barrage", "100x3 - 5 Turn Cooldown .")
      .addField("Ora Barrage Finishing Blow", '170 - 5 Turn Cooldown.')
      .addField("Swift Ora Strike", '100x2 - 4 Turn Cooldown.')
      .addField("Bearing Shot", '100 - 2 Turn Cooldown.')
      .addField("Timestop", '10 Turn Cooldown - Stun The Enemy For Two Turns.')
      .addField("Timestop Dash", '80x2 -Teleport Behind The Player Allowing You to Go First Next Turn. this can be used only in ts.')
      .addField("Enraged Move", 'You can activate when under 200 health - Gain 100 health, every attack you do add 1/4 of its damage.')
      .setImage('https://i.pinimg.com/564x/bb/59/d5/bb59d517ee99e4703ac60bf172d8f7a6.jpg')
      .setColor(0xa3369c)
      
const StickyFingers = new Discord.MessageEmbed()
        .setTitle('Sticky Fingers')
        .addField('Health', '650.')
        .addField('Punch', '80.')
        .addField("Arm Throw", "150 - 4 turn cooldown.")
        .addField("Ari Barrage", '100x2 - 5 turn cooldown.')
        .addField("Zipper Grab", '6 Turn Cooldown - Stops enemy’s attack and stuns them for one turn (Only works if you go second.)')
        .addField("Limb Punch", '130 - 5 turn cooldown - enemy does 50% of their normal damage for the next turn.')
        .addField("Extended Heavy", '135 -3 turn cooldown .')
        .addField("Arrivederci", '200 - 6 turn cooldown.')
        .addField("Passive: My Will Is Greater Than Yours", 'When defeated revive yourself and gain 100 hp (Can only be used once per game.)')
        .setImage('https://vignette.wikia.nocookie.net/jjba/images/d/dd/StickyFingers.png/revision/latest?cb=20150428184345')
        .setColor(0x2f52c4)
        
const Enigma = new Discord.MessageEmbed()
      .setTitle('Enigma')
      .addField('Health', '700.')
      .addField('Punch', '30.')
      .addField("Paper Trap", "150 - 5 turn cooldown - Stuns for 1 turn.")
      .addField("Fire Release", '50x4 - 3 turn cooldown.')
      .addField("Electric Current", '50x3 - 3 turn cooldown.')
      .addField("Paper Landmine", '200 - 5 turn cooldown - Use this to cancel an oppponents attack and roll for damage.')
      .addField("Summon Wall", 'Opponents attack does half damage - 4 turn cooldown.')
      .addField("Multi Rock Throw", '50x5 - 3 turn cooldown.')
      .setImage('https://vignette.wikia.nocookie.net/jjba/images/a/a7/Enigma_profile.png/revision/latest?cb=20140820154706')
      .setColor(0xa653c9)
      
const HeavensDoor = new Discord.MessageEmbed()
        .setTitle('Heavens Door')
        .addField('Health', '650.')
        .addField('Punch', '30.')
        .addField("Pencil Rush", "20x4.")
        .addField("Push Back", '30x3 -2 Turn Cooldown - Deals Small Damage.')
        .addField("Rip Out Pages", '100x2 - 3 Turn Cooldown- Deals Good Damage For A Relatively Short Cooldown .')
        .addField("Blind Command", '5 Turn Cooldown - Stuns The Player For 1 Turn.')
        .addField("Heal", '6 Turn Cooldown - Heals Half Of Your Maximum Health.')
        .setImage('https://static.jojowiki.com/images/thumb/d/de/latest/20191228045732/Heaven%27s_Door_Infobox_Manga.png/270px-Heaven%27s_Door_Infobox_Manga.png')
        .setColor(0xffd30f)
        
const SoftAndWet = new Discord.MessageEmbed()
          .setTitle('Soft And Wet')
          .addField('Health', '750.')
          .addField('Punch', '50.')
          .addField("Bubble Blast", "50x4 - 3 turn cooldown.")
          .addField("Friction Steal", '150 - 5 turn cooldown - Activate when your opponent attacks, their attack misses and you roll for damage.')
          .addField("Bubble Ball", 'Stops an attack - 5 turn cooldown.')
          .addField("Bubble Trap", '150 - 5 turn cooldown - Stuns enemy for two turns.')
          .addField("ORA Barrage", '100x3 - 5 turn cooldown.')
          .addField("Bubble Residue", '50x4 - 5 turn cooldown - You can only activate this skill when doing a skill with bubble in its name.')
          .addField("Damage Steal", 'Does the same damage as you/your oppenents last attack - 5 turn cooldown/wait.')
          .setImage('https://vignette.wikia.nocookie.net/jjba/images/9/9a/S%26WManga.png/revision/latest/top-crop/width/360/height/450?cb=20190504142401')
          .setColor(0xa4ebeb)
          
const WhiteAlbum = new Discord.MessageEmbed()
        .setTitle('White Album')
        .addField('Health', '900.')
        .addField('Punch', '30.')
        .addField("Freezing Punch", "150 - 3 Turn Cooldown.")
        .addField("Flash Freeze", '60x3 - 2 Turn Cooldown.')
        .addField("Ice Armor Barrage", '100x2 - 4 Turn Cooldown - reduce the damage of attacks by 25 for the next 2 turns.')
        .addField("Ice Armor", "4 Turn Cooldown - Block The Next 100 Damage You Would Take")
        .addField("Gently Weeps", '4 Turn Wait - Can Only Be Used Once Per Game - Stuns the enemy for two turns and unlocks the moves listed below.')
        .addField("Ice Mirror", '3 Turn Cooldown - Reflect your opponents next attack back at them.')
        .addField("Ice Spears", '100x3 - 5 Turn Cooldown.')
        .addField("Sub Zero", '200x2 - 6 Turn Cooldown.')
        .setImage('https://vignette.wikia.nocookie.net/jjba/images/d/da/WhiteAlbum.png/revision/latest?cb=20150523161426')
        .setColor(0x5dc0de)
        
const HermitPurple = new Discord.MessageEmbed()
        .setTitle('Hermit Purple')
        .addField('Health', '750.')
        .addField('Punch', '40.')
        .addField("Vine Grab", "50x5 - 4 turn cooldown.")
        .addField("Multi Vine Punch", '50x4 - 3 turn cooldown.')
        .addField("Vine Armor", '150 - 5 turn cooldown - Activate when getting hit.')
        .addField("NIGERUNDAYO", 'Dodge An Attack - 5 turn cooldown.')
        .addField("Hamon Infusion", 'Activate hamon which allows you to get hamon infusion and abilitys + your abilitys get -1 cooldown - 5 turn wait.')
        .addField("Hamon Vine Armor", '100x3 - 4 turn cooldown - Makes an attack do half damage.')
        .addField("Hamon Overdrive", '100x4 - 7 turn cooldown.')
        .addField("Grapple Throw", '200 - 5 turn cooldown.')
        .setImage('https://images.shoutwiki.com/jojodiamondrecords/9/91/Tarot_TheHermit.png')
        .setColor(0x912390)
        
const HierophantGreen = new Discord.MessageEmbed()
        .setTitle('Hierophant Green')
        .addField('Health', '700.')
        .addField('Punch', '30.')
        .addField("Emerald Splash", "40x5 - 3 Turn Cooldown.")
        .addField("20 Meter Emerald Splash", '160x2 - 8 Turn Cooldown .')
        .addField("Hierophant Barrier", '100x2 - 8 Turn Cooldown.')
        .addField("Heavy Punch", '40x3 - 3 Turn Cooldown.')
        .addField("Stand Control", '8 Turn Cooldown - Reduce A Hits Damage By 50%.')
        .setImage('https://i.imgur.com/QEJsqf7.png')
        .setColor(0x32a852)
        
const ForbiddenFruit = new Discord.MessageEmbed()
        .setTitle('Forbidden Fruit')
        .addField('Health', '800.')
        .addField('Punch', '50.')
        .addField("Chemical Cleaning", "5 turn cooldown - Negate the ability of your opponents previous attack.")
        .addField("TidePod Barrage", '100x3 - 5 turn cooldown - Add an extra 1x to your next attack.')
        .addField("TidePod Shot", '200 - 4 turn cooldown.')
        .addField("Safety Lock", '4 turn cooldown - Block your opponents next attack.')
        .addField("TidePod Pop", '200 - 5 turn cooldown - 3 Turn Wait - Stuns your opponent for 1 turn.')
        .addField("Toxic Sludge", '80x3 - 4 turn cooldown.')
        .addField("Passive: Posioning", 'Activates When Your Health Goes Below 200 - All of your attacks do 25% more damage.')
        .setImage('https://media.discordapp.net/attachments/732140300272795710/735964003163045888/image0.png')
        .setColor(0x713ce6)
        .setFooter("This Stand Is An Event Exclusive.")
        
const FrogExperience = new Discord.MessageEmbed()
        .setTitle('Frog Experience')
        .addField('Health', '750.')
        .addField('Punch', '70.')
        .addField("Frog Barrage", "100x4 - 5 turn cooldown - stuns opponent for 1 turn.")
        .addField("Life Imbue", '5 Turn Cooldown/Wait - Heal 150 health.')
        .addField("Tongue Snipe", '150 - 3 turn cooldown.')
        .addField("Sappling", '5 turn cooldown/5 turn wait - Deflect you opponents attack doing 50% more damage.')
        .addField("Consciousness Jump", '5 Turn Cooldown - Stun you opponent for 1 turn.')
        .addField("Frog Creation", '50x6 - 4 turn cooldown.')
        .addField("7 Page Muda", '70x7 - 10 turn cooldown/wait.')
        .addField("Passive: Frog", 'You Cannot Be Stunned.')
        .setImage('https://media.discordapp.net/attachments/717270887870758942/736025367873323028/921A1536-35C0-4331-A2FD-BDBFE0F43CA9-removebg-preview.png')
        .setColor(0xded82f)
        .setFooter("This Stand Is An Event Exclusive.")
        
const Kiss = new Discord.MessageEmbed()
      .setTitle('Kiss')
      .setDescription("This Stand Is The Exclusive Property Of <@678443627046895623>")
      .addField('Health', '800.')
      .addField('Punch', '70.')
      .addField("Place Sticker", "6 Turn Cooldown - Choose Whether It Will Affect The Opponent Or You - Can Only Have 1 Sticker At A Time - Place a sticker on the target of your choosing and double the amount of damage the person the sticker is on does for the next 3 turns or until the sticker is removed (whichever happens first).")
      .addField("Rip Off Sticker", '6 Turn Cooldown - 300 - Cannot Be Used Unless Place Sticker Was Used In The Last 3 Turns - Damage Will Only Be Dealt If Sticker Was Placed On Opponent - Remove the sticker.')
      .addField("Stand Rush", '100x4 - 5 Turn Cooldown.')
      .addField("Revenge Is For Settling Your Score With Your Own Destiny", 'Add an extra 1x to your attacks for the next 2 turns (including Rip Off Sticker).')
      .addField("Foo Fighters Assist: Plankton Heal", '4 Turn Cooldown - Heal 150 Health.')
      .addField("Jolyne Assist: Spring Trap", '5 Turn Cooldown - Stun the opponent for 1 turn.')
      .addField("Sticker Trap", '200 - 5 Turn Cooldown - Can Only Be Used If Your Opponent Dodged Your Last Attack.')
      .addField("Get Revenge For Gloria", '6 Turn Cooldown - Your opponent cannot dodge your attacks for the next 3 turns.')
      .setImage('https://static.jojowiki.com/images/thumb/7/77/latest/20191015213732/Kiss_Infobox_Manga.png/270px-Kiss_Infobox_Manga.png')
      .setColor(0xdb9523)
      .setFooter("This Stand Is An Event Exclusive.")
      
const D4CLT = new Discord.MessageEmbed()
      .setTitle('Dirty Deeds Done Dirt Cheap: Love Train')
      .addField('Health', '900.')
      .addField('Punch', '80.')
      .addField("Enter Love Train", " 7 Turn Cooldown - 5 Turn Wait - For the next 2 turns you are invincible. Any Damage your opponent does to you while inside Love Train get reflected to them instead (except for certain attacks.) You cannot attack while inside Lovetrain.")
      .addField("Misfortune Redirect", '4 Turn Cooldown - Can Only Be Used While Inside Love Train - Instead of reflecting your opponents damage back at them this turn, the damage gets negated and you heal however much damage he would have done to you.')
      .addField("D4C Clone Summon", '6 Turn Cooldown - Double the amount of damage you do for the next 3 turns.')
      .addField("D4C Rush", '50x6 - 5 Turn Cooldown.')
      .addField("Gun Shots", '100x2 - 3 Turn Cooldown.')
      .addField("D4C Chop", '200 - 4 Turn Cooldown.')
      .addField("Who Shot Jhonny Joestar?", '100x3 - 4 Turn Cooldown - Your opponent gets stunned next turn.')
      .addField("Send To Alternate Dimension", '4 Turn Cooldown - Stun your opponent next turn and puts you in a alternate dimension.')
      .addField("Meet Your Alternate Dimension Self", '6 Turn Cooldown - 300 - Can Only Be Used If in a alternate dimension.')
      .addField("Dojyan", '4 Turn Cooldown - Dodge opponents next attack.')
      .addField("Passive: Take The First Napkin", 'Take The First Napkin - This Stand always goes first unless it fights another stand with a "always goes first" ability. Than the high or low method will be used to decide order of moves.')
      .addField("2nd Passive: Clone Replacement", 'Once Per Game - When you die, get revived with 300 health left.')
      .setImage('https://vignette.wikia.nocookie.net/jjba/images/b/b6/Valentine_Powered.JPG/revision/latest?cb=20150419073227')
      .setColor(0xdbd035)
      .setFooter("This Stand Is An Event Exclusive.")
      
const HeyYa = new Discord.MessageEmbed()
        .setTitle('Hey Ya')
        .addField('Health', '900.')
        .addField('Bad Luck', '70.')
        .addField("Advice", "4 Turn Cooldown - Roll a 10 sided dice to determine what you get. 1-3 Heal 200 Health. 4-6 Deal 100 extra damage for the next 3 turns. 7-9 Deal 100 Damage. 10 Everything.")
        .addField("Cheer", 'Add a 1x to your next attack.')
        .addField("Talk", '4 Turn Cooldown - Roll a 10 sided dice to determine what you get. 1-3 Stun opponent for 1 turn. 4-6 Dodge opponents next attack. Block opponent for the next turn. 10 Everything (The stunning, blocking, and dodging would happen on turn at a time not all on one turn.)')
        .addField("Passive: Bad Luck", 'After choosing what move to do, roll a 10 dice to determine what unlucky event shall happen to ur opponent. 1-3 They fall on spikes: roll 4 80 sided dice to determine damage. 4-6 A horse kicks them with both legs: roll 2 130 sided dice to determine damage. 7-9 They accidently tripped and fell on their spine: Roll 1 150 sided dice and your opponent is stunned next turn. 10 Everything. (Cannot be blocked, negated, or dodged and if a ability or passive negates this passive than that passive or ability gets negated.)')
        .setImage('https://vignette.wikia.nocookie.net/jjba/images/5/59/HeyYacolor.png/revision/latest?cb=20171023172341')
        .setColor(0xe0d499)
        .setFooter("This Stand Is An Event Exclusive.")
        
const TheHandTheWorld = new Discord.MessageEmbed()
      .setTitle('The Hand: The World')
      .setDescription("This Stand Is The Exclusive Property Of <@741860257822670879>")
      .addField('Health', '900.')
      .addField('Punch', '80.')
      .addField("Timestop", "5 Turn Cooldown - Stun your opponent for the next 2 turns.")
      .addField("Erase Space", '4 Turn Cooldown - Your next attack is guaranteed to hit.')
      .addField("Knife Throw", '50x6 - 6 Turn Cooldown.')
      .addField("Erase Body Part", '150 - 5 Turn Cooldown.')
      .addField("Stand Rush", '80x4 - 5 Turn Cooldown.')
      .addField("Timestop Dodge", '4 Turn Cooldown - Dodge your opponents next attack.')
      .addField("Kick", '200 - 5 Turn Cooldown.')
      .addField("Road Roller", '250 - 6 Turn Cooldown - Roll a 10 sided dice, if you roll a odd number deal an extra 50 damage to your opponent. If you roll a even number than the attack goes on as normal.')
      .addField("Oi Josuke", '5 Turn Cooldown - Heal 200 Health.')
      .addField("Tonio Assist", '5 Turn Cooldown - Add an extra 1x to your attacks for the next 2 turns.')
      .addField("Koichi Assist: 3 Freeze", '4 Turn Cooldown - Stun your opponent for 1 turn.')
      .addField("Jotaro Assist: Star Platinum The World", '8 Turn Wait - 80x6 - Can Only Be Used Once Per Game - If this move is used during Timestop than extend the amount of turns your opponent is stunned by 1.')
      .addField("Passive: Too Dumb To Die", 'Can Only Be Used Once Per Game - When you die, get revived with 200 health left.')
      .setImage('https://media.discordapp.net/attachments/717270887870758942/734657866442604574/egvbdzgqonv21.jpg?width=991&height=662')
      .setColor(0x2d6bcf)
      .setFooter("This Stand Is An Admin Exclusive.")
      
const OceanMan = new Discord.MessageEmbed()
        .setTitle('Ocean Man')
        .setDescription("This Stand Is The Exclusive Property Of <@592471909707546634>")
        .addField('Health', '850.')
        .addField('Punch', '50.')
        .addField("Calming Waves", "5 Turn Cooldown/Wait - Heal 200 Health.")
        .addField("Take Me By The Hand", '200 - 4 Turn Cooldown.')
        .addField("Water Of Amazement", '5 Turn Cooldown/Wait - All your opponents moves on cooldown gets reset.')
        .addField("Mirror Of Water", '4 Turn Cooldown - Reflect your opponents next attack back at them.')
        .addField("Another Way Of Peace", '5 Turn Cooldown - 3 Turn Wait - Opponents Heal 100 Heath but get stunned for two turns.')
        .addField("Lead Me To The Land", '5 Turn Cooldown - 3 Turn Wait - Block your opponents next attack.')
        .addField("Soak The Land", '200 - 4 turn cooldown/wait - Stun your opponent for 1 turn.')
        .addField("Spiraling Whirlpool", '100x4 - 5 turn cooldown.')
        .addField("Rising Tides", '130 - 3 turn cooldown - Every time this move is used the number of sides that the dice that is rolled for damage has is raised by 10.')
        .addField("Passive: A Ocean Full Of Miracles", 'Block your opponents passives, stuns, and extra damage for the next 2 turns - Activates when healed.')
        .addField("2nd Passive: Great Waves", 'User and Allies gain x1 For the next turn - Activates when the user takes over 200 damage.')
        .setImage('https://media.discordapp.net/attachments/732140300272795710/735964966779224084/37BBE20D-B97C-4C02-80DA-237FC5F71046-removebg-preview.png')
        .setColor(0x4b4eab)
        .setFooter("This Stand Is An Admin Exclusive.")
        
const MrPresident = new Discord.MessageEmbed()
      .setTitle('Mr.President')
      .setDescription("This Stand Is The Exclusive Property Of <@592471909707546634>")
      .addField('Health', '1000.')
      .addField('Bite', '60.')
      .addField("Shell Spin", "4 Turn Cooldown - 80x6.")
      .addField("Key Capture", '5 Turn Cooldown - 3 Turn Wait - Cancel an opponents move and stun them for 1 turn.')
      .addField("Enter Room", '3 Turn Cooldown - Dodges your opponents next attack.')
      .addField("Key Shake", '200 - 4 turn cooldown - Can only be used while inside the room.')
      .addField("Key Throw", '300 - 5 turn cooldown - Can only be used while inside the room.')
      .addField("Room Flood", '5 Turn Cooldown - Stuns enemy for an extra 2 turns in the room - Can only be used while inside the room.')
      .addField("Turtle Snap", '250 - 4 Turn Cooldown.')
      .addField("Stored Items", '3 Turn Wait - 7 Turn Cooldown - Roll a 10 sided die depending on what you get is what item you use - Roll 1-3 Food, Gain 200 health back. Roll 4-6 Turtle Head Gear, all attack do 100 more damage for the next 3 turns. Roll 5-9 Taser, do 100 damage to your opponent. Roll 10 Choose what you get (only one.)')
      .addField("So Its The Same Type Of Stand", '5 Turn Wait - Copy one of your opponents move and ignore its wait. This move will be replaced with what move you choose.')
      .addField("Max Defense", 'Every damage done to you in the last 3 turns heals you - 5 turn wait/cooldown.')
      .addField("Turtle Evolution", '8 Turn Cooldown - 5 Turn Wait - Opponent Attacks do 25% less damage and all your attacks do 50% more damage for the next 3 turns.')
      .addField("Passive: Turtle Shell", 'Opponents attacks do 50% less damage.')
      .setImage('https://cdn.discordapp.com/attachments/717483024522018838/733755211495243846/president.gif')
      .setColor(0xdba81d)
      .setFooter("This Stand Is An Admin Exclusive.")
      
const Metallica = new Discord.MessageEmbed()
      .setTitle('Metallica')
      .setDescription("This Stand Is The Exclusive Property Of <@834484420290805800>")
      .addField('Health', '800.')
      .addField('Nail', '70.')
      .addField("Invisibility", "3 Turn Cooldown - Dodge Your Opponents Next Attack.")
      .addField("Stand Manipulation", '4 Turn Wait/Cooldown - This turn you do no damage but next turn your opponent loses their turn and instead you use your opponents punch attack against them plus whatever buffs they have.')
      .addField("Iron Manipulation", '130 - 4 Turn Cooldown - 3 Turn Wait - If this move is used 3 times successfully, your opponent will take a guaranteed 50 damage (the 50 extra damage still happens even on turns you are stunned, blocked or dodged) + whatever damage you deal to them every turn after the 3rd time this move successfully hits.')
      .addField("Knife Throw", '100×3 - 5 Turn Cooldown.')
      .addField("Remove Foot", '3 Turn Wait/Cooldown - Deal 50 damage to yourself but dodge your opponents next attack.')
      .addField("Summon Iron From Earth", '4 Turn Wait/Cooldown - Add an extra 1x to your next attack. Does not stack with Assassins Resolve.')
      .addField("Scissors In Throat", '130 - 4 Turn Cooldown - Cannot be dodged or blocked.')
      .addField("Iron Heal", '4 Turn Wait/Cooldown - Heal 200 Health.')
      .addField("Iron Steal", '5 Turn Cooldown - 200 - However much damage this attack does to the opponent, heal that much health back.')
      .addField("Razors In Throat", '50×6 - 6 Turn Cooldown - 4 Turn Wait - Cannot be dodged or blocked.')
      .addField("Nails In Face", '70×4 - 6 Turn Cooldown - 4 Turn Wait - Cannot be dodged or blocked.')
      .addField("Assassins Resolve", '4 Turn Wait/Cooldown - Add an extra 1x to your next attack. Does not stack with Summon Iron From Earth.')
      .addField("I Must Know Your Identidy", 'Can Only Be Used Against Characters Whose Attacks Involve Their Identity - Can Only Be Used Once Per Game - Any attack involving the opponents identity can no longer be used by the opponent.')
      .addField("Passive - Magnetism", 'Your attacks cannot be dodged.')
      .addField("2nd Passive - Eat The Frog", 'Every Time you use Iron Manipulation, your opponent can roll a 10 sided dice (your opponent must say they want to use Eat The Frog or this does not activate), if they roll a number lower than 6 than nothing happens and the effect continues as normal. If they roll higher than a 5 than they take damage as normal but you using Iron Manipulation successfully does not count this turn towards the 3 successful uses of Iron Manipulation needed to deal 50 extra damage per turn.')
      .setImage('https://media.discordapp.net/attachments/732140300272795710/733619685127618630/tenor.gif')
      .setColor(0x7b95a8)
      .setFooter("This Stand Is An Admin Exclusive.")
      
const CrazyDiamond = new Discord.MessageEmbed()
        .setTitle('Crazy Diamond')
        .addField('Health', '720.')
        .addField('Punch', '50.')
        .addField("DORA Barrage", "100x4 - 5 turn cooldown.")
        .addField("Restore", 'Can Only Be Used In 2v2s - Heal 100 of your teammates health - 5 turn cooldown.')
        .addField("Head Kick", '150 - 3 turn cooldown.')
        .addField("Auto Shot Glass", '150 -  3 turn cooldown.')
        .addField("Blood Slash", '200 - 5 turn cooldown - takes away 100 everytime used.')
        .addField("Rage", 'Next time the enemy hits you, you can activate rage mode and do ¼ more damage for 3 turns - 5 turn cooldown.')
        .setImage('https://i.pinimg.com/originals/27/4d/01/274d01fdcf3fe582ab3e52f55e6ce100.jpg')
        .setColor(0xde2f83)
        
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
        
const SilverChariot = new Discord.MessageEmbed()
        .setTitle('Silver Chariot')
        .addField('Health', '750.')
        .addField('Stab', '50.')
        .addField("Backstab", "75x2 - 4 Turn Cooldown.")
        .addField("Blade Ejection", '150 - 5 Turn Cooldown. Cannot attack next turn.')
        .addField("Pincusion Barrage", '80x5 - 6 Turn Cooldown.')
        .addField("Piercing Lunge", '80x2 - 2 Turn Cooldown - Stun Them For One Turn.')
        .addField("Armor Ejection", '6 Turn Cooldown/Wait - Remove Your Armor For Two Turns Making You Deal 25% More Damage But You Also Take An Additional 25% Damage.')
        .addField("Armor Block", '3 Turn Cooldown - Block an attack. Cannot be activated if armor is currently off.')
        .setImage('https://i.imgur.com/daQB3px.png')
        .setColor(0x9398c2)
        
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
      .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSihQ5w_PA8IyVMLluuMuZF-FHWwV7dfsWF-A&usqp=CAU')
      .setColor(0xcca516)
      
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
      
const StrayCat = new Discord.MessageEmbed()
        .setTitle('Stray Cat')
        .addField('Health', '700.')
        .addField('Air Bullet', '20.')
        .addField("Air Cannon", "100x2 - 4 Turn Cooldown.")
        .addField("Air Bubble Barrage", '5x50 - 4 Turn Cooldown.')
        .addField("Bubble Blast", '100x3 - 5 Turn Cooldown.')
        .addField("Air shield", '5 Turn Cooldown - Block An Attack.')
        .addField("Bubble Trap", '5 Turn Cooldown - Stun The Enemy For One Turn.')
        .setImage('https://vignette.wikia.nocookie.net/jjba/images/5/58/Stray_Cat.png/revision/latest?cb=20160417072845')
        .setColor(0xd41961)
        
const PurpleHazeDistortion = new Discord.MessageEmbed()                //this command is if you want embed with prefix and no ping
      .setTitle('Purple Haze Distortion')
      .addField('Health', '800,')
      .addField('Punch', '50.')
      .addField("Smoke Shot", "50x4 - 4 Turn Cooldown.")
      .addField("Wreckless Punch", '150 - 3 Turn Cooldown.')
      .addField("Bulb Breaker", '100x3 - 4 Turn Cooldown.')
      .addField("Bulb Throw", '100x2 - 3 Turn Cooldown.')
      .addField("Virus Cloud", '100x4 - 5 turn cooldown - roll a 10 sided dice, if u roll under 5 then the damage goes to you.')
      .addField('The Final Stand', "200x3 - 10 turn cooldown - break a bulb in your mouth and blow it at your opponent and roll out of 10 if you roll under 5 you take 100 damage.")
      .addField("Raging Virus", 'And x1 on all your abilities - 5 turn wait.')
      .setImage('https://vignette.wikia.nocookie.net/jjba/images/6/6c/Purple_Haze_Distortion.png/revision/latest?cb=20160417072947')
      .setColor(0x753c62)
      
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
      .addField("Foo Fighters Assist: Plankton Heal", '5 Turn Cooldown - Heal 100 Health.')
      .setImage('https://i.pinimg.com/originals/75/54/f1/7554f1083f8c38f03aba491f50367b31.png')
      .setColor(0xb5b3b3)

client.on('message', async message => {

  let args = message.content.slice(PREFIX.length).split(" ");

  switch (args[0].toLowerCase()) {
    
    case 'loan':
    var debt = db.fetch(`debt_${message.author.id}`)
    var money = db.fetch(`money_${message.author.id}`)
    if (money == null) money = 0
    if (debt == null) debt = 0
    if (debt !== 0) return message.channel.send(`Your Request For A Loan Has Been Denied Because You Are ${debt} Dollars In Debt. You Can Repay Your Debts By Doing E-Repay`)
    var wantedloan = args[1]
    if (!wantedloan) return message.channel.send("Amount You Want Loaned To You Not Specified")
    if (isNaN(wantedloan)) return message.channel.send("Amount You Want Loaned To You Must Be A Number")
    if (wantedloan > 1000) return message.channel.send(`Your Request For A Loan Has Been Denied Because The Amount You Want To Borrow Is ${Number(wantedloan) - Number(1000)} Dollars More Than The Maximum Loan Amount`)
    db.add(`money_${message.author.id}`, wantedloan)
    db.add(`debt_${message.author.id}`, wantedloan)
    message.channel.send(`Your Request For A Loan Has Been Accepted. ${wantedloan} Dollars Have Been Added To Your Balance And Your Debt Has Increased By ${wantedloan} Dollars`)
    break;
    case 'repay':
    var repayamount = args[1]
    if (!repayamount) return message.channel.send("Amount To Repay Not Specified")
    if (isNaN(repayamount)) return message.channel.send("Amount You Want To Repay Must Be A Number")
    var debt = db.fetch(`debt_${message.author.id}`)
    var money = db.fetch(`money_${message.author.id}`)
    if (money == null) money = 0
    if (debt == null) debt = 0
    if (debt == 0) return message.channel.send("You Don't Have A Debt To Repay")
    if (repayamount > money) return message.channel.send("You Don't Have That Much To Repay")
    if (repayamount > debt) return message.channel.send(`Your Debt Is Not That Big. You Only Owe ${debt} Dollars`)
    db.subtract(`money_${message.author.id}`, repayamount)
    db.subtract(`debt_${message.author.id}`, repayamount)
    message.channel.send(`You Have Repayed ${repayamount} Dollars And Your Debt Has Decreased To ${Number(debt) - Number(repayamount)} Dollars`)
    break;
    case 'reset':
    if (!args[1]) return message.channel.send("Thing To Reset Not Specified")
    if (args[1].toLowerCase() == 'health') {
    var items = db.get(message.author.id, {
        items: []})
    if (items === null) normalhealth = 0
    if (items == 'Whitesnake') normalhealth = 700
    db.set(`health_${message.author.id}`, normalhealth)
    message.channel.send(`Your Health Has Been Set Back To ${normalhealth}`)
    }break;
    case 'debt':
    var user = message.mentions.users.first()||message.author
    var debt = db.fetch(`debt_${user.id}`)
    if (debt == null) debt = 0
    if (debt == 0) return message.channel.send(`${user.username} Has No Debt To Repay`)
    if (debt == 1) return message.channel.send(`${user.username} Is ${debt} Dollar In Debt`)
    message.channel.send(`${user.username} Is ${debt} Dollars In Debt`)
    break;
    case 'health':
    var user = message.mentions.users.first()||message.author
    var health = db.fetch(`health_${user.id}`)
    if (health === null) health = 0
    message.channel.send(`${user.username} Has ${health} Health Left`)
    break;
    case 'stand':
    var user = message.mentions.users.first()||message.author
    var items = db.get(user.id, {
      items: []})
    if (items === null) items = "No Stand"
    const currentstand = new Discord.MessageEmbed()
    .setTitle(`${user.username}'s Stand`)
    .setDescription(items, user.displayAvatarURL())
    message.channel.send(currentstand)
    break;
    case 'balance':
    var user = message.mentions.users.first()||message.author
    var money = db.fetch(`money_${user.id}`)
    if (money === null) money = 0
    if (money === 1) {
      message.channel.send(`${user.username} Has ${money} Dollar In Their Balance`)
    }else message.channel.send(`${user.username} Has ${money} Dollars In Their Balance`)
    break;
    case 'set':
    if (args[1].toLowerCase() == 'health') {
    var totalhealth = args[2]
    if (!totalhealth) return message.channel.send("Amount Of Health Not Specified")
    if (isNaN(totalhealth)) return message.channel.send("Amount Of Health Must Be In Number Form")
    db.set(`health_${message.author.id}`, totalhealth)
    message.channel.send(`Your Total Health Has Been Set To ${totalhealth}`)
    }break;
    case 'recover':
    var health = db.fetch(`health_${message.author.id}`)
    if (health === null) health = 0
    var heal = args[1]
    if (!heal) return message.channel.send("Amount To Recover Not Specified")
    if (isNaN(heal)) return message.channel.send("Amount To Recover Must Be In Number Form")
    message.channel.send(`You Recovered ${heal} Health And Now Have ${Number(health) + Number(heal)} Health Left`)
    db.set(`health_${message.author.id}`, Number(health) + Number(heal))
    break;
    case 'damage':
    var health = db.fetch(`health_${message.author.id}`)
    if (health === null) health = 0
    var damagehealth = args[1]
    if (!damagehealth) return message.channel.send("Amount Of Damage Not Specified")
    if (isNaN(damagehealth)) return message.channel.send("Amount Of Damage Must Be In Number Form")
    if (0 > health - damagehealth||health - damagehealth == 0) {
      message.channel.send(`${message.author.username} Has Lost`)
      db.set(`health_${message.author.id}`, 0)
    }else {message.channel.send(`You Took ${damagehealth} Damage And Now Have ${health - damagehealth} Health Left`)
    db.set(`health_${message.author.id}`, Number(health) - Number(damagehealth))
   }break;
    case 'gamble':
      if (message.author.bot === true && message.author.id != '849653683435864115') return message.channel.send("Bots Can Not Gamble")
      var money = db.fetch(`money_${message.author.id}`)
      const bet = args[1]
      if (!bet) return message.channel.send("Amount To Gamble Not Specified")
      var extra = (bet - money)
      if (bet > money) return message.channel.send(`You Don't Have That Much Money To Gamble. You Went Over By ${extra} Dollars`)
      if (isNaN(bet)) {
        message.channel.send("Amount To Gamble Must Be In Number Form")}
      const chances = ["win",
         "win",
        "lose",
        "lose",
        "lose",
        "lose",
        "lose",
        "lose",
        "lose",
        "jackpot"]
      const pick = chances[Math.floor(Math.random() * chances.length)];
      if (pick === 'win') {
        const winamount = new Discord.MessageEmbed()
        .setTitle(`The Gamble Paid Off`)
        .setAuthor(`${message.author.username} Won`, message.author.displayAvatarURL())
        .setDescription(`${bet} Dollars Have Been Added To Your Balance`)
        .setFooter("You Can Chech Your Balance By Doing e-Info")
        .setColor("BLUE")
        message.channel.send(winamount)
        db.add(`money_${message.author.id}`, bet)
      }if (pick === 'lose') {
        const loseamount = new Discord.MessageEmbed()
        .setTitle(`The Gamble Did Not Pay Off`)
        .setAuthor(`${message.author.username} Lost`, message.author.displayAvatarURL())
        .setDescription(`${bet} Dollars Have Been Subtracted From Your Balance`)
        .setFooter("You Can Chech Your Balance By Doing e-Balance")
        .setColor("RED")
        message.channel.send(loseamount)
        db.subtract(`money_${message.author.id}`, bet)
      }if (pick === 'jackpot') {
        const jackpotbet = Math.imul(bet, 5);
        const jackpotamount = new Discord.MessageEmbed()
        .setTitle(`You Struck The Jackpot`)
        .setAuthor(`${message.author.username} Won The Jackpot`, message.author.displayAvatarURL())
        .setDescription(`${jackpotbet} Dollars Have Been Added To Your Balance`)
        .setFooter("You Can Chech Your Balance By Doing e-Info")
        .setColor("GREEN")
        message.channel.send(jackpotamount)
        db.add(`money_${message.author.id}`, jackpotbet)
    }break;
    case 'hourly':
      if (message.author.bot === true && message.author.id != '849653683435864115') return message.channel.send("Bots Can Not Claim A Hourly Reward")
      let hourly = await db.fetch(`hourly_${message.author.id}`);
      let hourtimeout = 3600000
      let houramount = 10
      if (hourly != null && hourtimeout - (Date.now() - hourly) > 0) {
        let hourtime = parsems(hourtimeout - (Date.now() - hourly));
        message.channel.send(`You Already Claimed Your Hourly Reward. Next Reward Availible In ${hourtime.minutes} Minutes, And ${hourtime.seconds} Seconds`)
      } else {
        let hourlyreward = new Discord.MessageEmbed()
        .setAuthor("Hourly", message.author.displayAvatarURL)
        .setColor("GREEN")
        .setDescription("Hourly Rewards")
        .addField("Collected", `${houramount} Dollars`)
        message.channel.send(hourlyreward)
        db.add(`money_${message.author.id}`, houramount)
        db.add(`hourly_${message.author.id}`, Date.now())
       }break;
    case 'daily':
      if (message.author.bot === true && message.author.id != '849653683435864115') return message.channel.send("Bots Can Not Claim A Daily Reward")
      let daily = await db.fetch(`daily_${message.author.id}`);
      let timeout = 86400000
      let amount = 100
      if (daily != null && timeout - (Date.now() - daily) > 0) {
        let time = parsems(timeout - (Date.now() - daily));
        message.channel.send(`You Already Claimed Your Daily Reward. Next Reward Availible In ${time.hours} Hours, ${time.minutes} Minutes, And ${time.seconds} Seconds`)
      } else {
        let dailyreward = new Discord.MessageEmbed()
        .setAuthor("Daily", message.author.displayAvatarURL)
        .setColor("GREEN")
        .setDescription("Daily Rewards")
        .addField("Collected", `${amount} Dollars`)
        message.channel.send(dailyreward)
        db.add(`money_${message.author.id}`, amount)
        db.add(`daily_${message.author.id}`, Date.now())
       }break;
    case 'work':
      if (message.author.bot === true && message.author.id != '849653683435864115') return message.channel.send("Bots Can Not Work")
      {
        let timeoutworked = 3600000
        let worked = db.fetch(`worked_${message.author.id}`)
        if (worked != null && timeoutworked - (Date.now() - worked) > 0) {
          let time = parsems(timeoutworked - (Date.now() - worked));
          message.channel.send(`You Already Worked. You Can Work Again In ${time.minutes} Minutes And ${time.seconds} Seconds`)
        } else {
          let amountearned = Math.floor(Math.random() *35) + 15
          let jobs = ["Assasin",
            "Gangster",
            "Marine Biologist",
            "SpeedWagon Foundation Employee",
            "Kame Yu Department Employee",
            "Manga Artist",
            "Fortune Teller",
            "Prison Guard",
            "United States President",
            "Fruit Parlor Employee",
            "Priest"]
          let job = jobs[Math.floor(Math.random() *jobs.length)]
          let working = new Discord.MessageEmbed()
          .setAuthor(`${message.author.tag} Got Paid`, message.author.displayAvatarURL())
          .setDescription(`${message.author} Worked As A ${job} And Earned ${amountearned} Dollars`)
          message.channel.send(working)
          db.add(`money_${message.author.id}`, amountearned)
          db.set(`worked_${message.author.id}`, Date.now())
    }}break;
    case `get`:
      if (message.author.bot === true && message.author.id != '849653683435864115') return message.channel.send("Bots Can Not Get Money")
      let wantedamount = (args[1])
      if (message.author.id === "834484420290805800"||message.author.id === '849653683435864115') {
        if (!wantedamount) {
          message.channel.send("Amount To Get Not Specified")
        } else {
          if (isNaN(wantedamount)) {
            message.channel.send("Amount To Get Must Be In Number Form")
          } else {
            const adminget = new Discord.MessageEmbed()
            .setAuthor(`${message.author.tag} Got ${wantedamount}`, message.author.displayAvatarURL())
            .setDescription(`${message.author} Got ${wantedamount} Dollars`)
            message.channel.send(adminget)
            db.add(`money_${message.author.id}`, wantedamount)
          }}} else {
        return undefined
    }break;
    case 'remove':
      if (message.author.bot === true && message.author.id != '849653683435864115') return message.channel.send("Bots Can Not Remove Money")
      var user = message.author
      var money = db.fetch(`money_${user.id}`)
      let unwantedamount = (args[1])
      if (message.author.id === "834484420290805800"||message.author.id === '849653683435864115') {
        var extra = (unwantedamount - money)
        if (!unwantedamount) {
          message.channel.send("Amount To Get Rid Of Not Specified")
        } else {
          if (money < unwantedamount) {
            message.channel.send(`You Dont Have That Much To Get Rid Of. You Went Over By ${extra} Dollars`)
          } else {
            if (isNaN(unwantedamount)) {
              message.channel.send("Amount To Get Rid Of Must Be In Number Form")
            } else {
              const adminremove = new Discord.MessageEmbed()
              .setAuthor(`${message.author.tag} Removed ${unwantedamount} Dollars`, message.author.displayAvatarURL())
              .setDescription(`${message.author} Removed ${unwantedamount} Dollars`)
              message.channel.send(adminremove)
              db.subtract(`money_${message.author.id}`, unwantedamount)
            }}}} else {
        return undefined
    }break;
    case 'give':
      var user = message.author
      var otheruser = message.mentions.users.first()
      if (user.bot === true && user.id != '849653683435864115') return message.channel.send("Bots Can Not Give Money")
      if (otheruser.bot == true) return message.reply('Can Not Give To A Bot');
      if (otheruser.id == message.author.id) return message.reply('Cannot Give To Yourself');
      var money = db.fetch(`money_${user.id}`)
      if (!otheruser) {
        message.channel.send("Person To Give Money To Not Specified")
      }
      let giveamount = (args[2])
      if (isNaN(giveamount)) {
        message.channel.send("Amount To Give Must Be In Number Form")
      } else {
      var extra = (giveamount - money)
      if (giveamount > money) {
        message.channel.send(`You Dont Have Enough Money To Give. You Went Over By ${extra} Dollars`)
      } else {
        if (!giveamount) {
          message.channel.send('No Amount To Give Specified')
        } else {
          const givemoney = new Discord.MessageEmbed()
          .setAuthor(`${message.author.tag} Gave ${giveamount} Dollars`, message.author.displayAvatarURL())
          .setDescription(`${message.author} Gave ${giveamount} Dollars To ${otheruser}`)
          message.channel.send(givemoney)
          db.subtract(`money_${message.author.id}`, giveamount)
          db.add(`money_${otheruser.id}`, giveamount)
          if (isNaN(giveamount)) {
            message.channel.send("Amount To Give Must Be In Number Form")
          }
        }
      }
    }break;
    case 'covid':
    if (!args[1]) return message.channel.send("Location Not Specified")
      if (args[1].toLowerCase() === 'world') {
        const data = await covid.all()
        const worldcoronavirus = new Discord.MessageEmbed()
        .setTitle("Worldwide Covid-19 Data")
        .setDescription("Data May Vary From Other Sources")
        .setColor(0xe62012)
        .addField("Tests Total", data.tests)
        .addField("Cases Total", data.cases)
        .addField("New Cases Today", data.todayCases)
        .addField("Deaths Total", data.deaths)
        .addField("New Deaths Today", data.todayDeaths)
        .addField("Active Cases", data.active)
        .addField("Cases In Critical Condition", data.critical)
        .addField("Recovered", data.recovered)
        .addField("Affected Countries", data.affectedCountries)
        message.channel.send(worldcoronavirus)
      } else if (message.content.startsWith("E-covid")) {
        var countrycovid = message.content.slice(PREFIX.length).split(' ')
        var countrydata = await covid.countries({
          country: countrycovid
        })
        const countrycoronavirus = new Discord.MessageEmbed()
        .setTitle(`${countrycovid[1]} Covid-19 Data`)
        .setDescription("Data May Vary From Other Sources")
        .setColor(0xe62012)
        .addField("Tests Total", countrydata.tests)
        .addField("Cases Total", countrydata.cases)
        .addField("Cases Today", countrydata.todayCases)
        .addField("Deaths Total", countrydata.deaths)
        .addField("Deaths Today", countrydata.todayDeaths)
        .addField("Active Cases", countrydata.active)
        .addField("Cases In Critical Condition", countrydata.critical)
        .addField("Recovered", countrydata.recovered)
        message.channel.send(countrycoronavirus)
      } else if (message.content.startsWith("e-covid")) {
        var countrycovid = message.content.slice(PREFIX.length).split(' ')
        var countrydata = await covid.countries({
          country: countrycovid
        })
        const countrycoronavirusbutlowercase = new Discord.MessageEmbed()
        .setTitle(`${countrycovid[1]} Covid-19 Data`)
        .setDescription("Data May Vary From Other Sources")
        .setColor(0xe62012)
        .addField("Tests Total", countrydata.tests)
        .addField("Cases Total", countrydata.cases)
        .addField("Cases Today", countrydata.todayCases)
        .addField("Deaths Total", countrydata.deaths)
        .addField("Deaths Today", countrydata.todayDeaths)
        .addField("Active Cases", countrydata.active)
        .addField("Cases In Critical Condition", countrydata.critical)
        .addField("Recovered", countrydata.recovered)
        message.channel.send(countrycoronavirusbutlowercase)
    }break;
    case 'arrow':
      if (message.author.bot === true && message.author.id != '849653683435864115') return message.channel.send("Bots Can Not Buy Arrows")
      var money = db.fetch(`money_${message.author.id}`)
      var extra = (150 - money)
      if (150 > money) return message.channel.send(`You Don't Have Enough To Buy A Stand Arrow. You Need ${extra} More Dollars`)
      var name = message.author.username
      const Stands = ["PHD",
        "Hermit Purple",
        "White Album",
        "Heavens Door",
        "Soft And Wet",
        "Hierophant Green",
        "Enigma",
        "Sticky Fingers",
        "SPTW",
        "Echoes Egg",
        "Silver Chariot",
        "The Fool",
        "TWAU",
        "Whitesnake",
        "Stray Cat",
        "Crazy Diamond",
        "The Hand",
        "Killer Queen",
        "Wheel Of Fortune",
        "Hanged Man",
        "Tower Of Gray",
        "Love Deluxe",
        "Geb",
        "RHCP",
        "Moody Blues",
        "Gold Experience",
        "Sex Pistols",
        "Emperor"]
      const randomlychosenstand = Stands[Math.floor(Math.random() * Stands.length)];
      var items = db.get(message.author.id, {
        items: []})
      if (items === null) {
        const randomstands = new Discord.MessageEmbed()
        .setTitle(`You Got ${randomlychosenstand} As Your Stand. Congratulations`)
        .setAuthor(`You Bought A Stand Arrow And Used It To Get A New Stand`, message.author.displayAvatarURL())
        .setDescription("You Can Reset Your Stand To Get A New One By Doind e-roka")
        .setFooter(`Check Your New Stand's Stats By Doing e-${randomlychosenstand}`)
        .setColor("RANDOM")
        message.channel.send(randomstands)
        db.push(message.author.id, `${randomlychosenstand}`)
        db.subtract(`money_${message.author.id}`, 150)
      } else {
        message.channel.send("You Already Have A Stand")
      }break;
    case 'roka':
      if (message.author.bot === true && message.author.id != '849653683435864115') return message.channel.send("Bots Can Not Buy Rokas")
        var money = db.fetch(`money_${message.author.id}`)
        var extra = (100 - money)
         if (100 > money) return message.channel.send(`You Don't Have Enough To Buy A Roka. You Need ${extra} More Dollars`)
         var items = db.get(message.author.id, {
          items: []})
        if (items === null) return message.channel.send("You Don't Have A Stand To Reset")
        message.channel.send("You Bought A Roka And Ate It To Reset Your Stand")
         db.delete(message.author.id, items)
        db.subtract(`money_${message.author.id}`, 100)
     break;
     case 'help':
      message.channel.send("My Bitch Ass Owner Didnt Make A Help Command Yet")
     break;
     case 'meme':
      if (args[1]) return message.channel.send("The Command Where You Can Choose The Subreddit Has Been Changed To E-Reddit")
      var user = message.author
      if (user.bot === true && user.id != '849653683435864115') return message.channel.send("Bots Can Not Use This Command")
      const subReddits = ["dankmeme",
        "dankmemes",
        "meme",
        "memes"]
      const random = subReddits[Math.floor(Math.random() * subReddits.length)];
      const img = await randomPuppy(random);
      if (!img) return message.channel.send("Image Not Properly Loaded. Please Try Again")
      message.channel.send(`${img}`)
    break;
    case 'reddit':
    const chosensubreddit = args[1]
    if (!chosensubreddit) return message.channel.send("Subreddit Not Specified")
    const chosenimg = await randomPuppy(chosensubreddit);
    if (!chosenimg) return message.channel.send("SubReddit Not Found Or Image Not Properly Loaded. Please Try Again If This Is The First Time This Subreddit Did Not Work")
    message.channel.send(`${chosenimg}`)
    break;
    case 'info':
      var user = message.mentions.users.first() || message.author
      var items = db.get(user.id, {
        items: []})
      if (items === null) items = "No Stand"
      var money = db.fetch(`money_${user.id}`)
      if (money === null) money = 0
      if (user.bot === true) return message.channel.send("Can Not Check Info Of A Bot")
      const Info = new Discord.MessageEmbed()
      .setTitle('User Information')
      .setAuthor('User Image', user.displayAvatarURL())
      .addField('User Name', user.username, true)
      .addField('User Id', user.id, true)
      .addField("Current Stand", items, true)
      .addField("Current Balance", `${money} Dollars`, true)
      .addField('Current Server', message.guild.name, true)
      .addField('Server Owner', message.guild.owner, true)
      message.channel.send(Info);
    break;
    case 'tutorial':
      const Tutorial = new Discord.MessageEmbed()
      .setTitle('How To Play')
      .addField('Basic Rules', 'In order to start playing, you must do the turn bot command (.start @player1 v @player2) to choose who goes first, do a dice roll (!1d10), both players choosing either high or low. (Example: If you chose high, but the number is 4 and under, you go last) each player gets a move to attack, dodge, block, heal, or buff themselves every turn. This means you do not use .next unless all players have done an action if you use any buff that increases damage, do not put decimals. Round the damage.')
      .addField('How To Attack', 'In order to attack, you have to do the dice command that correlates to the move you want to use. Example (Punch says 50 damage, so the dice command would be !1d50. Same with other moves that have no dice multiplier.) Example 2 (Rapid Fire on Sex Pistols says 50x6 so the dice command would be !6d50. Same with other moves that have a dice multiplier.) Remember to look at any buffs that increase your damage to have a precise amount of damage.')
      .addField('Special Actions', 'Dodging and blocking attacks result in the opponent using their attack, making it go on cooldown, but not taking any damage from it. Healing can heal yourself or any teammate (Unless the command says only yourself or only a teammate) Stunning makes your opponent unable to move, so they cannot attack, dodge, block, or heal.')
      .addField('Waits And Cooldowns', 'If your attack is on cooldown, you are unable to use it unless the required amount turns has been passed. (Example: Rapid Fire on Sex Pistols has a 4 turn cooldown. If you use it on turn 1, 4 turns have to pass until you can use it again). Waits have you wait until the required amount of turns have passed until you can use the move. Example: 7 page MUDA has a 6 turn wait, so on turn 7 you can use the attack.')
      .addField('Passives', 'Passives are abilities some stands can have that are always active. (Example: Moody Blues Passive, Shut Up Giorno makes your opponent unable to use healing moves.) All passives are different, and remember to read them closely.')
      .addField('How To Unlock Spin', 'Survive up to turn 5. On your 5th Turn, instead of rolling to attack, roll a 1-100 dice. If you Roll a Prime Number you will have the potential to learn Spin. If you do not roll a prime number than you do not get Spin. Win the game while having the potential to learn spin and you shall gain spin. If you lose than you wont get spin.')
      .addField("How To Unlock Ball Breaker", 'Use a corpse part and win the fight with Spin (If you use the corpse part at under 200 health and win the fight at 50 health with spin than you will get Tusk Act 1 instead).')
      .addField('How To Unlock Tusk', '__**Tusk Act 1:**__ Use a corpse part at under 200 health and win with 50 health or below with Spin (If you win with more than 50 health after using the corpse part than you get Ball Breaker instead). __**Tusk Act 2:**__ Use a corpse part and win two games under 100 health in a row with Tusk Act 1). __**Tusk Act 3:**__ Win a game under 50 health and use a corpse well under 100 health with Tusk Act 2. __**Tusk Act 4:**__ Use a corpse part and win with under 100 health with Tusk Act 3.')
      .addField('How To Unlock Echoes', '__**Echoes Egg:**__ There Is No Method To Unlock Echoes Egg Besides Selecting It As Your Current Stand. __**Echoes Act 1:**__ Win a match with Echoes Egg after using hatch 3 times. __**Echoes Act 2:**__ Win a match under 150 health with Echoes Act 1. __**Echoes Act 3:**__ Win 3 matches in a row. On your last match you must be above 300 health with Echoes Act 2.')
      message.channel.send(Tutorial);
      break;
    case 'public':
      if (args[1].toLowerCase() === 'stands') {
        const PublicStands1 = new Discord.MessageEmbed()
        .setTitle('Public Stands')
        .setDescription('39 Total Public Stands.')
        .addField('1', "Purple Haze Distortion.")
        .addField('2', "Hermit Purple.")
        .addField('3', "White Album.")
        .addField('4', "Heavens Door.")
        .addField('5', "Soft And Wet.")
        .addField('6', "Hierophant Green.")
        .addField('7', "Enigma.")
        .addField('8', "Sticky Fingers.")
        .addField('9', "Star Platinum: The World.")
        .addField('10', "Echoes Egg.")
        .addField('11', "Echoes Act 1.")
        .addField('12', "Echoes Act 2.")
        .addField('13', "Echoes Act 3.")
        .addField('14', "Tusk Act 1.")
        .addField('15', "Tusk Act 2.")
        .addField('16', "Tusk Act 3.")
        .addField('17', "Tusk Act 4.")
        .addField('18', "Spin.")
        .addField('19', "Silver Chariot.")
        .addField('20', "The Fool.")
        .addField('21', "Ball Breaker.")
        .addField('22', "The World: Alternate Universe.")
        .addField('23', "Whitesnake.")
        .addField('24', "C-Moon.")
        .addField('25', "Made In Heaven.")
        message.channel.send(PublicStands1);
        const PublicStands2 = new Discord.MessageEmbed()
        .setTitle('Public Stands 2')
        .addField('26', "Stray Cat.")
        .addField('27', "Crazy Diamond.")
        .addField('28', "The Hand.")
        .addField('29', "Killer Queen.")
        .addField('30', "Wheel Of Fortune.")
        .addField('31', "Hanged Man.")
        .addField('32', "Tower Of Gray.")
        .addField('33', "Love Deluxe.")
        .addField('34', "Geb.")
        .addField('35', "Red Hot Chili Pepper.")
        .addField('36', "Moody Blues.")
        .addField('37', "Gold Experience.")
        .addField('38', "Sex Pistols.")
        .addField('39', "Emperor.")
        message.channel.send(PublicStands2);
      }break;
    case 'event':
      if (args[1].toLowerCase() === 'stands') {
        const EventStands = new Discord.MessageEmbed()
        .setTitle('Event Stands')
        .setDescription('5 Total Event Stands.')
        .addField('1', "Hey Ya.")
        .addField('2', "Dirty Deeds Done Dirt Cheap: Love Train.")
        .addField('3', "Kiss (This Stand Is The Exclusive Property Of <@678443627046895623>).")
        .addField('4', "Forbidden Fruit.")
        .addField('5', "Frog Experience.")
        .setFooter('Stands That Are The Exclusive Property Of Someone Can Only Be Used By That Person.')
        message.channel.send(EventStands);
      }break;
    case 'admin':
      if (args[1].toLowerCase() === 'stands') {
        const AdminStands = new Discord.MessageEmbed()
        .setTitle('Admin Stands')
        .setDescription('5 Total Admin Stands.')
        .addField('1', "Metallica (This Stand Is The Exclusive Property Of <@834484420290805800>).")
        .addField('2', "Mr.President (This Stand Is The Exclusive Property Of <@592471909707546634>).")
        .addField('3', "Ocean Man (This Stand Is The Exclusive Property Of <@592471909707546634>).")
        .addField('4', "The Hand: The World (This Stand Is The Exclusive Property Of <@741860257822670879>).")
        .setFooter('Stands That Are The Exclusive Property Of Someone Can Only Be Used By That Person.')
        message.channel.send(AdminStands);
      }break;
    case 'phd':
      message.channel.send(PurpleHazeDistortion);
      break;
    case 'stray':
      if (args[1].toLowerCase() === 'cat') {
        message.channel.send(StrayCat);
      }break;
    case 'whitesnake':
      message.channel.send(Whitesnake);
      break;
    case 'c-moon':
      message.channel.send(CMoon);
      break;
    case 'twau':
      message.channel.send(TheWorldAlternateUniverse);
      break;
    case 'silver':
      if (args[1].toLowerCase() === 'chariot') {
        message.channel.send(SilverChariot);
      }break;
    case 'ball':
      if (args[1].toLowerCase() === 'breaker') {
        message.channel.send(BallBreaker);
      }break;
    case 'crazy':
      if (args[1].toLowerCase() === 'diamond') {
        message.channel.send(CrazyDiamond);
      }break;
    case 'metallica':
      message.channel.send(Metallica);
      break;
    case 'mr.president':
      message.channel.send(MrPresident);
      break;
    case 'ocean':
      if (message.author.id == '347461124582801408') return message.channel.send("Nah Bitch")
      if (args[1].toLowerCase() === 'man') {
        message.channel.send(OceanMan);
      }break;
    case 'thtw':
      message.channel.send(TheHandTheWorld);
      break;
    case 'hey':
      if (args[1].toLowerCase() === 'ya') {
        message.channel.send(HeyYa);
      }break;
    case 'd4c:lt':
      message.channel.send(D4CLT);
      break;
    case 'kiss':
      message.channel.send(Kiss);
      break;
    case 'frog':
      if (args[1].toLowerCase() === 'experience') {
        message.channel.send(FrogExperience);
      }break;
    case 'forbidden':
      if (args[1].toLowerCase() === 'fruit') {
        message.channel.send(ForbiddenFruit);
      }break;
    case 'hierophant':
      if (args[1].toLowerCase() === 'green') {
        message.channel.send(HierophantGreen);
      }break;
    case 'hermit':
      if (args[1].toLowerCase() === 'purple') {
        message.channel.send(HermitPurple);
      }break;
    case 'white':
      if (args[1].toLowerCase() === 'album') {
        message.channel.send(WhiteAlbum);
      }break;
    case 'soft':
      if (args[1].toLowerCase() === 'and') {
        if (args[2].toLowerCase() === 'wet') {
          message.channel.send(SoftAndWet);
        }}break;
    case 'heavens':
      if (args[1].toLowerCase() === 'door') {
        message.channel.send(HeavensDoor);
      }break;
    case 'enigma':
      message.channel.send(Enigma);
      break;
    case 'sticky':
      if (args[1].toLowerCase() === 'fingers') {
        message.channel.send(StickyFingers);
      }break;
    case 'sptw':
      message.channel.send(StarPlatinumTheWorld);
      break;
    case 'wheel':
      if (args[1].toLowerCase() === 'of') {
        if (args[2].toLowerCase() === 'fortune') {
          message.channel.send(WheelOfFortune);
        }}break;
    case 'hanged':
      if (args[1].toLowerCase() === 'man') {
        message.channel.send(HangedMan);
      }break;
    case 'the':
      if (!args[1]) return message.channel.send("Full Name Of Stand Not Specified").then(message => message.delete({
        timeout: 5000
      }));
      if (args[1].toLowerCase() === 'fool') {
        message.channel.send(TheFool);
      }if (args[1].toLowerCase() === 'hand') {
        message.channel.send(TheHand);
      }break;
    case 'echoes':
      if (!args[1]) return message.channel.send("Echoes Type Not Specified")
      if (args[1].toLowerCase() === 'egg') {
        message.channel.send(EchoesEgg);
      }if (args[1].toLowerCase() === 'act') {
        if (!args[2]) return message.channel.send("Echoes Act Not Specified")
        if (args[2].toLowerCase() === '1') {
          message.channel.send(EchoesAct1);
        }if (args[2].toLowerCase() === '2') {
          message.channel.send(EchoesAct2);
        }if (args[2].toLowerCase() === '3') {
          message.channel.send(EchoesAct3);
        }}break;
    case 'tusk':
      if (!args[1]) return message.channel.send("Tusk Type Not Specified")
      if (!args[2]) return message.channel.send("Tusk Act Not Specified")
      if (args[1].toLowerCase() === 'act') {
        if (args[2].toLowerCase() === '1') {
          message.channel.send(TuskAct1);
        }} if (args[2].toLowerCase() === '2') {
        message.channel.send(TuskAct2);
      } if (args[2].toLowerCase() === '3') {
        message.channel.send(TuskAct3);
      } if (args[2].toLowerCase() === '4') {
        message.channel.send(TuskAct4);
      }break;
    case 'spin':
      message.channel.send(Spin);
      break;
    case 'made':
      if (args[1].toLowerCase() === 'in') {
        if (args[2].toLowerCase() === 'heaven') {
          message.channel.send(MadeInHeaven);
        }}break;
    case 'killer':
      if (args[1].toLowerCase() === 'queen') {
        message.channel.send(KillerQueenPart4);
      }break;
    case 'magicians':
      if (args[1].toLowerCase() === 'red') {
        message.channel.send(MagiciansRed);
      }break;
    case 'tower':
      if (args[1].toLowerCase() === 'of') {
        if (args[2].toLowerCase() === 'gray') {
          message.channel.send(TowerOfGray);
        }}break;
    case 'love':
      if (args[1].toLowerCase() === 'deluxe') {
        message.channel.send(LoveDeluxe);
      }break;
    case 'geb':
      message.channel.send(Geb);
      break;
    case 'rhcp':
      message.channel.send(RedHotChiliPepper);
      break;
    case 'moody':
      if (args[1].toLowerCase() === 'blues') {
        message.channel.send(MoodyBlues);
      }break;
    case 'gold':
      if (args[1].toLowerCase() === 'experience') {
        message.channel.send(GoldExperience);
      }break;
    case 'sex':
      if (args[1].toLowerCase() === 'pistols') {
        message.channel.send(SexPistols);
    }break;
    case 'emperor':
      message.channel.send(Emperor);
      break;
    case 'ping': //This command is if you want the bot to use prefix and no ping.
      message.channel.send('Pong')
      break;
    case 'pong':
      message.channel.send('Ping')
      break;
    case 'mom':
      if (message.author.id != '588195300737417222' && message.author.id != '834484420290805800' && message.author.id != '849653683435864115') return
      message.channel.send('I Love You Mommy')
      break;
    case 'gala':
      if (message.author.id != '588195300737417222' && message.author.id != '834484420290805800' && mesage.author.id != '849653683435864115') return
      message.channel.send('I Love You Baba Gala')
      break;
    case 'son':
      if (message.author.id != '588195300737417222' && message.author.id != '834484420290805800' && message.author.id != '849653683435864115') return
      message.channel.send("I Love You Son")
      break;
    case 'bot':
      if (message.author.bot === true && message.author.id != '849653683435864115') return message.channel.send("Bots Can Not Use This Command")
      if (!args[1]) return undefined
      if (args[1].toLowerCase() != 'invite') { return undefined
      }else message.channel.send('https://discord.com/api/oauth2/authorize?client_id=849653683435864115&permissions=8&scope=bot')
      break;
      case 'miss':
      if (message.author.bot === true && message.author.id != '849653683435864115') return message.channel.send("Bots Can Not Use This Command")
      if (message.author.id != '588195300737417222' && message.author.id != '834484420290805800' && message.author.id != '849653683435864115') return
      if (!args[1]) return undefined
      if (args[1].toLowerCase() != 'you') { return undefined
      }else message.channel.send('I Miss You Too Mommy')
      break;
  }
})

client.on('message',
  msg=> {
    if (msg.content.toLowerCase() === "oof") {
      msg.reply('O o f'); //this command is if you want the bot to ping you without prefix when responding.
    }
  })

client.on('message',
  message=> {

    let args = message.content.substring(PREFIX.length).split(" ")

    switch (args[0].toLowerCase()) {
      case 'oof': //this command is if you want the bot to use prefix and ping.
        message.reply('O o f')
        break;
    }
  })

client.on('message',
  msg=> {
    if (msg.content === "I, Giorno Giovanna, Have A Dream") {
      msg.channel.send('Shut The Fuck Up Giorno Before I Make You Drink More Of My Piss'); //this command is if you want no prefix and no ping.
    }
  })

client.on('message',
  msg=> {
    if (msg.content === "I Giorno Giovanna Have A Dream") {
      msg.channel.send('Shut The Fuck Up Giorno Before I Make You Drink More Of My Piss');
    }
  })

client.on('message',
  msg=> {
    if (msg.content === "I, GIORNO GIOVANNA, HAVE A DREAM") {
      msg.channel.send('SHUT THE FUCK UP GIORNO BEFORE I MAKE YOU DRINK MORE OF MY PISS');
    }
  })

client.on('message',
  msg=> {
    if (msg.content === "I GIORNO GIOVANNA HAVE A DREAM") {
      msg.channel.send('SHUT THE FUCK UP GIORNO BEFORE I MAKE YOU DRINK MORE OF MY PISS');
    }
  })

client.on('message',
  msg=> {
    if (msg.content === "I giorno giovanna have a dream") {
      msg.channel.send('Shut the fuck up giorno before i make you drink more of my piss');
    }
  })

client.on('message',
  msg=> {
    if (msg.content === "i giorno giovanna have a dream") {
      msg.channel.send('shut the fuck up giorno before i make you drink more of my piss');
    }
  })

client.on('message',
  msg=> {
    if (msg.content === "I Giorno Giovanna have a dream") {
      msg.channel.send('Shut the fuck up Giorno before i make you drink more of my piss');
    }
  })

client.on('message',
  msg=> {
    if (msg.content === "I, giorno giovanna, have a dream") {
      msg.channel.send('Shut the fuck up giorno before i make you drink more of my piss');
    }
  })

client.on('message',
  msg=> {
    if (msg.content === "i, giorno giovanna, have a dream") {
      msg.channel.send('shut the fuck up giorno before i make you drink more of my piss');
    }
  })

client.on('message',
  msg=> {
    if (msg.content === "I, Giorno Giovanna, have a dream") {
      msg.channel.send('Shut the fuck up Giorno before i make you drink more of my piss');
    }
  })

  client.on('message', async message => {
    let args = message.content.slice(PREFIX.length).split(" ");
    const searchString = args.slice(1).join(' ')
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : ''
    const serverQueue = queue.get(message.guild.id)
  if(message.content.toLowerCase().startsWith(`${PREFIX}play`)) {
    if (message.author.bot === true && message.author.id != '849653683435864115') return message.channel.send("Bots Cannot Use This Command")
    const voiceChannel = message.member.voice.channel
    if (!voiceChannel) return message.channel.send("Must Be In A Voice Channel To Play Music")
    const permissions = voiceChannel.permissionsFor(message.client.user)
    if (!permissions.has('CONNECT')) return message.channel.send("I Do Not Have Permission To Join The Voice Channel")
    if (!permissions.has('SPEAK')) return message.channel.send("I Do Not Have Permission To Speak In The Voice Channel")
    if(url.match('https://www.youtube.com/playlist')) {
      const playList = await youtube.getPlaylist(url)
      const videos = await playList.getVideos()
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id)
        await handleVideo(video2, message, voiceChannel, true)
      }
      message.channel.send(`Playlist ${playList.title} Has Been Added To The Queue`)
      return undefined
    }else {
      try {
        var video = await youtube.getVideo(url)
      } catch {
          try {
          var videos = await youtube.searchVideos(searchString, 5)
          var index = 0
          message.channel.send(`
__**Song Selection**__
${videos.map(video2 => `**${++index} -** ${video2.title}`.replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"').replace("&#39;", "'").replace('&quot;', '"')).join('\n')}        

Please Choose A Song Between 1-5 In The Next 30 Seconds
          `)
          try {
            var response = await message.channel.awaitMessages(msg => msg.content > 0 && msg.content < 6, {
              max: 1,
              time: 30000,
              errors: ['time']
            })
          }catch {
            message.channel.send("No Valid Responses Was Provided")
          }
          const videoIndex = parseInt(response.first().content)
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id)
        }catch {
          return message.channel.send("No Search Results Found")
        }
      }
      return handleVideo(video, message, voiceChannel)
    }
  }else if(message.content.toLowerCase().startsWith(`${PREFIX}stop`)) {
    if (message.author.bot === true && message.author.id != '849653683435864115') return message.channel.send("Bots Cannot Use This Command")
    if (!message.member.voice.channel) return message.channel.send("Must Be In A Voice Channel To Play Music")
    if (!serverQueue) return message.channel.send("There Is Nothing Playing Right Now")
    serverQueue.songs = []
    serverQueue.connection.dispatcher.end()
    message.channel.send("Music Has Been Stopped")
    return undefined
  }else if(message.content.toLowerCase().startsWith(`${PREFIX}skip`)) {
    if(!message.member.voice.channel) return message.channel.send("Must Be In A Voice Channel To Skip Songs")
    if(!serverQueue) return message.channel.send("There Is Nothing Playing Right Now")
    serverQueue.connection.dispatcher.end()
    message.channel.send("Song Has Been Skipped")
    return undefined
  }else if(message.content.toLowerCase().startsWith(`${PREFIX}volume`)) {
    if(!message.member.voice.channel) return message.channel.send("Must Be In A Voice Channel To Change The Volume")
    if(!serverQueue) return message.channel.send("There Is Nothing Playing Right Now")
    if(!args[1]) return message.channel.send(`The Volume Is ${serverQueue.volume}`)
    if(isNaN(args[1])) return message.channel.send("Can Only Change Volume To A Number")
    if(Number(args[1]) > Number(5)) return message.channel.send("The Volume Does Not Go Higher Than 5")
    if(Number(args[1]) < Number(0)) return message.channel.send("The Volume Does Not Go Lower Than 0")
    serverQueue.volume = args[1]
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5)
    message.channel.send(`Volume Has Been Set To ${args[1]}`)
    return undefined
  }else if(message.content.toLowerCase().startsWith(`${PREFIX}now`)) {
    if(args[1].toLowerCase() == 'playing') {
      if(!serverQueue) return message.channel.send("There Is Nothing Playing Right Now")
      message.channel.send(`Now Playing ${serverQueue.songs[0].title}`)
      return undefined
    }}else if(message.content.toLowerCase().startsWith(`${PREFIX}queue`)) {
      if(!serverQueue) return message.channel.send("There Is Nothing Playing Right Now")
      var index = 0
      message.channel.send(`
__**Song Queue**__
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}

__**Now Playing**__ 
${serverQueue.songs[0].title}
      `, { split: true })
      return undefined
    }else if(message.content.toLowerCase().startsWith(`${PREFIX}pause`)) {
      if(!message.member.voice.channel) return message.channel.send("Must Be In A Voice Channel To Pause The Music")
      if(!serverQueue) return message.channel.send("There Is Nothing Playing Right Now")
      if(!serverQueue.playing) return message.channel.send("The Music Is Already Paused")
      serverQueue.playing = false
      serverQueue.connection.dispatcher.pause()
      message.channel.send("Music Has Been Paused")
      return undefined
    }else if(message.content.toLowerCase().startsWith(`${PREFIX}resume`)) {
      if(!message.member.voice.channel) return message.channel.send("Must Be In A Voice Channel To Resume The Music")
      if(!serverQueue) return message.channel.send("There Is Nothing Playing Right Now")
      if(serverQueue.playing) return message.channel.send("The Music Is Not Paused")
      serverQueue.playing = true
      serverQueue.connection.dispatcher.resume()
      message.channel.send("Music Has Been Resumed")
      return undefined
    }else if(message.content.startsWith(`${PREFIX}loop`)) {
      if(!message.member.voice.channel) return message.channel.send("Must Be In A Voice Channel To Loop The Music")
      if(!serverQueue) return message.channel.send("There Is Nothing Playing Right Now")
      serverQueue.loop = !serverQueue.loop
      return message.channel.send(`Loop Is Now ${serverQueue.loop ? `Enabled` : `Disabled`}`)
    }
    return undefined
    
  async function handleVideo(video, message, voiceChannel, playList = false) {
    const serverQueue = queue.get(message.guild.id)
    const song = {
      id: video.id,
      title: video.title,
      url: `https://youtube.com/watch?v=${video.id}`
    }
    if(!serverQueue) {
      const queueConstruct = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 5,
        playing: true,
        loop: false,

      }
      queue.set(message.guild.id, queueConstruct)
      queueConstruct.songs.push(song)
      try{
        var connection = await voiceChannel.join()
        queueConstruct.connection = connection
        play(message.guild, queueConstruct.songs[0])
      } catch(error) {
        console.log(`There Was An Error Connecting To The Voice Channel: ${error}`)
        queue.delete(message.guild.id)
        return message.channel.send(`There Was An Error Connecting To The Voice Channel: ${error}`)
      }
    }else {
      serverQueue.songs.push(song)
      if(playList) return undefined
      else return message.channel.send(`${song.title} Has Been Added To The Queue`)
    }
    return undefined
  }
  function play(guild, song) {
    const serverQueue = queue.get(guild.id)
    if(!song) {
      serverQueue.voiceChannel.leave()
      queue.delete(guild.id)
      return
    }
    const dispatcher = serverQueue.connection.play(ytdl(song.url))
    .on('finish', () => {
      if(!serverQueue.loop) serverQueue.songs.shift()
      play(guild, serverQueue.songs[0])
    })
    .on('error', error => {
      console.log(error)
    })
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5)
    serverQueue.textChannel.send(`Started Playing ${song.title}`)}
  })
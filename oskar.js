var auth = require('./auth.json');
const Library = require('./lib.js')
const Discord = require('discord.js');
const client = new Discord.Client();

//create a new instance of library
// const lib = new Library();

client.once('ready', () => {
    console.log('Ready');
});

//Login to the client
client.login(auth.token);

//Send message to user
client.on('message', message => {
    //snag the content
    var text = message.content;
    var embed;

    //if * is used, call the case
    if(text.substring(0,1) === '*') {
        var arg = text.substring(1).toLowerCase();
        switch(arg) {
            case 'allioni':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Allioni')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_20.png')
                                .setDescription('Beard of the Mountain Cat')
                                .addFields(
                                    {name: '**> Base Stats**', value: '**Attack:** \n 170 \n **Defense:**'+
                                                                    '\n 120 \n **HP:** \n 2000'},
                                    {name: '**> Uses**', value: 'Good support or DPS for Grey Demons'},
                                    {name: '**> Gear**', value: 'Attack, Defense'},
                                    {name: '**> Subrolls**', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'arden':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Arden')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_96.png')
                                .setDescription('The Pleiades of the Blue Sky')
                                .addFields(
                                    {name: '**> Base Stats**', value: '**Attack:** \n 300 \n **Defense:**'+
                                                                    '\n 220 \n **HP:** \n 3800'},
                                    {name: '**> Gear**', value: 'Attack, Defense'},
                                    {name: '**> Subrolls**', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'arthur':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Arthur')
                                .setDescription('Pick one of the following')
                                .addFields(
                                    {name: '**> *rarthur**', value: 'Red Arthur'},
                                    {name: '**> *barthur**', value:'Blue SR Arthur'},
                                    {name: '**> *bdarthur**', value:'Blue SSR Arthur'},
                                    {name: '**> *garthur**', value:'Green Arthur'}
                                )
                return message.channel.send(embed);
            case 'rarthur':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Arthur')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_74.png')
                                .setDescription("Camelot's Sword")
                                .addFields(
                                    {name: '**> Base Stats**', value: '**Attack:** \n 520 \n **Defense:**'+
                                                                    '\n 385 \n **HP:** \n 6200'},
                                    {name: '**> Gear**', value: 'Attack, Defense'},
                                    {name: '**> Subrolls**', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'barthur':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Arthur')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_76.png')
                                .setDescription('Kind of Prophecies')
                                .addFields(
                                    {name: '**> Base Stats**', value: '**Attack:** \n 320 \n **Defense:**'+
                                                                    '\n 320 \n **HP:** \n 4400'},
                                    {name: '**> Gear**', value: 'Attack, Defense'},
                                    {name: '**> Subrolls**', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'bdarthur':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Arthur')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_117.png')
                                .setDescription('Destine Heir')
                                .addFields(
                                    {name: '**> Base Stats**', value: '**Attack:** \n 520 \n **Defense:**'+
                                                                    '\n 385 \n **HP:** \n 6200'},
                                    {name: '**> Uses**', value: 'One of the top tiers for Red Demon'},
                                    {name: '**> Gear**', value: 'Attack, Defense'},
                                    {name: '**> Subrolls**', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'garthur':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Arthur')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_158.png')
                                .setDescription('Light of Hope')
                                .addFields(
                                    {name: '**> Base Stats**', value: '**Attack:** \n 520 \n **Defense:**'+
                                                                    '\n 385 \n **HP:** \n 6200'},
                                    {name: '**> Gear**', value: 'HP, Defense'},
                                    {name: '**> Subrolls**', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'athena':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Athena')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_130.png')
                                .setDescription('KOF 98')
                                .addFields(
                                    {name: '**> Base Stats**', value: '**Attack:** \n 580 \n **Defense:**'+
                                                                    '\n 300 \n **HP:** \n 6000'},
                                    {name: '**> Gear**', value: 'Attack, Defense'},
                                    {name: '**> Subrolls**', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'ban':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Ban')
                                .setThumbnail('')
                                .setDescription('Ale Collector')
                                .addFields(
                                    {name: '*bnban', value: 'Blue Nunchuck Ban'},
                                    {name: '*gnban', value: 'Green Nunchuck Ban'},
                                    {name: '*rnban', value:'Red Nunchuck Ban'},
                                    {name: '*bban', value: 'Blue Brawler Ban'},
                                    {name: '*gban', value: 'Green Brawler Ban'},
                                    {name: '*rban', value:'Red Brawler Ban'}
                                )
                return message.channel.send(embed);
            case 'bnban':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Ban')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_98.png')
                                .setDescription('Ale Collector')
                                .addFields(
                                    {name: '**> Base Stats**', value: '**Attack:** \n 480 \n **Defense:**'+
                                                                    '\n 270 \n **HP:** \n 7000'},
                                    {name: '**> Gear**', value: 'Attack, Defense'},
                                    {name: '**> Subrolls**', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed); 
            case 'gnban':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Ban')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_18.png')
                                .setDescription('The Fox Sin Of Greed')
                                .addFields(
                                    {name: '**> Base Stats**', value: '**Attack:** \n 474 \n **Defense:**'+
                                                                    '\n 270 \n **HP:** \n 6977'},
                                    {name: '**> Gear**', value: 'Attack, Defense'},
                                    {name: '**> Subrolls**', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'rnban':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Ban')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_78.png')
                                .setDescription('Nunchacku')
                                .addFields(
                                    {name: '**> Base Stats**', value: '**Attack:** \n 480 \n **Defense:**'+
                                                                    '\n 270 \n **HP:** \n 7000'},
                                    {name: '**> Gear**', value: 'Attack, Defense'},
                                    {name: '**> Subrolls**', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'bban':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Ban')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_11.png')
                                .setDescription('Outlaw')
                                .addFields(
                                    {name: '**> Base Stats**', value: '**Attack:** \n 484 \n **Defense:**'+
                                                                    '\n 264 \n **HP:** \n 6578'},
                                    {name: '**> Gear**', value: 'Attack, Defense'},
                                    {name: '**> Subrolls**', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'gban':
                 embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Ban')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_5.png')
                                .setDescription('Snatch')
                                .addFields(
                                    {name: '**> Base Stats**', value: '**Attack:** \n 484 \n **Defense:**'+
                                                                    '\n 264 \n **HP:** \n 6578'},
                                    {name: '**> Gear**', value: 'Attack, Defense'},
                                    {name: '**> Subrolls**', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'rban':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Ban')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_21.png')
                                .setDescription('Undead')
                                .addFields(
                                    {name: '**> Base Stats**', value: '**Attack:** \n 380 \n **Defense:**'+
                                                                    '\n 180 \n **HP:** \n 4190'},
                                    {name: '**> Gear**', value: 'Attack, Defense'},
                                    {name: '**> Subrolls**', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed); 
            case 'demon':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Demons')
                                .setDescription('Pick one of the following')
                                .addFields(
                                    {name: '**> *rdemon**', value: 'Red Demons'},
                                    {name: '**> *gdemon**', value: 'Grey Demons'},
                                    {name: '**> *cdemon**', value: 'Crimson Demons'}
                                )
                return message.channel.send(embed);
            break;
        }
    } 
})
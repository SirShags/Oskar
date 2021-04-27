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
                                    {name: '> ** Base Stats **', value: '**Attack:**\n170\n**Defense:**'+
                                                                    '\n120\n**HP:**\n2000'},
                                    {name: '> ** Red Demon **', value: 'Not Recommended'},
                                    {name: '> ** Grey Demon **', value: 'Attack, Defense'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'Attack, Defense'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'arden':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Arden')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_96.png')
                                .setDescription('The Pleiades of the Blue Sky')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n300\n**Defense:**'+
                                                                    '\n220\n**HP:**\n3800'},
                                    {name: '> ** Red Demon **', value: 'Not Recommended'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'Attack, Defense'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'arthur':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Arthur')
                                .setDescription('Pick one of the following')
                                .addFields(
                                    {name: '> ** *rarthur **', value: 'Red Arthur'},
                                    {name: '> ** *barthur **', value:'Blue SR Arthur'},
                                    {name: '> ** *bdarthur **', value:'Blue SSR Arthur'},
                                    {name: '> ** *garthur **', value:'Green Arthur'}
                                )
                return message.channel.send(embed);
            case 'rarthur':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Arthur')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_74.png')
                                .setDescription("Camelot's Sword")
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n520\n **Defense:**'+
                                                                    '\n385\n**HP:**\n6200'},
                                    {name: '> ** Red Demon **', value: 'Attack, Defense, good support for Red Escanor'},
                                    {name: '> ** Grey Demo n**', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'Attack, Defense'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'barthur':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Arthur')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_76.png')
                                .setDescription('Kind of Prophecies')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n320\n**Defense:**'+
                                                                    '\n320\n**HP:**\n 4400'},
                                    {name: '> ** Red Demon **', value: 'Not Recommended'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'Attack, Defense'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'bdarthur':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Arthur')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_117.png')
                                .setDescription('Destine Heir')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n520\n**Defense:**'+
                                                                    '\n385\n**HP:**\n6200'},
                                    {name: '> ** Red Demon **', value: 'Attack Defense, top tier'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'Attack, Defense'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'garthur':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Arthur')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_158.png')
                                .setDescription('Light of Hope')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n520\n**Defense:**'+
                                                                    '\n385\n**HP:**\n6200'},
                                    {name: '> ** Red Demon **', value: 'Not Recommended'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'HP, Defense'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'athena':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Athena')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_130.png')
                                .setDescription('KOF 98')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n580\n**Defense:**'+
                                                                    '\n300\n**HP:**\n6000'},
                                    {name: '> ** Red Demon **', value: 'Not Recommended'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'Attack, Defense'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
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
                                    {name: '> ** Base Stats **', value: '**Attack:**\n480\n**Defense:**'+
                                                                    '\n270\n**HP:**\n7000'},
                                    {name: '> ** Red Demon **', value: 'Attack, Defense'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'Attack, Defense'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed); 
            case 'gnban':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Ban')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_18.png')
                                .setDescription('The Fox Sin Of Greed')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n474\n**Defense:**'+
                                                                    '\n270\n**HP:**\n6977'},
                                    {name: '> ** Red Demon **', value: 'Not Recommended'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'Attack, Defense'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'rnban':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Ban')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_78.png')
                                .setDescription('Nunchacku')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n480\n**Defense:**'+
                                                                    '\n270\n**HP:**\n7000'},
                                    {name: '> ** Red Demon **', value: 'Not Recommended'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Attack, Defense'},
                                    {name: '> ** Gear **', value: 'Attack, Defense'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'bban':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Ban')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_11.png')
                                .setDescription('Outlaw')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n484\n**Defense:**'+
                                                                    '\n264\n**HP:**\n6578'},
                                    {name: '> ** Red Demon **', value: 'Attack Defense'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'Attack, Defense'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'gban':
                 embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Ban')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_5.png')
                                .setDescription('Snatch')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n484\n**Defense:**'+
                                                                    '\n264\n**HP:**\n6578'},
                                    {name: '> ** Red Demon **', value: 'Not Recommended'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'Attack, Defense'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'rban':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Ban')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_21.png')
                                .setDescription('Undead')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n380\n**Defense:**'+
                                                                    '\n180\n**HP:**\n4190'},
                                    {name: '> ** Red Demon **', value: 'Not Recommended'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'Attack, Defense'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed); 
            case 'beatrice':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Beatrice')
                                .setThumbnail('')
                                .setDescription('Re:Zero')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n550\n**Defense:**'+
                                                                    '\n380\n**HP:**\n6400'},
                                    {name: '> ** Red Demon **', value: 'Not Recommended'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'Attack, Defense'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'bellion':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Bellion')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_144.png')
                                .setDescription('Six Knights of Black')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n580\n**Defense:**'+
                                                                    '\n260\n**HP:**\n6200'},
                                    {name: '> ** Red Demon **', value: 'Not Recommended'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'Attack, Defense'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'benimaru':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Benimaru')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_70.png')
                                .setDescription('Six Knights of Black')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n520\n**Defense:**'+
                                                                    '\n420\n**HP:**\n7000'},
                                    {name: '> ** Red Demon **', value: 'Not Recommended'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'Attack, Defense'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'cain':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Cain')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_22.png')
                                .setDescription('Burning Ember')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n320\n**Defense:**'+
                                                                    '\n120\n**HP:**\n4400'},
                                    {name: '> ** Red Demon **', value: 'Not Recommended'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'Attack, Defense'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'camilla':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Camilla')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_136.png')
                                .setDescription('Dark Executioner')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n520\n**Defense:**'+
                                                                    '\n350\n**HP:**\n6800'},
                                    {name: '> ** Red Demon **', value: 'Not Recommended'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'Attack, Defense'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'deathpierce':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Deathpierce')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_89.png')
                                .setDescription('The Pleiades of the Azure Sky')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n540\n**Defense:**'+
                                                                    '\n220\n**HP:**\n6500'},
                                    {name: '> ** Red Demon **', value: 'Not Recommended'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'Attack, Defense'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'deldry':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Deldry')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_95.png')
                                .setDescription('The Pleiades of the Azure Sky')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n450\n**Defense:**'+
                                                                    '\n280\n**HP:**\n6000'},
                                    {name: '> ** Red Demon **', value: 'Not Recommended'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'Defense, HP'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'denzel':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Denzel')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_166.png')
                                .setDescription('The Pleiades of the Azure Sky')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n520\n**Defense:**'+
                                                                    '\n400\n**HP:**\n7200'},
                                    {name: '> ** Red Demon **', value: 'Not Recommended'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Defense, HP'},
                                    {name: '> ** Gear **', value: 'Defense, HP'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'derieri':
            case 'deri':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Derieri')
                                .addFields(
                                    {name: '> ** rderi or rderieri**', value: 'Red Deri'},
                                    {name: '> ** bderi or bderieri**', value: 'Blue Deri'},
                                    {name: '> ** gderi or gderieri**', value: 'Green Deri'}
                                )
                return message.channel.send(embed);
            case 'bderi':
            case 'bderieri':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Derieri')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_164.png')
                                .setDescription('SweetTemptation')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n560\n**Defense:**'+
                                                                    '\n350\n**HP:**\n7000'},
                                    {name: '> ** Red Demon **', value: 'Not Recommended'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'Defense, HP'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'gderi':
            case 'gderieri':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Derieri')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_115.png')
                                .setDescription('Elite of the Demon Clan')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n560\n**Defense:**'+
                                                                    '\n350\n**HP:**\n7000'},
                                    {name: '> ** Red Demon **', value: 'Not Recommended'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'Attack, Defense'},
                                    {name: '> ** Subrolls **', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'rderi':
            case 'rderieri':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Derieri')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_114.png')
                                .setDescription('SweetTemptation')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n560\n**Defense:**'+
                                                                    '\n350\n**HP:**\n7000'},
                                    {name: '> ** Red Demon **', value: 'Not Recommended'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Attack, Defense, Top tier unit'},
                                    {name: '> ** Gear **', value: 'Top two gears are Defense, bottom four are attack for'+
                                    'PVE \n Top two gears are Crit Dam, bottom four are attack'},
                                    {name: '> ** Subrolls**', value:'Attack, Defense, HP for PVE set\n'+
                                    'Crit Dam pieces should be 4 att, 6 crit dam '}
                                )
                return message.channel.send(embed);
            case 'bgdiane':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Diane')
                                .setThumbnail('https://rerollcdn.com/SDSGC/portraits/portrait_17.png')
                                .setDescription('The Serpent Sin of Envy')
                                .addFields(
                                    {name: '> ** Base Stats **', value: '**Attack:**\n484\n**Defense:**'+
                                                                    '\n264\n**HP:**\n6578'},
                                    {name: '> ** Red Demon **', value: 'Not Recommended'},
                                    {name: '> ** Grey Demon **', value: 'Not Recommended'},
                                    {name: '> ** Crimson Demon **', value: 'Not Recommended'},
                                    {name: '> ** Gear **', value: 'Attack, Defense'},
                                    {name: '> ** Subrolls**', value:'Attack, Defense, HP'}
                                )
                return message.channel.send(embed);
            case 'demon':
                embed = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Demons')
                                .setDescription('Pick one of the following')
                                .addFields(
                                    {name: '> ** *rdemon **', value: 'Red Demons'},
                                    {name: '> ** *gdemon **', value: 'Grey Demons'},
                                    {name: '> ** *cdemon **', value: 'Crimson Demons'}
                                )
                return message.channel.send(embed);
            break;
        }
    } 
})

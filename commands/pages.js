exports.run = (client, message, args, tools) => {
    let pages = ['Page 1.', 'Page 2.', 'Page 3'];
    let page = 1;
            const embed = new Discord.MessageEmbed
            .setColor(0xffffff)
            .setFooter(`Page ${page} of ${pages.length}`)
            .setDescription(pages[page-1])
            message.channel.send(embed).then(msg => {
                msg.react('◀️').then( r => {
                    msg.react('▶️')

                    const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀️' && user.id === message.author.id;
                    const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶️' && user.id === message.author.id;

                    const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
                    const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });

                    backwards.on('collect', r => {
                        if (page === 1) return;
                        page--;
                        embed.SetDescription(pages[page-1]);
                        embed.setFooter(`Page ${page} of ${pages.length}`);
                        message.edit(embed)
                    })

                    forwards.on('collect', r => {
                        if (page === pages.lenght) return;
                        page++;
                        embed.SetDescription(pages[page-1]);
                        embed.setFooter(`Page ${page} of ${pages.length}`);
                        message.edit(embed)
                    })
                })
            })

}

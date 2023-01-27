import { EmbedBuilder } from 'discord.js';
import { DiscordSlashCommand } from '../model/discord/slash-command.js';

const AboutCommand = new DiscordSlashCommand('about', 'このBotについて');

AboutCommand.setExecute(async (client, interaction) => {
    const botTag = client.user.tag;
    let abountEmbed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle('このBotについて')
        .setDescription(botTag)
        .addFields(
            {
                name: 'version',
                value: `v${process.env.npm_package_version ?? '不明'}`,
                inline: true,
            },
            { name: 'ping', value: `${client.ws.ping}ms`, inline: true },
            {
                name: '製作者',
                value: '[Netetra](https://github.com/Netetra)',
                inline: true,
            },
        );
    await interaction.reply({ embeds: [abountEmbed] });
});

export { AboutCommand };

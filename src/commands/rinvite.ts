import crypto from 'crypto';
import { DiscordSlashCommand } from '../model/discord/slash-command.js';

const RandomInviteCommand = new DiscordSlashCommand(
    'rinvite',
    '招待リンクをランダムに生成',
);

RandomInviteCommand.setExecute(async (interaction) => {
    const N = 10;
    const randomChar = crypto.randomBytes(N).toString('base64').substring(0, N);
    await interaction.reply('discord.gg/' + randomChar);
});

export { RandomInviteCommand };

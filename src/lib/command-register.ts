import { REST, Routes, SlashCommandBuilder } from 'discord.js';
import { DiscordSlashCommand } from '../model/discord/slash-command.js';

function CommandRegister(
    DISCORD_BOT_TOKEN: string,
    BOT_ID: string,
    commands: DiscordSlashCommand[],
): void {
    const rest = new REST({ version: '10' }).setToken(DISCORD_BOT_TOKEN);
    let commandInfos: SlashCommandBuilder[] = [];
    for (let i = 0; i < commands.length; i++) {
        commandInfos.push(commands[i].option);
    }
    (async () => {
        await rest
            .put(Routes.applicationCommands(BOT_ID), { body: commandInfos })
            .then(() => console.log('[SUCCESS] Registered all guild commands.'))
            .catch(console.error);
    })();
}

export { CommandRegister };

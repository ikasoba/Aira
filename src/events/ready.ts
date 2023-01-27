import { Events } from 'discord.js';

import { CommandRegister } from '../lib/command-register.js';
import { DiscordEventListener } from '../model/discord/index.js';
import { slashCommands } from '../data/index.js';

function readyLog(
    botName: string,
    botID: string,
    projectVersion: string,
): void {
    console.info('');
    console.info('=============================');
    console.info(`BotName: ${botName}`);
    console.info(`BotID: ${botID}`);
    console.info(`Version: ${projectVersion}`);
    console.info('=============================');
    console.info('');
}

const ReadyEvent = new DiscordEventListener(
    Events.ClientReady,
    true,
    async (client) => {
        if (client.user == null) return;
        const botName = client.user.username;
        const botID = client.user.id;
        const token = process.env.DISCORD_BOT_TOKEN;
        const version: string = process.env.npm_package_version ?? '不明';
        const joinServers = client.guilds.cache.size;
        readyLog(botName, botID, version);
        CommandRegister(token, botID, slashCommands);
        setInterval(() => {
            client.user.setActivity({
                name: `Severs:${joinServers} | v${version}`,
            });
        }, 10000);
    },
);

export { ReadyEvent };

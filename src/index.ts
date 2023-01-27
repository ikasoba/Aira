import 'dotenv/config';
import { Client, ClientEvents } from 'discord.js';

import { intents, eventListeners, } from './data/index.js';

const DISCORD_BOT_TOKEN: string = process.env.DISCORD_BOT_TOKEN;

const client = new Client({ intents });

// イベントリスナー読み込み
for (let i = 0; i < eventListeners.length; i++) {
    const eventName =eventListeners[i].eventName
    if (eventListeners[i].once) {
        client.once(eventName, (client: Client, ...args: ClientEvents[] ) =>
            eventListeners[i].execute(client, ...args),
        );
    } else {
        client.on(eventListeners[i].eventName, (client: Client, ...args: ClientEvents[]) =>
            eventListeners[i].execute(client, ...args),
        );
    }
}

client.login(DISCORD_BOT_TOKEN).catch(console.error)

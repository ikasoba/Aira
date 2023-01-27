import { Events } from 'discord.js';

import { DiscordEventListener } from '../model/discord/index.js';
import { slashCommands } from '../data/index.js';

const InteractionCreateEvent = new DiscordEventListener(
    Events.InteractionCreate,
    false,
    async (client, interaction) => {
        if (!interaction.isChatInputCommand()) return;
        for (let i = 0; i < slashCommands.length; i++) {
            if (slashCommands[i].name == interaction.commandName) {
                slashCommands[i].execute(client, interaction);
            }
        }
    },
);

export { InteractionCreateEvent };

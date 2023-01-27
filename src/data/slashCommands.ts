import { DiscordSlashCommand } from '../model/discord/slash-command.js';
import {
    RandomInviteCommand,
    SlotCommand,
    AboutCommand,
    HashCommand,
} from '../commands/index.js';

const slashCommands: DiscordSlashCommand[] = [
    AboutCommand,
    RandomInviteCommand,
    SlotCommand,
    HashCommand,
];

export { slashCommands };

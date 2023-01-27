import { DiscordEventListener } from '../model/discord/index.js';
import { ReadyEvent, InteractionCreateEvent } from '../events/index.js';

const eventListeners: DiscordEventListener[] = [
    ReadyEvent,
    InteractionCreateEvent,
];

export { eventListeners };

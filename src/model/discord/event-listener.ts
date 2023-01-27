import { ClientEvents } from 'discord.js';

class DiscordEventListener {
    public eventName: string;
    public once: boolean;
    public execute: Function;
    constructor(eventName, once, execute) {
        this.eventName = eventName;
        this.once = once;
        this.execute = execute;
    }
}

export { DiscordEventListener };

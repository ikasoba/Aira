import { SlashCommandBuilder } from 'discord.js';

class DiscordSlashCommand {
    public name: string;
    public option: SlashCommandBuilder;
    public execute: Function;
    constructor(name: string, description: string) {
        this.name = name;
        this.option = new SlashCommandBuilder()
            .setName(name)
            .setDescription(description);
    }
    setExecute(execute: Function) {
        this.execute = execute;
    }
}

export { DiscordSlashCommand };

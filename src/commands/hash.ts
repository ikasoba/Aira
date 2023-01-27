import crypto from 'crypto';

import { DiscordSlashCommand } from '../model/discord/slash-command.js';

function md5hex(str) {
    const md5 = crypto.createHash('md5');
    return md5.update(str, 'binary').digest('hex');
}

function sha256hex(str) {
    const sha2 = crypto.createHash('sha256');
    return sha2.update(str, 'binary').digest('hex');
}

const HashCommand = new DiscordSlashCommand('hash', '文字列暗号化');

HashCommand.option
    .addSubcommand((subcommand) =>
        subcommand
            .setName('md5')
            .setDescription('MD5でハッシュ値に変換')
            .addStringOption((option) =>
                option
                    .setName('string')
                    .setDescription('文字列')
                    .setRequired(true),
            ),
    )
    .addSubcommand((subcommand) =>
        subcommand
            .setName('sha256')
            .setDescription('SHA256でハッシュ値に変換')
            .addStringOption((option) =>
                option
                    .setName('string')
                    .setDescription('文字列')
                    .setRequired(true),
            ),
    );

HashCommand.setExecute(async (interaction) => {
    switch (interaction.options.getString('hash')) {
        case 'md5':
            await interaction.reply(
                md5hex(interaction.options.getString('string')),
            );
        case 'sha256':
            await interaction.reply(
                sha256hex(interaction.options.getString('string')),
            );
    }
});

export { HashCommand };

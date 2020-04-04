// jshint esversion: 6
const config = {
    solveKey: "ТОКЕН_OCR_SPACE",
    token: "ТОКЕН_БОТА",
    channel: {
        id: "ID_КАНАЛА_ДЛЯ_ПРОПИСАНИЯ_КОМАНД",
        message: "s.up"
    }
};

const solve = require("sdc-captcha-solver");
const { Client } = require('discord.js');

const client = new Client({
    disableEveryone: true
});

function bump(chID, chCommand) {
    console.info('WAIT | Попытка бампнуть сервер..');
    return client.channels.get(chID).send(chCommand);
}

client.on("ready", () =>
    bump(config.channel.id, config.channel.message)
);

client.on("message", (message) => {
    if(message.author.id == "464272403766444044" && message.channel.id == config.channel.id) 
        return solve(message.attachments.first().url, config.solveKey)
            .then((response) => {
                message.channel.send(response);
                return client.setInterval(() => {
                    bump(config.channel.id, config.channel.message);
                }, 18000000);
            });
});

client.login(config.token);

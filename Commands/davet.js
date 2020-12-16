const { RichEmbed } = require("discord.js");
module.exports = class invite {
    constructor() {
        this.name = "davet",
        this.alias = [],
        this.usage = "s!davet"
    }

    async run(client, message, args) {
        try{
            let info = client.emojis.get("655091815401127966") || "ℹ️"
            client.generateInvite(['ADMINISTRATOR']).then(link => {
            let inviteEmbed = new RichEmbed()
            .setTitle(`${info} Info`)
            .setDescription(`**Best Botu Sunucuna Davet Et**
[Buraya Tıkla](https://discordapp.com/oauth2/authorize?client_id=686882464133812312386279704&scope=bot&permissions=805314622)`)
            .setColor("#5DBCD2")
            message.channel.send(inviteEmbed);
            })
        }catch(e) {
            throw e;
        }
    }
}
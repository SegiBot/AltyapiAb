const { RichEmbed } = require("discord.js");
module.exports = class tiers {
    constructor() {
        this.name = "aşamalar",
        this.alias = [],
        this.usage = "s!aşamalar"
    }

    async run(client, message, args) {
        try{
            let info = client.emojis.get("655091815401127966") || "ℹ️"
            let tierEmbed = new RichEmbed()
            .setTitle(`${info} Info`)
            .setDescription(`**KODLANIYOR...**`)
            .setColor("#5DBCD2")
            message.channel.send(tierEmbed)
        }catch(e) {
            throw e;
        }
    }
}
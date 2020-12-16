module.exports = class leave {
    constructor() {
        this.name = "ayrıl",
        this.alias = [],
        this.usage = "s!ayrıl"
    }

    async run(client, message, args) {
        try{
            message.channel.send("Galiba Bu Sunucudaki İşim Bitti, Görüşürüz!")
            message.guild.leave();
        }catch(e) {
            throw e;
        }
    }
}
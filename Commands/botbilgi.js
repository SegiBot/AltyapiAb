const { RichEmbed } = require("discord.js"); 

module.exports = class info {
    constructor() {
        this.name = "botbilgi",
        this.alias = [],
        this.usage = "s!botbilgi"
    }

    async run(client, message, args) {
        try{
         let infoEmbed = new RichEmbed()
         .setTitle("**Best**")
         .setThumbnail("https://cdn.discordapp.com/attachments/667011622073794562/667707096514560030/359e823b2579ec0e341f1b0b774288b6.png")
         .setDescription("Sunucunuzu Yedekler Ve Daha Fazlasını Yapar !")
         .addField("Davet Et", "[Buraya Tıkla](https://discordapp.com/oauth2/authorize?client_id=671114320654106651&scope=bot&permissions=805314622)", true)
         .addField("Discord ", "[Buraya Tıkla](https://discord.gg/CWS59QM)")
         .addField("Prefix", "s!", true)
         .addField("Toplam Sunucu", client.guilds.size, true)
         .addField("Toplam Kullanıcı", client.users.size, true)
         .setFooter("Sahibim ~ ' Çocuk ||Adam||#6147")
            message.channel.send(infoEmbed)
        }catch(e) {
            throw e;
        }
    }
}
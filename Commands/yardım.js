const { RichEmbed } = require("discord.js");
module.exports = class {
    constructor() {
        this.name = "yardım",
        this.alias = [""],
        this.usage = "b!yardım"
    }

    async run(client, message, args) {
        try{
            if(!args[1]) {
              
            let helpEmbed = new RichEmbed()
            .setTitle("__**Oluştur**__")
            .setDescription(`
            
            __**Yetkili**__
            
            **b!yedekle**          Sunucunuzun Yedeklemesini Oluşturun Veya İndirin !
            
            __**Diğer**__
            
            **s!yardım**            Bu Mesajı Gösterir.
            **s!botbilgi**          Kaos Bot Hakkında Bilgi Alırsınız.
            **s!davet**             Kaos Botu Davet Edersiniz.
            **s!ayrıl**             Bot Ayrılır.
            **s!ping**              Pong.
            **s!aşamalar**          Kodlanıyor...
            
            `)
            .setFooter(`Kod Hakkında Yardım İçin \`**b!yardım [command]\` Kullanın.
            Kategori İçin Yardım Almak İstiyorsanız \`**b!yardım [category]\` Kullanabilirsiniz.`)
            .setColor("#5DBCD2")
            message.channel.send(helpEmbed)
              return;
            }

            if(args[1] === "backup") {
                const embed = new RichEmbed()
                    .setTitle(`**b!backup**
Create & load backups of your servers
__**Commands**__
`)
                    .setDescription(`
                b!backup create        Create a backup
                b!backup delete        Delete one of your backups
                b!backup info          Get information about a backup
                b!backup list          Get a list of your backups
                b!backup load          Load a backup
                b!backup purge         Delete all your backups`)
                    .addBlankField()
                    .setFooter(`Use \`b!help [command]\` for more info on a command.
You can also use \`b!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(embed)
            }

            if(args[1] === "help") {
                let showsThisMessageEmbed = new RichEmbed()
                    .setTitle("**b!help [command]**")
                    .setDescription("Shows this message")
                    .addBlankField()
                    .setFooter(`Use \`b!help [command]\` for more info on a command.
You can also use \`b!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                    message.channel.send(showsThisMessageEmbed);
            }

            if(args[1] === "info") {
                let infoEmbed = new RichEmbed()
                    .setTitle("**b!info**")
                    .setDescription("Get Information about Best")
                    .addBlankField()
                    .setFooter(`Use \`!help [command]\` for more info on a command.
You can also use \`b!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                    message.channel.send(infoEmbed);
            }

            if(args[1] === "invite") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**b!invite**")
                    .setDescription("Invite Best")
                    .addBlankField()
                    .setFooter(`Use \`b!help [command]\` for more info on a command.
You can also use \`b!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                    message.channel.send(inviteEmbed)
            }

            if (args[1] === "leave") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**b!leave**")
                    .setDescription("Let the bot leave")
                    .addBlankField()
                    .setFooter(`Use \`b!help [command]\` for more info on a command.
You can also use \`b!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }

            if (args[1] === "ping") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**b!ping**")
                    .setDescription("Pong")
                    .addBlankField()
                    .setFooter(`Use \`b!help [command]\` for more info on a command.
You can also use \`b!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }


            if (args[1] === "tiers") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**b!tiers**")
                    .setDescription("Shows information about Xenon Pro & Turbo")
                    .addBlankField()
                    .setFooter(`Use \`b!help [command]\` for more info on a command.
You can also use \`b!help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }

        }catch(e) {
            throw e;
        }
    }
}
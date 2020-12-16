const { Client, RichEmbed } = require("discord.js");
const { CommandHandler } = require("djs-commands");
const client = new Client({ disableEveryone: true });
var approx = require('approximate-number');
const config = require("./config.json");
const CH = new CommandHandler({
    folder: __dirname + "/Commands/",
    prefix: config.prefix 
});


client.on("ready", () => {
    console.log("Ready !");
    client.user.setActivity(`${approx(client.guilds.size)} Sunucu | b!yardım`, {type: "WATCHING"},`Yakında`,{type: "WATCHING"})
});


const express = require("express");
const app = express();
const http = require("http");
app.listen(process.env.PORT);
setInterval(() => {
http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me`);
}, 280000);


client.on("message", async (message) => {

    if(message.author.type === 'bot') return;
    let args = message.content.split(" ");
    let command = args[0];
    let cmd = CH.getCommand(command);
    if(!cmd) return;

    try{
        cmd.run(client,message,args)
    }catch(e){
        console.log(e)
    }

});

let info = client.emojis.get("655091815401127966") || "ℹ️" //https://cdn.discordapp.com/emojis/655091815401127966.png?v=1

client.on("guildCreate", guild => {
  
      let channelID;
    let channels = guild.channels;
    channelLoop:
    for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }

    let channel = client.channels.get(guild.systemChannelID || channelID);
  
    let newserverEmbed = new RichEmbed()
    .setTitle(`${info}  Info`)
    .setDescription(`Beni Sunucuna Eklediğin İçin Teşekkürler! :smiley:
\b!yardım\ İle Komutlara Bakabilirsiniz.**`)
    .setColor("#5DBCD2")
channel.send(newserverEmbed)
})


client.on('message', async message => {
  const ms = require('ms');
  const prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "nitrokur") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
    message.channel.send(`Nitro Sunucusunu Kurmak İçin **Kur** Yazınız.`)
      message.channel.awaitMessages(response => response.content === 'Kur', {
        max: 1,
        time: 10000,
        errors: ['time'],
     })
    .then((collected) => {

message.guild.createChannel('【GENEL】', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`🌐・sohbet`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【GENEL】")))

message.guild.createChannel('【BİLGİLENDİRME】', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`📋・kurallar`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【BİLGİLENDİRME】")))


message.guild.createChannel(`📢・duyurular`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【BİLGİLENDİRME】")))


message.guild.createChannel(`🎁・kanıt`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【BİLGİLENDİRME】")))
        
message.guild.createChannel(`🎉・çekiliş`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【BİLGİLENDİRME】")))
        
        message.guild.createChannel('【SESLİ SOHBET】', 'category', [{
  id: message.guild.id,
}]);
        message.guild.createChannel(`🔊・ Genel Sohbet`, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【SESLİ SOHBET】")))
        
       message.channel.send("Gelişmiş Özel Oda Sistemi Aktif! ")
     
            })   
      
}
});
//----------------------------------Özel oda sistemi Son----------------------------// 












client.login(config.token)
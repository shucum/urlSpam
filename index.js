const { Discord, Client, WebhookClient, MessageEmbed, Message } = require('discord.js');
const client = global.client = new Client({fetchAllMembers: true});
global.client = client;
const fesgiymissura = require('fs');
const request = require('request');
client.aktif = "true"
client.token = "token gir bebeğim"
client.sunucuid = "sunucu id gir bebeğim"
client.url = "url gir sunucu url"
fesgiymissura.readdir("./Etkinlikler/", (err, klasor) => {
  if (err) return console.myTime(err);
  klasor.forEach(bot => {
    let deneme = require("./Etkinlikler/" + bot);
    if (deneme.catcher) {
      deneme.catcher(client);
      client.on(deneme.hazır, deneme.urlspammer);
    }
    console.log(
      `[URL Spammer] ~ (${deneme.Isim}) Başarıyla aktif oldu!`
    );
  });
});
setInterval(() => {
  if(client.aktif === "true") {
    urlSpammer()
  } else {
    console.log('[URL Spammer] ~ Lütfen ./index.js dosyasının içinden aktif kısmı true olarak belirleyin!');
  }
}, 1000)
function urlSpammer() {
  console.log(`[URL Spammer] ~ (${client.url}) adlı URL Spamlanmaya Başladı!`)
  const urlspammer = {
      url: `https://discord.com/api/v8/guilds/${client.sunucuid}/vanity-url`,
      body: {
        code: `${client.url}`
      },
      json: true,
      method: 'PATCH',
      headers: {
        "Authorization": `Bot ${client.token}`
      }
    };
    request(urlspammer, (err, res, body) => {
      if (err) {
        return console.log(err);
      }
    })
}

client.login(client.token).then(c => console.log(`[~ ${client.user.tag} ~]`)).catch(err => console.error("[URL Spammer] ~ Bota bağlanılamadı."));

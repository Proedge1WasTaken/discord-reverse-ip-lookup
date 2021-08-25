const Discord = require("discord.js");
let snekfetch = require("snekfetch")
var fs = require('fs');

module.exports.run = async (bot, message, args) => {
let url = "https://api.hackertarget.com/reverseiplookup/?q=" + args[0];

snekfetch.get(url).then(r =>fs.writeFile('mynewfile3.txt', decodeURIComponent(r.body), function (err) {
    if (err) throw err;
    console.log('Saved!');
  }));
  message.channel.send('Itt van a(z) `' + args[0] + '` ip reverse lookupja', { files: ['mynewfile3.txt'] });
}

module.exports.help = {
name: "reverse"
} 
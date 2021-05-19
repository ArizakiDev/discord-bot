const dbd = require("dbd.js")

const bot = new dbd.Bot({
    token: "ODQxOTc4MTAzOTY5NDgwNzA0.YJunNw.-2IdRT4aNDpQqFTzEOnbH9d_Q0Y", //Discord Bot Token
    prefix: "A.",
    mobile: true,
    autoUpdate: false
})
bot.onMessage()
bot.loadCommands(`./commands/`)



bot.joinCommand({
    channel: "841781637725552680", //Enter a Channel ID
    code: `<@$authorID> vien d'arriver, Bienvenue!` //This can be changed
})
bot.onJoined()

bot.presenceUpdateCommand({
    channel: "838463210603413514",
    code: `$username updated their presence!
    Old Presence: $oldPresence[status]
    `
})

bot.status({
    text: "Prefix : A.",
    type: "STREAMING",
    url: "https://www.twitch.tv/lunatic__tv",
    time: 12
})

bot.status({
    text: "discord.gg/fPJh3dwnBU",
    type: "WATCHING",
    time: 12
})

bot.command({
    name: "boost",
    code: `
    $if[$boostingSince!=]
$username has been boosting since $boostingSince
    $else
You're not boosting!
    $endif
    `
});
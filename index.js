const Discord = require("discord.js");
const client = new Discord.Client({
	disableMentions: 'everyone',
	messageCacheMaxSize: 150,
	messageCacheLifetime: 45,
	messageSweepInterval: 45,
	restSweepInterval: 30,
	fetchAllMembers: true,
	ws: {
    properties: { $browser: "Discord iOS" },
    intents: new Discord.Intents(Discord.Intents.NON_PRIVILEGED).add(['GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILDS', 'MEMBER_PRESENCES']),
  }
});
client.on("ready", async() =>{
      console.log("READY")
  // --------------------------------------------------------------------------------------------------------------
  // ==============================================================================================================
  
  client.channels.cache.get("807646363965587486").send("Ready to roll!").then(m =>{
    setInterval(async()=>{
	    const emb = new Discord.MessageEmbed()
	    	.setDescription("Online:")
	    	.addField("Members:", g.memberCount, true)
	    	.setColor("fdd2ff")
	    	.setImage("https://cdn.discordapp.com/attachments/815741866938335274/816134403612737615/lace_divider_big_by_sirafien_daxy1gv-fullview.png")
	    	.setThumbnail(g.iconURL({ dynamic: true }))
	    	.addField("Bots:", g.members.cache.filter(member => member.user.bot).size, true)
	    	.addField("Humans:", g.members.cache.filter(member => !member.user.bot).size, true)
	    	.setFooter("Last Updated:")
	    	.setTimestamp()
	    m.edit(emb)	
	}, 60000)
    })
  const guild = client.guilds.cache.get("782727129414500374");
    const modR = guild.roles.cache.get("814668063366184960");
    const admR = guild.roles.cache.get("807643404904562738");
    const modA = await guild.members.cache.filter(m => m.roles.cache.has(modR.id) && m.user.presence.status === "offline")
    const modB = await guild.members.cache.filter(m => m.roles.cache.has(modR.id) && m.user.presence.status !== "offline")
    const adA = await guild.members.cache.filter(m => m.roles.cache.has(admR.id) && m.user.presence.status === "offline")
    const adB = await guild.members.cache.filter(m => m.roles.cache.has(admR.id) && m.user.presence.status !== "offline")
    const EMBED = new Discord.MessageEmbed()
    ch = await guild.channels.cache.get("807646363965587486")
    ch.setTopic(`========= Offline / Invisible ADMINS: ${adA} || Online ADMINS: ${adB} =========
                 ========= Offline / Invisible MODS: ${modA}  || Online MODS: ${modB}  =========`)
  
   setInterval(async()=>{
      ch.setTopic(`========= Offline / Invisible ADMINS: ${adA} || Online ADMINS: ${adB} =========
                 ========= Offline / Invisible MODS: ${modA}  || Online MODS: ${modB}  =========`)   
  }, 60000)

  // --------------------------------------------------------------------------------------------------------------
  // ==============================================================================================================
  
})
client.login("ODMzNTk0MzM1NDI1NDYyMzU2.YH0nOA.7tedpgqr7ij2ly6naP6ix3g6eKA")

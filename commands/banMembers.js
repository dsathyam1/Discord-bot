module.exports = {
    name: "!ban",
    description: "This command will ban memebers, but you need the adminstration permission", 
    async execute(msg){
        if(!msg.member.permissions.has("BanMembers")) {
            return msg.reply(
                "You do not have permission to ban members. (Adminstration permission required)"
            ); 
        }
        const user = msg.mentions.members.first(); 
        if(!user){
            return msg.reply("You need to mention a member to ban. Example: `!ban @user` "); 
        }
    
        if(!user.bannable){
            return msg.reply("I cannot ban this member. They may have higher permissions than me"); 
        }

        try{
            await user.ban();
            msg.channel.send(`${user.user.tag} has been banned from the server`); 
        }catch(err){
            console.error(err);
            msg.reply("There was something wrong trying ban this member."); 
        }
    },
};
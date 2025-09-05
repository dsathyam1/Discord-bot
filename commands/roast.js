const roastLists = [
  "You're like a cloud. When you disappear, it’s a beautiful day.",
  "You bring everyone so much joy… when you leave the room.",
  "You're proof that even evolution takes a break sometimes.",
  "You're the reason the gene pool needs a lifeguard.",
  "Some drink from the fountain of knowledge; you only gargled.",
  "You're like a software bug—nobody knows why you exist, and everyone’s life would be easier if you didn’t.",
  "Your secrets are safe with me. I never even listen when you tell me them.",
  "You're living proof that even mistakes can stick around for decades.",
  "You're like a cloud service outage—useless, frustrating, and nobody misses you when you're gone.",
  "If I wanted to kill myself, I’d climb your ego and jump to your IQ.",
  "You're like a software update—nobody asked for you, and you just make things worse.",
  "You bring people together… to talk about how much they can’t stand you.",
  "You have something that no one else has: bad luck for everyone around you.",
  "You're the human version of a 404 error—people keep searching, but there’s nothing there.",
  "Your personality is like expired milk—nobody wants it, and it only gets worse with time.",
  "You're proof that natural selection sometimes just gives up.",
  "If laziness was an Olympic sport, you'd still manage to come in last.",
  "You're like a dark web site—nobody decent wants to be associated with you.",
  "You’re like a cloud storage breach—nobody wanted you, and now everyone’s worse off because of you.",
  "You add as much value to a conversation as a pop-up ad.",
  "You're like a broken mirror—useless, unlucky, and painful to look at.",
  "The only thing you bring to the table is disappointment.",
  "You're living proof that rock bottom has a basement.",
  "You’re like a slow WiFi connection—annoying, unreliable, and people avoid you whenever they can.",
  "You're like a bug report nobody fixes—just ignored until people give up on you.",
  "If I wanted background noise, I’d turn on static instead of listening to you.",
  "You're the human embodiment of lag.",
  "You're like spam email—unwanted, repetitive, and deleted on sight.",
  "You’re like expired medicine—once useful maybe, but now just harmful to keep around.",
  "You make small talk feel even smaller.",
  "You're like a game crash after 99% progress—frustrating and pointless.",
  "You add less to a group project than the person who drops out on day one.",
  "You're like autocorrect—constantly wrong, annoying, and impossible to shut up.",
];
module.exports = {
  name: "!roast",
  description: "Roasts the user",

  execute(msg, args) {
    const mentionedUser = msg.mentions.members.first();
    const target = mentionedUser ? mentionedUser : msg.member;
    const randomRoast =
      roastLists[Math.floor(Math.random() * roastLists.length)];

    msg.channel.send(`${target}, ${randomRoast}`);
  },
};

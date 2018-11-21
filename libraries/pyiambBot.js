var pyiamBot = new BotUI('Better-Mood-Bot');

pyiamBot.message.bot({
  content: "Hello there! I'm the Put you in a better mood bot"
}).then(function () { // wait till previous message has been shown.

  pyiamBot.message.human({
    delay: 100,
    content: 'Hello World from human!'
  });
}).then(function(){
    pyiamBot.message.bot({
      delay:200,
      content: "How are you doing today?"
}).then(function () {
    pyiamBot.message.human({
      delay: 300,
      content: "I feel good"
    });
  });
});

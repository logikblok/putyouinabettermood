var pyiamBot = new BotUI('Better-Mood-Bot');

pyiamBot.message.bot({
  content: "Hello there! I'm the Put you in a better mood bot 😊"
}).then(function () { // wait till previous message has been shown.
  pyiamBot.message.bot({
    delay: 1000,
    content: 'What would you like to see today?'
  });
}).then(function(){
    return pyiamBot.action.button({
      delay:2250,
      action: [{
        text:"Kittens!🐱",
        value:"kittens"
      }, {
        text:"Puppies!🐶",
        value:"puppies"
      }]
  });
}).then(function (res){
  if(res.value == 'kittens'){
    kittens();
  }
  if(res.value == 'puppies'){
  puppies();
}
});

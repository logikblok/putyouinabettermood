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

//var kittensarray = ['https://66.media.tumblr.com/e92fa3ce7169de50785e86b7db068055/tumblr_pho8jmStZA1t2ph9to1_640.png', 'https://66.media.tumblr.com/daa744892956d7aae2d3ade6ee1c1b8f/tumblr_phl6kbC0si1t2ph9to1_500.jpg', 'https://66.media.tumblr.com/f28a203d04ca4e01881fc58b2686c0be/tumblr_phkjv0e7921t2ph9to1_500.jpg'];
//var rand = kittensarray[Math.floor(Math.random() * kittensarray.length)];

var kittens = function () {
  pyiamBot.message.bot({
    delay: 1000,
    content: "Here's a kitten! ![kitten](https://66.media.tumblr.com/3689d86bd754705a3b14d2f17f4e1a4a/tumblr_phpbwdzDTO1t2ph9to1_400.gif)"
  }).then(function () {
    return pyiamBot.action.button({
    delay: 4250,
    action: [{
      text:"More Kittens 🐱!",
      value: "yeskittens"
    }, {
      text: "No thanks",
      value: "end"
    }]
  });
}).then(function (res){
  if(res.value == 'yeskittens'){
    kittens();
  }
  if(res.value == 'end'){
  end();
}
});
};

var end = function () {
  pyiamBot.message.add({
    delay: 1000,
    content: 'Thanks for coming. This was created with [Bot UI](https:///docs.botui.org), you can see more cuteness on [Put you in a better mood.com](http://www.putyouinabettermood.com/)'
  });
};

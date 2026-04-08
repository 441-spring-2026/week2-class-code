// Run from the command line with 'node index.js'
// BUG play-sound package only works on MacOS
var player = require('play-sound')(opts = {})

function activity(){
  console.log("I'm being called from the activity function")
}

function playSound(){
player.play('whoosh.mp3', function(err){
    if (err) throw err
  })
}

async function getAPIData(){
  // More info about fetch: https://nodejs.org/learn/getting-started/fetch
  const post = await fetch('https://jsonplaceholder.typicode.com/posts/5');
  const postData = await post.json();
  console.log("Post 5 body -> ", postData.body);

  const comment = await fetch('https://jsonplaceholder.typicode.com/comments/?post=5');
  const commentData = await comment.json();
  console.log("Author of first comment -> ", commentData[0].name);
}

getAPIData();
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

playSound()
var express = require('express');
//import express
var router = express.Router();

/* GET home page. */

router.get('/', function(_, res) {
  let emojiDataset = ['☠','😀','🤐','👌','👍','🎂','🤷‍♂️','🎶','🌹'];
let emojiDb = emojiDataset[Math.floor(Math.random() * emojiDataset.length)];
  //render manda a generar y entregar 
  //la vista al cliente
  res.render('about', 
  { 
    // este es el view-Model
  school: 'ITgAM' ,
  emojiDb,
  email: 'L181130080@gamadero.tecnm.mx'
  
});
});

module.exports = router;

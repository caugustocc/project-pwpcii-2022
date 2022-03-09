"use strict";

var express = require('express');

var router = express.Router();
/* GET home page. */

router.get('/', function (_, res) {
  let emojiDataset = ['☠', '😀', '🤐', '👌', '👍', '🎂', '🤷‍♂️', '🎶', '🌹', '🕳'];
  let emojiDb = emojiDataset[Math.floor(Math.random() * emojiDataset.length)]; //render manda a generar y entregar 
  //la vista al cliente

  res.render('index', {
    // este es el view-Model
    title: 'Express',
    author: 'Cruz',
    emojiDb
  });
});
module.exports = router;
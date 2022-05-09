const express = require('express');

const router = express.Router();

/* GET home page. */

router.get('/', (_, res) => {
  const emojiDataset = [
    '☠',
    '😀',
    '🤐',
    '👌',
    '👍',
    '🎂',
    '🤷‍♂️',
    '🎶',
    '🌹',
    '🕳',
  ];
  const emojiDb = emojiDataset[Math.floor(Math.random() * emojiDataset.length)];
  // render manda a generar y entregar
  // la vista al cliente
  res.render('index', {
    // este es el view-Model
    title: 'ProjNotes',
    author: 'Cruz',
    emojiDb,
  });
});

module.exports = router;

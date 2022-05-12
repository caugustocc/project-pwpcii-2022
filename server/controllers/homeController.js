// URL: get /
const index = (req, res) => {
  // Calculando emojie
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
  const viewModel = {
    title: 'Index Controler Working !!!',
    author: 'Cruz',
    emojiDb,
  };
  res.render('index', viewModel);
};
export default {
  // [Action methods]
  index,
};

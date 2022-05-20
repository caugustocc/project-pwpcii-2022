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
  res.render('home/indexView', viewModel);
};
// URL::  Get /about
const about = (req, res) => {
  res.render('home/aboutView', {
    name: 'Carlos Cruz',
    email: 'cronuz300@gmail.com',
    url: 'https',
    description:
      'Aplicación que te permite registrar ideas de proyectos. PwpcII - 2022A',
    version: '0.0.alpha',
  });
};

export default {
  // [Action methods]
  index,
  about,
};

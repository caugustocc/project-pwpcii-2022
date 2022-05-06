const express = require("express");
// import express
const router = express.Router();

/* GET home page. */

router.get("/", (_, res) => {
  const emojiDataset = ["☠", "😀", "🤐", "👌", "👍", "🎂", "🤷‍♂️", "🎶", "🌹"];
  const emojiDb = emojiDataset[Math.floor(Math.random() * emojiDataset.length)];
  // render manda a generar y entregar
  // la vista al cliente
  res.render("about", {
    // este es el view-Model
    school: "ITgAM",
    emojiDb,
    email: "L181130080@gamadero.tecnm.mx",
  });
});

module.exports = router;

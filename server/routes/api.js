'use strict'

if (process.env.NODE_ENV !== `production`) {
  require(`dotenv`).config();
}

const express = require('express');
const router = express.Router();
const unirest = require('unirest');
const key = process.env.IGDB_KEY;

// router.get('/games', (req, res, next) => {
//   igdb.games({limit: 5, offset: 15, fields: "*"}).then(output)
// })
//
//
// router.get('/compaines', (req, res, next) => {
//   limit : 5,
//   offset : 15,
//   fields : '*'
// }).then(output)

router.get('/pulse', (req, res, next) => {
  unirest.get("https://igdbcom-internet-game-database-v1.p.mashape.com/pulses/?fields=*")
    .header("X-Mashape-Key", key)
    .header("Accept", "application/json")
    .end(function(result) {
      res.send(result);
    });
})

router.get(`/game`, (req, res, next) => {
  console.log(req.headers, "body here");
  unirest.get("https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name&limit=10&offset=0&order=release_dates.date%3Adesc&search="+req.body)
    .header("X-Mashape-Key", key)
    .header("Accept", "application/json")
    .end(function(result) {
      console.log(result.status, result.headers, result.body);
    });
})

module.exports = router;

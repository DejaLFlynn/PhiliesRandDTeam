const players = require("express").Router();
const { getAllPlayers } = require("./playersQueries");
players.get("/", getAllPlayers);

module.exports = players;

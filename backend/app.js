const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const players = require("./playersRoute");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/players", players);

app.listen(port, () => console.log("server running on port ", port));

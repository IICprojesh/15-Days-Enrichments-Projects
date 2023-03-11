const express = require("express")
const bodyParser = require("body-parser")
const helmet = require("helmet")
const {setRoutes} = require("./routes")

const server = express();

// for security
server.use(helmet());

const cors = require("cors"), 
    // allow origins according to your need
    corsOptions = {
        'origin': '*'
    };

server.use(cors(corsOptions));

server.use(bodyParser.json());

setRoutes(server);

module.exports = {server};
// ZPGJnwfHGkbwOOkD

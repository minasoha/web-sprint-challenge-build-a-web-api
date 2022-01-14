//IMPORTS
const express = require("express");
const projectRouter = require("./projects/projects-router");

//SERVER
const server = express();
server.use(express.json());
server.use("/api/projects", projectRouter);
// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

//EXPORT
module.exports = server;

// Imports
const express = require("express");
const projectsRouter = require("./projects/projects-router");
const actionsRouter = require("./actions/actions-router");
const { logger } = require("./general-middleware");

// Instantiate server
const server = express();

// Middleware
server.use(express.json());
server.use(logger);
server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);


// Exports
module.exports = server;

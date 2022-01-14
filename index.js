//IMPORTS
const express = require("express");

//VARIABLES
const server = express();
const port = process.env.PORT || 9000;

//SERVER
server.use(express.json());

server.listen(port, () => {
 console.log(`server is on port ${port}`);
});

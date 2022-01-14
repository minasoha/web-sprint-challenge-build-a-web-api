//IMPORTS
const server = require("./api/server");

//VARIABLES
const port = process.env.PORT || 9000;

server.listen(port, () => {
 console.log(`server is on port ${port}`);
});

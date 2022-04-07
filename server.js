// Try to set up an express server to implent get request from backend site
//Load HTTP module
const http = require("http");
const hostname = "127.0.0.1";
const port = 3001;

const users = {
  name: "Adam",
  owes: {
    Bob: 12.0,
    Chuck: 4.0,
    Dan: 9.5,
  },
  owed_by: {
    Bob: 6.5,
    Dan: 2.75,
  },
  balance: "<(total owed by other users) - (total owed to other users)>",
};

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  //Set the response HTTP header with HTTP status and Content type
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify());
});

//listen for request on port 3001, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

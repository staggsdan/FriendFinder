var path = require("path");
var mysql = require("mysql");
var friends = require("../data/friends");

var connection = "";

// get jawsdb running for upload

if (process.env.JAWSDB_URL) {
   connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
   mysql.createConnection({
   host: "localhost",
   port: 8889,
   user: "root",
   password: "root",
   database: "friends_db"
})};


connection.connect();

module.exports = function (app){
   // 'get' to send to compatibility logic
   app.get("/api/friends", function (req, res) {
      res.json(friends);
   });

   // post to add to the database
   app.post("/api/friends", function  (req, res){
      let userInput = req.body;
      let profilePoints = userInput.scores;

      for (let i = 0; i < friends.length; i++) {
         let matchCount = 0;
         for (let j = 0; j < profilePoints.length; j++) {
            if (friends[i].scores[j] === profilePoints[j]) {
               matchCount = matchCount + 5 
            } else if (friends[i].scores[j] - profilePoints[j] === 1 || friends[i].scores[j] - profilePoints[j] === -1) {
               matchCount = matchCount + 4;
            } else if (friends[i].scores[j] - profilePoints[j] === 2 || friends[i].scores[j] - profilePoints[j] === -2) {
               matchCount = matchCount + 3;
            } else if (friends[i].scores[j] - profilePoints[j] === 3 || friends[i].scores[j] - profilePoints[j] === -3) {
               matchCount = matchCount + 3;
            } else if (friends[i].scores[j] - profilePoints[j] === 4 || friends[i].scores[j] - profilePoints[j] === -4) {
               matchCount = matchCount + 2;
            } else if (friends[i].scores[j] - profilePoints[j] === 5 || friends[i].scores[j] - profilePoints[j] === -5) {
               matchCount = matchCount + 1;
            }   
         }
         // wrong way: code another loop that runs matchCount against the other guys
         // really wrong way: rely on exact match
      }
   })
}


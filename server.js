const express = require("express");
const app = express();
app.use(express.static("public"));
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require('./routes');
app.use(routes);

app.listen(PORT, function() {
console.log("server listening on http://localhost: " + PORT)
})
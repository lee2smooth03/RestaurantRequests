var express = require("express");
var bodyParser = require("body-parser");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.get("/reservations", function(req,res){
	res.json(reservations);
});

app.get("/tables", function(req,res){
	res.json(tables);
});


app.post("/api/tables", function(req, res) {
  var newcharacter = req.body;
  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

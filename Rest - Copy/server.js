// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Star Wars Characters (DATA)
// =============================================================
var Customer = [{
  name: "George ",
  phoneNumber: "912-555-8746",
  Email: "george@gmail.com",
  ID: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 55,
  forcePoints: 1350
}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:Customers?", function(req, res) {
  var chosen = req.params.customers;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < customers.length; i++) {
      if (chosen === customers[i].routeName) {
        return res.json(customers[i]);
      }
    }
    return res.json(false);
  }
  return res.json(customers);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  var Customer = req.body;
  Customer.routeName = Customer.name.replace(/\s+/g, "").toLowerCase();

  console.log(customer);

  Customer.push(Customer);

  res.json(Customer);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

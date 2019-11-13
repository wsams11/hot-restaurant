const express = require("express");
const path = require("path");
const tableData = require("./data/tableData");
const waitlistData = require("./data/waitinglistData");


const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/reserve.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/tables.html"));
});

app.get("/api/tables", function(req, res) {
    res.json(tableData);
});


app.get("/api/waitlist", function(req, res) {
    res.json(waitlistData);
})

app.post("/api/tables", function(req, res) {
    const newReservation = req.body;

    console.log(newReservation);

  tableData.push(newReservation);

  res.json(newReservation);
})

app.post("/api/clear", function(req, res) {
    tableData.splice(0);
    waitlistData.splice(0);

    res.end();
})



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });





var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    app = express(),
    db = require('./Server/Controllers/controller')
mongoose.connect('mongodb://localhost/anime')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client'))

app.get("/", (req, res) => {
    res.send("hELLO wORLD");
})
app.get("/api/animes", db.display);
app.get("/api/animes/:id", db.one);
app.post("/api/animes", db.add);
app.put("/api/animes/:id", db.update);
app.delete("/api/animes/:id", db.delete);


var port = 3000

app.listen(port, () => {
    console.log("listening on port " + port + "..");
})
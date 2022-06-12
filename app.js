const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render("bingoBeth");
})

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(port, function () {
    console.log("Server successfully started on Port:" + port);
});
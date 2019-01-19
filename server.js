const express = require("express");
const hbs = require("hbs");

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  //res.send("<h1>Hello Worldz man!</h1>");
  res.render("home.hbs", {
    pageTitle: "HOME",
    currentYear: new Date().getFullYear(),
    welcomeMessage: "Hello There!"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About Page",
    currentYear: new Date().getFullYear()
  });
});

app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "Unable to handle request"
  });
});

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});

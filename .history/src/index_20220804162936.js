const path = require("path");
const express = require("express");
var morgan = require("morgan");
const handlebars = require("express-handlebars");
const { application } = require("express");
const app = express();
const port = 3000;

const route = require("./routes");

// Static file
app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

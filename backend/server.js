const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./controller/fitness_controller.js");

app.use(routes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
const express = require('express');

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get('/', (request, response, next) => {
  response.render("index.ejs");
});

app.get('/about', (request, response, next) => {
  response.render("about.ejs");
});

app.get('/photos', (request, response, next) => {
  response.render("photos.ejs");
});

app.get('/quiz', (request, response, next) => {
  response.render("quiz.ejs");
});

app.listen(3000);

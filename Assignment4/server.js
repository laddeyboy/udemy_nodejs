const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.set('view engine', 'ejs');

const mainData = require('./routes/main');
const userRoute = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// handle site routes
app.use(userRoute);
app.use(mainData.routes);

// handle 404 page not found
app.use((req, res, next) => {
  res.status(404).render('404.ejs', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
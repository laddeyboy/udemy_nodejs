// Creating a Node Server
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const { get404 } = errorController;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views'); // not needed as this is default


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// this needs to be here to parse the body
// bodyParser.urlencoded -> registers a middleware 
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));  // this is granting access to read only access to these files.

// adminRoutes is the exported object from admin.js
app.use('/admin', adminRoutes); // the first parameter becomes a filter so only paths that start with '/admin'
// will be handled here.
app.use(shopRoutes);

app.use(get404);

app.listen(3000);
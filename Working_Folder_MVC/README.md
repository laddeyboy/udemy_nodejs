# Node JS

## controllers

* Part of the MVC (M-odel V-iew C-ontroller) pattern.  Controllers are code that create the connection points between our:
  * views -> which shouldn't care about app logic.
  * models -> which do care about our app logic.

## models

* Part of the MVC (M-odel V-iew C-ontroller) pattern.  Models are responsible for:
  * Representing our data in code.
  * Working with data (save, fetch).
  * Contains data-related logic.

## node_modules

* created by npm nothing to do with this.

## public

* files/code that will ultimately be exposed to the public for consumption by our apps.  Ex: (CSS Stylings, Images, Etc.).
* to use this we need to be able to serve files statically.
  * statically - not handled by the express router or other middleware but directly forwarded to the file system.
  * these files can be viewed in the network tab or our page.

## routes

* Code logic for directing our sites page routes.
* Decides which controllers should execute and which models should render which views.

## util

* this is functions, variables, code that help make code run or be cleaner.
  * For this project, we use this for the path directory global variable of our app path.dirname(process.mainModule.filename);.

## views

* Part of the MVC (M-odel V-iew C-ontroller) pattern.  View are what the user sees.
  * html files for the code of each page 'view'.
  * templating engines can also be used (like ejs or nunjucks).
  * Shouldn very little app logic.

## server.js

* main server file that holds our 'app'

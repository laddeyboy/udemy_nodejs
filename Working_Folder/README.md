# Node JS

## node_modules

* created by npm nothing to do with this.

## public

* files/code that will ultimately be exposed to the public for consumption by our apps.  Ex: (CSS Stylings, Images, Etc.).
* to use this we need to be able to serve files statically.
  * statically - not handled by the express router or other middleware but directly forwarded to the file system.
  * these files can be viewed in the network tab or our page.

## routes

* Code logic for directing our sites page routes.

## util

* this is functions, variables, code that help make code run or be cleaner.
  * For this project, we use this for the path directory global variable of our app path.dirname(process.mainModule.filename);.

## views

* html files for the code of each page 'view'.

## server.js

* main server file that holds our 'app'

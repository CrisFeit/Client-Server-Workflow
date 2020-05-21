/* eslint-disable linebreak-style */
const express = require('express');
let routes = require('./routes/routes');
const path = require('path');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.static(path.join(__dirname,'dist/assets')))
    this.server.set('views',path.join(__dirname,'view'));
    this.server.set('view engine' , 'pug')
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;

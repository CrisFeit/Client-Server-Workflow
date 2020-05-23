require('dotenv/config');
const express = require('express');
let routes = require('./router');
const path = require('path');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.static(path.join(__dirname,'public/assets')))
  }

  routes() {
    this.server.use(routes);
  }
}

const app = new App().server;

app.listen(process.env.PORT || 3000 ,()=>{
  console.log('Node is listening on port 3000...');
});

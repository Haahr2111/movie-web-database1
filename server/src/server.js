/**** Node.js libraries *****/
const path = require('path');

/**** External libraries ****/
const express = require('express'); 
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

/**** Configuration ****/
const app = express(); 

const MONGO_URL = process.env.MONGO_URL||'mongodb://localhost/Movies'; 


async function createServer() {
  // Connect db
  await mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});

  // Create data
  const movieDB = require('./movieDB')(mongoose);
  await movieDB.bootstrap();
  
  const routes = require("./routes")(movieDB); // Inject mongoose into routes module

  app.use(bodyParser.json()); 
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan('combined')); 
  app.use(cors());
  app.use(express.static(path.resolve('..', 'client', 'build'))); 
  
  /**** Add routes ****/
  app.use("/api", routes);

  // "Redirect" all non-API GET requests to React's entry point (index.html)
  app.get('*', (req, res) =>
    res.sendFile(path.resolve('..', 'client', 'build', 'index.html'))
  );
  
  return app;
}

module.exports = createServer;
// dotenv setup
require('dotenv').config();
const { DEV_PORT, DB_CONNECTION_STRING } = process.env;

// npm modules
const cors = require('cors');
const mongoose = require('mongoose');

// NodeJS modules
const fs = require('node:fs/promises');
const path = require('node:path');

// Express
const express = require('express');
const app = express();
const carsApi = require(path.resolve('API', 'cars'));

async function main() {
  // Connect to db
  let db = await mongoose.connect(DB_CONNECTION_STRING);


  // app.use statements
  app.use(express.static('public'));
  app.use(cors());
  app.use(express.json());

  app.use('/api/cars', carsApi);

  app.listen(DEV_PORT, () => {
    console.log(`Listening on ${DEV_PORT}`);
  })
}

main()
.catch(err => {
  console.log(err);
})
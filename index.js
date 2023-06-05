// dotenv setup
require('dotenv').config();
const { DEV_PORT, DB_CONNECTION_STRING } = process.env;

// npm modules
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const passport = require('passport');

// NodeJS modules
const fs = require('node:fs/promises');
const path = require('node:path');

// Express
const express = require('express');
const app = express();
const carsApi = require(path.resolve('Routers', 'cars'));
const userApi = require(path.resolve('Routers', 'users'));
const gastStationApi = require(path.resolve('Routers', 'gasStations'));

async function main() {
  // Connect to db
  let db = await mongoose.connect(DB_CONNECTION_STRING);

  // Passport auth setup
  require(path.join(__dirname, 'Auth', 'Auth'))(passport);


  // app.use statements
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
  app.use(express.json());
  app.use(passport.initialize());

  app.use(cookieParser());
  app.use('/api/cars', carsApi);
  app.use('/api/users', userApi);
  app.use('/api/gasstations', gastStationApi);

  app.listen(DEV_PORT, () => {
    console.log(`Listening on ${DEV_PORT}`);
  })
}

main()
.catch(err => {
  console.log(err);
})
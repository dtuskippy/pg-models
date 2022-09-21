'use strict';

//requires from models/index.js...
const {sequelizeDatabase, PeopleModel} = require('./src/models');
const { start } = require('./src/server');


sequelizeDatabase.sync()
  .then(() => {
    console.log('Successful Connection');
  })
  .catch(err => console.error(err));




  start();
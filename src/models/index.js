'use strict';

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const peopleSchema = require('./person.schema');

//'postgres://localhost:5432/api-app'
//postgres://localhost:5432/api-app
//if password...another line
//if came from ENV, no need for string (auto)

const DATABASE_URL = process.env.DATABASE_URL;

//instantiates our db

const sequelizeDatabase = new Sequelize(DATABASE_URL);

//create People Model with our Schema
const PeopleModel = peopleSchema(sequelizeDatabase, DataTypes);

//synch
sequelizeDatabase.sync()
  .then(() => console.log('Successful Connection'))
  .catch(err => console.error(err));

module.exports = { sequelizeDatabase, PeopleModel };

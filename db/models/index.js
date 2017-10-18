'use strict';

const db = require('../');
const SEQUELIZE = db.Sequelize;

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is required everywhere

// This is also probably a good place for you to set up your associations

const Event = db.define('event', {

  name: {
    type: SEQUELIZE.STRING,
  },

  time: {
    type: SEQUELIZE.DATE,
  },

  location: {
    type: SEQUELIZE.TEXT,
  },

  description: {
    type: SEQUELIZE.TEXT,
  },

  cost: {
    type: SEQUELIZE.INTEGER,
  },

  // attendees: {
  //   type: SEQUELIZE.ARRAY(SEQUELIZE.INTEGER),
  // },

  organizer: {
    type: SEQUELIZE.INTEGER,
  },

});


const User = db.define('user', {

  name: {
    type: SEQUELIZE.STRING,
  },

  // events: {
  //   type: SEQUELIZE.VIRTUAL,
  //   get: function() {}
  // },

  phone: {
    type: SEQUELIZE.INTEGER,
    isNumeric: true,
  },

  email: {
    type: SEQUELIZE.TEXT,
    isEmail: true,
  },

  birthday: {
    type: SEQUELIZE.DATE(),
  },

  // sign: {
  //   type: SEQUELIZE.ENUM(),
  // },

});

User.belongsToMany(Event, {through: 'EventAttendees'});
Event.belongsToMany(User, {through: 'EventAttendees'});


module.exports = { Event, User };

'use strict'
const api = require('express').Router();
const { Event, User } = require('../db/models');
const Sequelize = require('sequelize');

// getting all events
api.get('/events', (req, res, next) => {
  Event.findAll({})
  .then(result => {
    res.send(result);
  })
  .catch(next)
})

// getting thisWeek's events
api.get('/events/thisWeek', (req, res, next) => {
  const a = new Date(2017, 9, 28);
  Event.findAll({
    where: { time: { [Sequelize.Op.lte]: a } }
  })
  .then(result => {
    res.send(result);
  })
  .catch(next)
})

// getting next week's events
api.get('/events/nextWeek', (req, res, next) => {
  const a = new Date(2017, 9, 28);
  const b = new Date(2017, 10, 6);
  Event.findAll({
    where: { time: { [Sequelize.Op.between]: [a, b] } }
  })
  .then(result => {
    res.send(result);
  })
  .catch(next)
})

// getting events from beyond
api.get('/events/beyond', (req, res, next) => {
  const b = new Date(2017, 10, 6);
  Event.findAll({
    where: { time: { [Sequelize.Op.gte]: b } }
  })
  .then(result => {
    res.send(result);
  })
  .catch(next)
})

api.post('/events', (req, res, next) => {
  Event.create(req.body)
  .then(result => res.json(result))
  .catch(next)
})

api.get('/users', (req, res, next) => {
  User.findAll({})
  .then(result => {
    res.send(result);
  })
  .catch(next)
})

api.post('/users', (req, res, next) => {
  console.log(req.body)
  User.create(req.body)
  .then(result => res.json(result))
  .catch(next)
})

module.exports = api

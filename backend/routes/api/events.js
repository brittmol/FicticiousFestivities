const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Event, Ticket } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { response } = require('express');

const router = express.Router();

const validateEvent = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a title for your event.'),
  check('location')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a location for your event.'),
  check('datetime')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a date and time for your event.'),
  check('summary')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a description for your event.'),
  check('image')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an image for your event.'),
  handleValidationErrors
]

router.get('/', asyncHandler(async(req, res) => {
  const events = await Event.findAll()
  return res.json(events)
}))

router.post('/', validateEvent, asyncHandler(async(req, res) => {
  const event = await Event.create(req.body)
  return res.json(event)
}))

router.get('/:id', asyncHandler(async(req, res) => {
  const event = await Event.findByPk(req.params.id)
  return res.json(event)
}))

// router.put('/:id', validateEvent, asyncHandler(async(req, res) => {
//   const event = await Event.update(req.body, { where: {id: req.params.id} })
//   return res.json(event)
// }))

// router.delete('/:id', asyncHandler(async(req, res) => {
//   const event = await Event.findByPk(req.params.id)
//   return res.json(event)
// }))


module.exports = router;

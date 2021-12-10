const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Event, Ticket } = require('../../db/models');

const router = express.Router();

router.get('/', requireAuth, asyncHandler(async(req, res) => {
    const tickets = await Ticket.findAll({
        where: { userId: req.user.id }
    })
    return res.json(tickets)
}))

router.post('/', requireAuth, asyncHandler(async(req, res) => {
    const ticket = await Ticket.create(req.body)
    return res.json(ticket)
}))

router.delete('/:eventId', requireAuth, asyncHandler(async(req, res) => {
    const ticket = await Ticket.findOne({
        where: {
            eventId: req.params.eventId,
            userId: req.user.id
        }
    })
    if (!ticket) throw new Error('Cannot find ticket');
    await ticket.destroy();
    return res.json({})
}))

module.exports = router;

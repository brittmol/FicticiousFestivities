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

// router.delete('/:id', asyncHandler(async(req, res) => {
//     const ticket = await Ticket.findByPk(req.params.id)
//     if (!ticket) throw new Error('Cannot find ticket');
//     await ticket.destroy();
//     return res.json({})
// }))

module.exports = router;

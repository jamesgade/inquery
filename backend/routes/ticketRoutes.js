const express = require('express')
const router = express.Router()
const { getTickets, createTicket, getTicket, updateTicket, deleteTicket } = require('../controllers/ticketController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getTickets)
router.route('/create').post(protect, createTicket)
router.route('/:id').get(protect, getTicket)
router.route('/:id').put(protect, updateTicket)
router.route('/:id').delete(protect, deleteTicket)

module.exports = router

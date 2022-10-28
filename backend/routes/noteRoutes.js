const express = require('express')
const router = express.Router({ mergeParams: true })    // for /api/tickets/:ticketId/notes
const { getNotes, addNote } = require('../controllers/noteController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getNotes)
router.route('/new').post(protect, addNote)

module.exports = router

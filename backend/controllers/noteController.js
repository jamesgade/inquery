const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')
const Note = require('../models/noteModel')

// @desc    get notes for a ticket
// @route   GET /api/:ticketId/notes
// @access  private
const getNotes = asyncHandler(async (req, res) => {
    // get user id from jwt token
    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const ticket = await Ticket.findById(req.params.ticketId)

    if (ticket.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not authorized')
    }

    const notes = await Note.find({ ticket: req.params.ticketId })

    res.status(200).json(notes)
})

// @desc    create new note to a ticket
// @route   POST /api/:ticketId/notes/create
// @access  private
const addNote = asyncHandler(async (req, res) => {
    // get user id from jwt token
    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const ticket = await Ticket.findById(req.params.ticketId)

    if (ticket.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not authorized')
    }

    const note = await Note.create({
        text: req.body.text,
        isStaff: false,
        ticket: req.params.ticketId,
        user: req.user.id
    })

    res.status(200).json(note)
})

module.exports = {
    getNotes,
    addNote
}

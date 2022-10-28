import axios from "axios"

const API_URL = '/api/tickets'

// get ticket notes
const getTicketNotes = async (ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL + `/${ticketId}/notes`, config)

    return response.data
}

// create new note for a ticket
const newNote = async (noteText, ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL + `/${ticketId}/notes/new`, { text: noteText }, config)

    return response.data
}
const noteService = {
    getTicketNotes,
    newNote
}

export default noteService
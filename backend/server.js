const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const { PORT } = require('../config/keys')

// connect to database
connectDB()

const app = express()

// middleware to receive raw/json data in req
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.status(200).json({ mesage: "Welcome to Inquery-API" })
})

//Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))

app.use(errorHandler)

if (process.env.NODE_ENV === 'production') {

    const path = require('path')

    app.get('/', (req, res) => {
        app.use(express.static(path.resolve(__dirname, '..', 'frontend', 'build')))
        res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'))
    })

}

app.listen(PORT, () => console.log(`server started on port : ${PORT || 5000}`))

const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString)
const database = mongoose.connection
const routes = require('./routes/routes')
const app = express()
const cors = require('cors')

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected')
})
app.use(cors())
app.use(express.json())
app.use('/api', routes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send('Api runnning')
    })
}
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})

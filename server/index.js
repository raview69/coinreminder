const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const axios = require('axios').default
var cors = require('cors')
require('dotenv').config()
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString)
const database = mongoose.connection
const routes = require('./routes/routes')
const app = express()
const nodemailer = require('nodemailer')

const dataStoredlocal = []

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected')
})

app.use(cors())
app.use(express.json())
app.use('/api', routes)

const fetchPosts = async () => {
    const getDataUser = await axios.get('http://localhost:5000/api/getAll')
    const dataCoinUser = getDataUser.data
    dataCoinUser.filter((e) => {
        const listCoin = e.coin[0]
        if (listCoin !== undefined) {
            dataStoredlocal.push(listCoin)
        }
    })
    console.log(dataStoredlocal)

    for (let i = 0; i < dataStoredlocal.length; i++) {
        try {
            const foundCoinUser = dataCoinUser.find(
                (element) => element.coin[0] == dataStoredlocal[i]
            )
            const getDataCoin = await axios.get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false'
            )
            const dataCoin = getDataCoin.data
            const foundCoin = dataCoin.find(
                (element) => element.name == dataStoredlocal[i]
            )
            console.log(foundCoinUser.price_notify, foundCoin.current_price)
            if (foundCoin.current_price >= foundCoinUser.price_notify) {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        type: 'OAuth2',
                        user: process.env.MAIL_USERNAME,
                        pass: process.env.MAIL_PASSWORD,
                        clientId: process.env.OAUTH_CLIENTID,
                        clientSecret: process.env.OAUTH_CLIENT_SECRET,
                        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
                    },
                })

                const mailOptions = {
                    from: 'tomerpacific@gmail.com',
                    to: foundCoinUser.email,
                    subject: 'Your notifiy price has been accomplished',
                    text: `Hi ${foundCoinUser.email} this email notifed you that Your notifiy price has been accomplished`,
                }

                transporter.sendMail(mailOptions, function (err, data) {
                    if (err) {
                        console.log('Error ' + err)
                    } else {
                        console.log('Email sent successfully')
                    }
                })
            }
        } catch (error) {
            console.log('error, next')
        }
    }
}

const sendEmailNotification = () => {
    setTimeout(() => fetchPosts(), 1000)
}

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send(sendEmailNotification())
    })
}

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})

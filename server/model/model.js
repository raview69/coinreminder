const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type: String,
    },
    coin: [
        {
            required: true,
            type: String,
        },
    ],
    price: [
        {
            required: true,
            type: Number,
        },
    ],
    email: {
        required: true,
        type: String,
    },
    price_notify: {
        required: true,
        type: Number,
    },
})

module.exports = mongoose.model('Data', dataSchema)

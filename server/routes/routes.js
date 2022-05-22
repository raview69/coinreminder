const express = require('express')
const router = express.Router()
const Model = require('../model/model')

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        id: req.body.id,
        coin: req.body.coin,
        price: req.body.price,
        email: req.body.email,
        price_notify: req.body.price_notify,
    })

    try {
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find()
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = router

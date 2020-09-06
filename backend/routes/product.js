const express = require('express');
const router = express.Router();
const product = require('../models/product.js');

router.get('/product', (req, res) => {
    User.find({}, (err, data) => {
        res.json(data);
    })
})

router.get('/product/:id', (req, res) => {
    User.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

router.delete('/product/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ 'message': 'Deleted' });
})

router.post('/product/', (req, res) => {
    product = new Product({
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        describtion: req.body.describtion,
        
    })
    user.save(() => {
        res.json(user);
    })
})

router.put('/product/:id', async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({ 'message': 'Updated' })
})

module.exports = router;
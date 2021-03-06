const cart = require('../database/models').cart
const route = require('express').Router()


route.post('/', (req, res) => {
    cart.create({
        email: req.body.email,
        name: req.body.name,
        price: parseFloat(req.body.price),
        manufacturer: req.body.manufacturer,
        productimage: req.body.productimage,
        ignoreDuplicates: true,
        ignore: true

    })
        .then((cart) => {
            res.status(201).send(cart)
        })
        .catch((err) => {
            console.log(err)
            res.status(201).send(err)
            // res.status(501).send({ error: "product not added to cart" })
        })
})

route.get('/', (req, res) => {
    //get all products
    cart.findAll()
        .then((cart) => {
            res.status(200).send(cart)
        })
        .catch((err) => {
            res.status(500).send({ error: "could not find any products in cart" })
        })
})

exports = module.exports = route
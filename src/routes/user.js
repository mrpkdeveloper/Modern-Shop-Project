const user = require('../database/models').users
const route = require('express').Router()


route.post('/', (req, res) => {
    user.create({
        name: req.body.name,
        email: req.body.email,

    })
        .then((user) => {
            res.status(201).send(user)
        })
        .catch((err) => {
            console.log(err)
            res.status(201).send(err)
            // res.status(501).send({ error: "product not added to cart" })
        })
})

route.get('/', (req, res) => {
    //get all users
    user.findAll()
        .then((user) => {
            res.status(200).send(user)
        })
        .catch((err) => {
            res.status(500).send({ error: "could not able to find user" })
        })
})

exports = module.exports = route
const route = require('express').Router()

route.use('/products', require('./product'))
route.use('/cart', require('./cart'))
route.use('/user', require('./user'))
exports = module.exports = {
    route
}
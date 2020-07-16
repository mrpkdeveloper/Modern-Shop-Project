const route = require('express').Router()

route.use('/products', require('./product'))
route.use('/cart', require('./cart'))
exports = module.exports = {
    route
}
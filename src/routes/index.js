const route = require('express').Router()

// route.use('/users', require('./users'))
route.use('/products', require('./product'))
route.use('/cart', require('./cart'))
exports = module.exports = {
    route
}
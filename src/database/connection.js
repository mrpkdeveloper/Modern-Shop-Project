const sequelize = require('sequelize')
const db = new sequelize('modernshopdb', 'modernshopuser', 'modernshoppass', {
    dialect: 'mysql',
    host: 'localhost'
})

//test
// db.authenticate()
//     .then(() => { console.log("databse connected successfully") })
//     .catch((e) => { console.log(e) })

module.exports = {
    db
}
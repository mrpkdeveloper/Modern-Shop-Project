const { db } = require('./connection')
const { DataTypes } = require('sequelize')

const users = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        foreignKey: true
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },

})


const products = db.define('products', {              //table name products with following attributes
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    price: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0.0

    },
    productimage: {
        type: DataTypes.STRING
    }

})


const cart = db.define('cart', {
    email: {
        type: DataTypes.STRING(50),
        primaryKey: true
    },
    name: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    price: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0.0

    },
    productimage: {
        type: DataTypes.STRING,
        unique: true
    }

})


//associations
cart.belongsTo(users)

//test
// db.sync()
//     .then(() => console.log('database synced successfully'))
//     .catch((err) => console.error("error in creating database"))

module.exports = {
    db, users, products, cart
}
const express = require('express')
const app = express()
const path = require('path')
const { db } = require('./src/database/models')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//the above lines are for handling post requests to the server

app.use('/', express.static(path.join(__dirname, '/src/public')))  //this file executes index.html in public folder
//the above line used to declare the folowing folder as static 
//static files can be accessed by anoyne 

app.use('/api', require('./src/routes').route)  //this line execute index.js in api folder

db.sync({ force: true })
    .then(() => {
        console.log('database synced successfully')
        app.listen(1111, () => { console.log('server started at http://localhost:1111') })
    })
    .catch((err) => console.error("error in creating database"))


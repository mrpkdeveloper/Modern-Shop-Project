const express = require('express')
const http = require('http')
const app = express()

const server = http.createServer(app)

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes').route)

const port = process.env.PORT || 3434

server.listen(port, ()=>{
   console.log("Server started at http://localhost:3434")
})
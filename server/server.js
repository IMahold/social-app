const express = require('express')

const app = express()
require('dotenv').config()


const connectToDb = require('./config/db')

connectToDb()



app.use(express.json()) // used to process the body part of the incoming message
app.use('/users', require('./routes/userRoutes'))

const port = process.env.PORT || 6000

app.listen(port, () => console.log('Server is up and running at port', port))
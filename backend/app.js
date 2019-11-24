const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const port = 3000

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.listen(port, () => {
	console.log(`gratitude express app listening on port ${port}`)
})

const dbConn = 'mongodb://localhost/gratitude'
// Set four properties to avoid deprecation warnings:
mongoose.connect(dbConn, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (err) => {
        if (err) {
            console.log('Error connecting to database', err);
        } else {
            console.log('Connected to database!');
        }
    });
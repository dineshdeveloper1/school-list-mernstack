const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/studentslist')

const app = express()

app.use(cors())
app.use(express.json())

//production database
mongoose.connect('mongodb+srv://root:root@cluster0.g8vsuwv.mongodb.net/sundayschool-prod')

//local database
/* mongoose.connect('mongodb://127.0.0.1:27017/sundayschool-dev') */


app.get('/studentslist', (req, res) => {
    UserModel.find()
        .then(studentslist => res.json(studentslist))
        .catch(err => res.json(err))
})

app.listen(9991, () => {
    console.log("Server is running on port 9991")
})
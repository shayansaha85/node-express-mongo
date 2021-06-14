const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.urlencoded({ extended : true }))

const dbName = "credentials"

const url = "mongodb+srv://shayansaha85:shayansaha85@cluster0.wpzm2.mongodb.net/" + dbName
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const login = {
    name : String,
    email : String
}

const entry = mongoose.model("entry", login)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
    const loginCred = new entry( {
        name: req.body.name,
        email: req.body.email
    })

    loginCred.save()
    res.sendFile(__dirname + "/done.html")
})

port = 10323
app.listen(port, () => {
    console.log(`Listening to ${port}`)
})


// requirements 
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const app = express()
const PORT = process.env.PORT
const drinks = require("./models/drinks")

// middleware
app.use(morgan("dev"))


// Routes

app.get("/",(req,res) => {
    res.send("Welcome to the Gitpub App!")
})
// index
app.get("/drinks",(req,res) => {
    res.render("index.ejs",{drinks})
})

// show route
app.get("/drinks/:id",(req,res) => {
    const id = req.params.id
    const drink = drinks[id]
    // help i dont know why i can't pass in the drink this way
    // res.render("show.ejs", {drinks[id]})
    /////////////////////////////////////
    res.render("show.ejs",{drink})
})

app.listen(PORT, () => {
    console.log(`we are live on port ${PORT}`)
})


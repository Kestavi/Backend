//server create krna
//server ko config karna

const express = require("express")
const app = express()


//middleware je code run karva mate 
app.use(express.json())

const notes = []


//post notes
app.post("/notes", (req, res) => {
    console.log(req.body)
    notes.push(req.body)
    console.log(notes)
    res.send("note created")
})


//get notes
app.get("/notes", (req, res) => {
    res.send(notes)
})


//delete notes
//parms
//delete / notes / : -> dyanamic value
app.delete("/notes/:idx", (req, res) => {
    delete notes[req.params.idx]
    res.send("update successfully...")
    console.log(req.params)
})


//Modify notes 
//req.body = {description = "sample modified description"}
app.patch("/notes/:idx", (req, res) => {
    notes[req.params.idx].Description = req.body.Description
    res.send("notes update successfully")
})

module.exports = app
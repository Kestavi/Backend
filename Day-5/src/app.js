//server create krna
//server config krna

const express = require("express")
const app = express()

//middleware
app.use(express.json())
const notes = []

//status code

//post 

app.post("/notes", (req, res) => {
    console.log(req.body)
    notes.push(req.body)
    res.status(201).json({
        message: "Note craeted successfully..."
    })
})

//get 

app.get("/notes", (req, res) => {
    res.status(200).json({
        notes: notes
    })
})

//delete
app.delete("/notes/:idx", (req, res) => {
    delete notes[req.params.idx] 
    res.status(204).json({
        message:"Note deleted successfully..."
    })
})

//patch
app.patch("/notes/:idx",(req,res)=>{
    notes[req.params.idx].description = req.body.description
    res.status(200).json({
        message:"Update successfully..."
    })
})
module.exports = app
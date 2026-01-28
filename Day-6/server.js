//server strat krna

const app = require("./src/app")


//database connected to server
const mongooes = require("mongoose")
function dbConnect() {
    mongooes.connect("mongodb+srv://kestavi:yAL5ptI7xQXQnBvJ@cohort.1wzxnen.mongodb.net/Day-6")
        .then(() => {
            console.log("Database connected")
        })
}

// call to function
dbConnect()

app.listen(3000, (req, res) => {
    console.log("server on runnnig port 3000")
})
const express = require('express')
const app = express()

app.get("/greeting/", (req, res) => {
    res.send(`Hello Stranger`)
})

app.get("/greeting/:name", (req, res) => {
    res.send(`"Whats up, ${(req.params.name)}! It's so great to see you!"`)
})

app.listen(3000, () => {
    console.log(`Hello! I'm listening on port 3000...`)
});
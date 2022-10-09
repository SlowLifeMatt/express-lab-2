const express = require('express')
const app = express()

app.get("/greeting/", (req, res) => {
    res.send(`Hello Stranger`)
})

// Greetings
app.get("/greeting/:name", (req, res) => {
    res.send(`"Whats up, ${(req.params.name)}! It's so great to see you!"`)
})
// Tip Calculator
app.get("/tip/:total/:tipPercentage/", (req, res) => {
    res.send(`${ parseInt(req.params.tipPercentage)  * parseInt(req.params.total) / 100} `)
})
// Magic 8 Ball
app.get("/magic/:question/", (req, res) => {
    const responses = [
        "It is certain", 
        "It is decidedly so", 
        "Without a doubt", 
        "Yes definitely",
        "You may rely on it", 
        "As I see it yes", 
        "Most likely", 
        "Outlook good",
        "Yes", 
        "Signs point to yes", 
        "Reply hazy try again", 
        "Ask again later",
        "Better not tell you now", 
        "Cannot predict now", 
        "Concentrate and ask again",
        "Don't count on it", 
        "My reply is no", 
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    ]
    res.send(`<h1>${req.params.question} = ${responses[Math.floor(Math.random()*responses.length)]}</h1>`)
})


app.listen(3000, () => {
    console.log(`Hello! I'm listening on port 3000...`)
});
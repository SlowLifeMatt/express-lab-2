const express = require('express')
const app = express()
//you might want to declare a PORT variable at the top in case you decide to change the port number it is right at the top with all the other variables
//i also put my 8 ball questions here

app.get("/greeting/", (req, res) => {
    res.send(`Hello Stranger`)
})

// Greetings
app.get("/greeting/:name", (req, res) => {
    res.send(`"Whats up, ${(req.params.name)}! It's so great to see you!"`)
})
//Very efficient for the tip calculator! 

// Tip Calculator
app.get("/tip/:total/:tipPercentage/", (req, res) => {
    res.send(`${ parseInt(req.params.tipPercentage)  * parseInt(req.params.total) / 100} `)
})

//Magic 8 ball looks great! I would keep the array outside of your get request in the global scope.


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

//My solution
const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

app.get('/magic/:question', (req, res) => {
    const randomNum = Math.floor(Math.random() * (0, answers.length) + 1)
    res.send(`<h1>You question of ${req.params.question} will return ===> ${answers[randomNum]}.</h1>`)
})
//

app.listen(3000, () => {
    console.log(`Hello! I'm listening on port 3000...`)
});
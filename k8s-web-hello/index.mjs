import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000
const SECOND_MESSAGE = "empty"

app.get("/", (req, res)=>{
    const helloMessage = `VERSION 3: Hello from the ${os.hostname()}`
    console.log(helloMessage)
    res.send(helloMessage)

})

app.get("/testing", (req, res)=>{
    console.log(SECOND_MESSAGE)
    res.send(SECOND_MESSAGE)

})

app.get("/second", (req, res)=>{
    const helloMessage = `Testing endpoint: Hello from the ${os.hostname()}`
    console.log(helloMessage)
    res.send(helloMessage)

})

app.listen(PORT, ()=> {
    console.log(`Web server is listening at port ${PORT}`)
})
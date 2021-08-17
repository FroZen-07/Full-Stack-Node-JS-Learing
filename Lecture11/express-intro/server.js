const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

//Middleware
function middleware1 (req, res, next) {
    console.log(req.url)
    next()
}
function middleware2 (req, res, next) {
    console.log(req.hostname)

    res.send('In middleware 2 function')
}

app.get('/x', middleware1, middleware2)



//PORT = Communication channel
app.listen(3000, () => {
    console.log('server started on http://localhost:3000')
})
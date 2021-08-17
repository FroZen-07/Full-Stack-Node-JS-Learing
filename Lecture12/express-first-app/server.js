const express = require('express')

const app = express()

app.get('/hello', (req, res) => {
    let name = 'Guest'
    if(req.query.user) { name = req.query.user }

    res.send('Hello, ' + name)
})

// Mounting the Public Folder on XYZ group
app.use('/xyz', express.static(__dirname + '/public'))


app.listen(3000, () => {
    console.log('server started on http://localhost:3000')
})
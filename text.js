let http = require('http');

let ourApp = http.createServer(function (req, res) {
    res.end("Hello, and welcome to our Website.")
})
ourApp.listen(5000)
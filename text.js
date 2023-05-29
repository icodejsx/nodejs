let http = require('http');

let ourApp = http.createServer(function (req, res) {
    if (req.url == '/') {
    res.end("Hello, and welcome to our Website.")
    }

    if (req.url == '/about') {
    res.end(" there, and welcome to our about page.")
        
    } 
    res.end("we cannot find the page ya looking for")
    
   
})
ourApp.listen(5000)
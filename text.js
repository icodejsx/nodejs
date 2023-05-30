let express = require('express');
let ourApp = express();
ourApp.use(express.urlencoded({ extended:false}));

ourApp.get('/', function (req, res) {
    res.send(`
    <form action='/answer' method='post'>
    <p>What Color is the sky on a clear and sunny day?</p>
    <input type="text" name="skyColor">
    <button> Submit Answer </button>
    </form>
    
    `);
})

ourApp.post('/answer', function (req, res) { 
    if (req.body.skyColor.toUpperCase() === 'BLUE') {
        res.send(`
       <p>Congrats thats is the correct answer</p>
       <a href="/">Back to homepage</a>
        `)
    } else {
            res.send(`
       <p>Sorry thats is incorrect</p>
       <a href="/">back to homepage</a>
        `)
   }
})

ourApp.get('/answer', function (req, res) { 
    res.send('Are you lost there is noting to see here.')
})

ourApp.listen(5000)
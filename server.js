let express = require('express')
let app = express()
app.get('/', function (req, res) {
    res.send("Goodbye world");
})
app.listen(3000);
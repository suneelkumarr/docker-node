const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) =>{
    res.send(`<h2>This is testing node with docker !! <h2>`)
})

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})
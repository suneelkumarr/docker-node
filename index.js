const express = require('express');
require('dotenv').config
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose')

mongoose
.connect("mongodb+srv://16eiacs080:16eiacs080@cluster0.1wbxw.mongodb.net/ecommweb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Database connected"))
.catch(error => {
    if (error) console.log('Failed to connect DB')
})


app.get('/', (req, res) =>{
    res.send(`<h2>This is testing node with docker !! <h2>`)
})

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})
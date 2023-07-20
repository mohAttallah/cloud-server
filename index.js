const express = require('express')
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

app.get('/', (req, res) => {

    res.status(200).json({
        message: "Welcome to Simple API Server"
    })
})

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
    console.log("server Running on port ", PORT)
})
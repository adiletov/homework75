const express = require('express');
const cors = require('cors');
const vigenere = require('./app/Vigenere');

const app = express();
const port = 8080;


app.use(cors());
app.use(express.json());
app.use('/vigenere', vigenere);


app.listen(port);
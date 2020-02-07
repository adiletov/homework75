const express = require('express');
const router = express.Router();
const vigenere = require('caesar-salad').Vigenere;





router.post('/encode', (req, res)=>{
    const password = vigenere.Cipher(req.body.password).crypt(req.body.encode);
    let text = {encode : password};
    res.send(text)
});

router.post('/decode', (req,res)=>{
    const password = vigenere.Decipher(req.body.password).crypt(req.body.decode);
    let text = {decode: password};
    res.send(text)
});

module.exports = router;

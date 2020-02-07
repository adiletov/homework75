const express = require('express');
const router = express.Router();
const db = require('../fileDb');
const vigenere = require('caesar-salad').Vigenere;


router.get('/password', (req,res)=>{
    const passwordDb = db.getPassword();
    res.send(passwordDb)
});


router.post('/encode', (req, res)=>{
    const password = vigenere.Cipher(req.body.password).crypt(req.body.encode);
    req.body.encode = password;
    db.addPassword(req.body.encode);
    res.send(req.body)
});

router.post('/decode', (req,res)=>{
   const password = vigenere.Decipher(req.body.password).crypt(req.body.decode);
   req.body.decode = password;
   db.addPassword(req.body.decode);
   res.send(req.body)
});

module.exports = router;

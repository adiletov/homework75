const fs = require('fs');
const fileName = './db.json';

let data;


module.exports ={
    init(){
        try{
            const fileCode = fs.readFileSync(fileName);
            data = JSON.parse(fileCode.toString())
        }catch (e) {
            data = null
        }
    },
    getPassword(){
        return data
    },
    addPassword(password){
        data = password;
        this.save()
    },
    save(){
       fs.writeFileSync(fileName, JSON.stringify(data))
    }
};
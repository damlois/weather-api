const express = require('express');
const request = require('request');
const router = express.Router();


router.get('/', (req,res)=>{
    res.send(`WELCOME TO LOUISSA WEATHER API`)
})

router.get('/getweather/:city',(req,res)=>{
    const apiKey = process.env.KEY;
    const city = req.params.city;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    request(url,(err,resp, body)=>{
        if(err){
            console.log({'error': err})
            res.send({
                error: err
            })
        }
        else{
            let bodyJSon = JS
            console.log({'body': body})
            res.send({'body': body.main});
        }
    })
})

module.exports = router;
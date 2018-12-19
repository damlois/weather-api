const express = require('express');

const router = require('./route')
const app = express();

const port = process.env.PORT || 8080;

app.use('/', router);

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});

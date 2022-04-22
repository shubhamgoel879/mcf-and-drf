const express = require('express');
const app=express();

app.use(express.urlencoded()); 
app.use(express.static('./assets'));
app.use('/',require('./routes/index'));

app.set('view engine','ejs');
app.set('views','./views');


const port=8000;
app.listen(port,function(err){
    if(err){
        console.log(`Error connecting to port:${port}`);
        return;
    }
    console.log(`Server is up and running on port:${port}`);
    console.log('Click: ','http://localhost:8000/metatag');
    console.log('Click: ','http://localhost:8000/dns');
});


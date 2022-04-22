const express = require('express');
const router=express.Router();

//Requests of Metatag Content Finder are routed here.
router.use('/metatag',require('./metatag'));


//Requests of DNS Records Finder are routed here.
router.use('/dns',require('./dns'));

module.exports=router;
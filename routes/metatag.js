const express = require('express');
const router=express.Router();
const metatag_controller=require('../controllers/metatag_controller');

//It will render initial page of metatag content finder.
router.get('/',metatag_controller.metatag);

//It will find the content of respective metatag.
router.post('/contentFinder',metatag_controller.contentFinder);

module.exports=router;
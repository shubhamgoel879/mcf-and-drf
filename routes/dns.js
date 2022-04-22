const express = require('express');
const router=express.Router();
const dns_controller = require('../controllers/dns_controller');

//It will render initial page of DNS records finder.
router.get('/',dns_controller.dns);

//It will find the DNS text Records of the record name.
router.post('/recordFinder',dns_controller.recordFinder);

module.exports=router;
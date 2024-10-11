const express=require('express')
const {geocodeAddress}=require('../controller/mapsController')

const router=express.Router();

router.get('/geocode',geocodeAddress);

module.exports=router;
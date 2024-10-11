const axios=require('axios')
const config=require('../config/config')

exports.geocodeAddress=async(req,res)=>{
    const {address}=req.query;
    if(!address){
        return res.status(400).json({message:'address parameter require'});
    }

    try{
        const response=await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`,
            {params:{address:address,key:config.googleMapApiKey}}
        )
     
        if(response.data.status==='OK'){res.status(200).json(response.data.results)}
        else{res.status(404).json({message:'no resulit found '})}

    }
    catch(error){
        res.status(500).json({message:'error fetching data from goggle map',error:error.message})
    }
  }
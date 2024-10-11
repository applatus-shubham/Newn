require('dotenv').config({path:'./env'})

module.exports={
    port:process.env.PORT||3000,
    googleMapApiKey:process.env.GOOGLE_MAPS_API_KEY
}
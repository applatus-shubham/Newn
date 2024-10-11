const verifyToken=(req,res,next)=>{
    const token=req.headers['authorization'];
    if(!token) return res.status(403).json({message:'token is required'});
    //if(token==='')
next();



}

module.exports={verifyToken};
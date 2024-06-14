const jwt= require("jsonwebtoken");
const authenticate = (req,res,next)=>{
  const token = req.header("token");
 try{
    const decode= jwt.verify(token,"usersTokenLogin");
    if(decode){
        req.user = decode;
        next();
    }
 }catch(error){
    res.status(500).send("Login please");
 }
};
module.exports={
    authenticate,
}
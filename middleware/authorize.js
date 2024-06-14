const authorize =(req,res,next)=>{
   const {user} = req;
   console.log(user);
   console.log(user.type);
   if(["ADMIN","admin"].findIndex((el)=>el===user.type)>-1){
    next();
   }else{
    res.status(403).send("Khong du quyen");
   };
}
module.exports={
 authorize,
}
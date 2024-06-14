const { mkdirp } = require("mkdirp");
const multer= require("multer");
const uploadImg =(type)=>{
const made = mkdirp.sync(`./public/images/${type}`)
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,`./public/images/${type}`);
    },
    filename: function(req,file,cb){
        cb(null,Date.now()+"_"+file.originalname);
    },
});
const upload=multer({
    storage:storage,
    fileFilter:function(req,file,cb){
        const extensionImg = [".png",".jpg",".svg",".JPG"];
        const extension = file.originalname.slice(-4);
        const check = extensionImg.includes(extension);
        if(check){
            cb(null,true);
        }else{
            cb(new Error("invalid file extension"));
        }
    },
    limits: {
        fileSize:900000,    
    }
});
return upload.single(type);
}
module.exports={
    uploadImg,
}

const { where } = require("sequelize");
const { users } = require("../models/index");
const bcryptjs = require("bcryptjs");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
// register
const register = async (req, res) => {
    const { name, email, password, numberPhone } = req.body;
    try {
        // random string to encrypt
        const salt = bcryptjs.genSaltSync(10);
        // String encrypt salt + pass
        const hashPass = bcryptjs.hashSync(password, salt);
        //create defaul avt
        const avtDefaul = gravatar.url(email);
        console.log(avtDefaul);
        const newUser = await users.create({ name, email, password: hashPass, numberPhone,avatar:avtDefaul});
        res.send(newUser);

    } catch (error) {
        res.send(error)
    }
};
const uploadAvt=async (req,res)=>{
    const {file}=req;
    const urlImg = `http://localhost:3000/${file.path}`;
    const {user} = req;
    const userFound = await users.findOne({
        where:{
            email:user.email,
        }
    });
    userFound.avatar = urlImg;
    await userFound.save();
    res.send(userFound);
}
// login
const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await users.findOne({
        where: {
            email,
        }
    })
    if (user) {
        const checkPass = bcryptjs.compareSync(password, user.password);
        if (checkPass) {
            const token = jwt.sign({ email: user.email, pass: user.password,type:user.type}, "usersTokenLogin", { expiresIn: 60 * 60 });
            res.send({
                mess: "Login success",
                token
            });
        }
        else {
            res.send("Login fail");
        }
    }
    else {
        res.status(404).send("Not found");
    }
}
module.exports = {
    register,
    login,
    uploadAvt
}
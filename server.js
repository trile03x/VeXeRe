const express = require("express");
const path = require("path");
const app = express();
const {sequelize}= require("./models/index");
const {rootRouter}= require("./routers/index")
// cai dat chuoi json 
app.use(express.json());
// cai dat static file
const publicPath = path.join(__dirname,"./public");
app.use('/public',express.static(publicPath));
// dung router
app.use("/api/v1",rootRouter);
// lang nghe su kien ket noi
app.listen(3000,async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})

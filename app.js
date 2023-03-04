const express = require("express");
const app =  express();
const mongoose = require("mongoose");
const path=require("path")
const cors = require("cors");
const bodyParser = require("body-parser");
const Routes= require('./Routes/Routes');
const dotenv = require("dotenv");
dotenv.config();
// console.log(process.env.MONGO_URI)
mongoose.connect(`${process.env.MONGO_URI}`,{useNewUrlParser: true, useUnifiedTopology:true},()=>{
    console.log("db connected");
})

app.use(cors());
app.use(bodyParser.json({ extended:true })); 
app.use(bodyParser.urlencoded({ extended:true }));


app.use('/',Routes);

if(process.env.NODE_ENV === 'production'){      // set static folder 
    //returning frontend for any route other than api 
    app.get('/',(req,res)=>{     
        app.use(express.static(path.resolve(__dirname,'client','build')))
        res.sendFile(path.resolve(__dirname,'client','build','index.html'),function(err) {
            if(err){
                res.status(500).send(err);
            }
        });    
    });
}

app.listen(8805,()=>{
    console.log("server started hello");
}) 
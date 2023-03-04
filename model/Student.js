const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    rollnumber:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
}
);

module.exports=mongoose.model("Student",StudentSchema);
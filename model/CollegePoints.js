const mongoose = require("mongoose");
const CollegePointsForStudentSchema = new mongoose.Schema({
    point:{
        type:String,
        require:true,
    },
}
);

module.exports=mongoose.model("CollegePointsForStudentss",CollegePointsForStudentSchema);

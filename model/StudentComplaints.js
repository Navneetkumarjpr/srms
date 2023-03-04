const mongoose = require("mongoose");
const StudentComplaintsSchema = new mongoose.Schema({
    complaint:{
        type:String,
        require:true,
    },
}
);

module.exports=mongoose.model("StudentComplaints",StudentComplaintsSchema);

const mongoose = require("mongoose");
const SubjectSchema = new mongoose.Schema({
    semester:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        require:true,
    },
    subject1:{
        type:String,
        require:true,
    },
    subject2:{
        type:String,
        require:true,
    },
    subject3:{
        type:String,
        require:true,
    },
    subject4:{
        type:String,
        require:true,
    },
    subject5:{
        type:String,
        require:true,
    },
    subject6:{
        type:String,
        require:true,
    },
}
);


module.exports = mongoose.model('Subject',SubjectSchema);;
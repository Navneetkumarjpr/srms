const express = require("express");
const routes = express.Router();
const Student = require('../model/Student');
const Result = require('../model/Result');
const CollegePoints = require("../model/CollegePoints");
const StudentComplaints = require("../model/StudentComplaints");
const Subject = require("../model/Subject");
routes.post("/newstudent", async(req,res)=>{
    try{
        const newStudent =new Student({
            name:req.body.name,
            rollnumber:req.body.rollnumber,
            email:req.body.email,
            password:req.body.password,
        });

        const student = await newStudent.save();
        res.status(200).json(student);
    }catch(err){
        console.log("errorsss",err);
    }
})

routes.post("/studentlogin",async (req,res)=>{
    try{
        console.log(req.body.email);
        const student = await Student.findOne({email:req.body.email});
        !student && res.status(404).send("user not found");
        const rollnumberofstudent = await Student.findOne({rollnumber:req.body.rollnumber});
        !rollnumberofstudent && res.status(404).send("rollnumber not found");
        const validPassword=  await Student.findOne({password:req.body.password});
        !validPassword && res.status(400).send("wrong password");
        res.status(200).json(student);
    }catch(err){
        res.status(500).json(err);
    }
})

routes.post("/addsemresult", async(req,res)=>{
    try{
        const newStudent =new Result({
            name:req.body.name,
            rollnumber:req.body.rollnumber,
            semester:req.body.semester,
            fathername:req.body.fathername,
            mothername:req.body.mothername,
            subject1name:req.body.subject1name,
            subject2name:req.body.subject2name,
            subject3name:req.body.subject3name,
            subject4name:req.body.subject4name,
            subject5name:req.body.subject5name,
            subject6name:req.body.subject6name,
            subject1:req.body.subject1,
            subject2:req.body.subject2,
            subject3:req.body.subject3,
            subject4:req.body.subject4,
            subject5:req.body.subject5,
            subject6:req.body.subject6,
            totalmarks:req.body.totalmarks,
            percentage:req.body.percentage,
            branch:req.body.branch,
        });

        const student = await newStudent.save();
        res.status(200).json(student);
    }catch(err){
        console.log("errorsss",err);
    }
})

routes.get("/reportcard/:rollnumber", async(req,res)=>{
    const rollNumber = req.params.rollnumber;
    try{
       const allSemResult = await Result.find({rollnumber:rollNumber})
       res.status(200).json(allSemResult);
    }catch(err){
        console.log("errorsss", err);
    }
})


routes.post("/collegePoints", async(req,res)=>{
    console.log(req.body);
    try{
        const newPoint =new CollegePoints({
            point:Object.keys(req.body)[0],
        });

        const pnt = await newPoint.save();
        res.status(200).json(pnt);
    }catch(err){
        console.log("errorsss",err);
    }
})

routes.get("/getcollegePoints", async(req,res)=>{
    try{
       const allPoints = await CollegePoints.find();
       res.status(200).json(allPoints);
    }catch(err){
        console.log("errorsss", err);
    }
})

routes.post("/complaintsPoints", async(req,res)=>{
    console.log(req.body);
    try{
        const newCompliant =new StudentComplaints({
            complaint:Object.keys(req.body)[0],
        });

        const comp = await newCompliant.save();
        res.status(200).json(comp);
    }catch(err){
        console.log("errorsss",err);
    }
})


routes.get("/getstudentComplaint", async(req,res)=>{
    try{
       const allComplaints = await StudentComplaints.find();
       res.status(200).json(allComplaints);
    }catch(err){
        console.log("errorsss", err);
    }
})


routes.post("/addsubjects", async(req,res)=>{
    try{
        const newSubjects =new Subject({
            semester:req.body.semester,
            branch:req.body.branch,
            subject1:req.body.subject1,
            subject2:req.body.subject2,
            subject3:req.body.subject3,
            subject4:req.body.subject4,
            subject5:req.body.subject5,
            subject6:req.body.subject6,           
        });

        const subject = await newSubjects.save();
        res.status(200).json(subject);
    }catch(err){
        console.log("errorsss",err);
    }
})

routes.put("/subjectupdate/:semester/:branch", async(req,res)=>{
    const updateSem = req.params.semester;
    const updateBranch = req.params.branch; 
    try{
        const subject = await Subject.findOneAndUpdate({semester:updateSem,branch:updateBranch},{
            $set:{
                semester:req.body.semester,
                branch:req.body.branch,
                subject1:req.body.subject1,
                subject2:req.body.subject2,
                subject3:req.body.subject3,
                subject4:req.body.subject4,
                subject5:req.body.subject5,
                subject6:req.body.subject6,  
            }
        })
        res.status(200).json(subject);
    }catch(err){
        console.log("errorsss",err);
    }
})

routes.get("/getsubject/:semester/:branch", async(req,res)=>{
    const updateSem = req.params.semester;
    const updateBranch = req.params.branch; 
    try{
        const subject = await Subject.find({semester:updateSem,branch:updateBranch})
        res.status(200).json(subject);
    }catch(err){
        console.log("errorsss",err);
    }
})

routes.get("/getResult/:rollnumber/:semester", async(req,res)=>{
    const updateSem = req.params.semester;
    const updateRoll = req.params.rollnumber; 
    try{
        const subject = await Result.find({semester:updateSem,rollnumber:updateRoll})
        res.status(200).json(subject);
    }catch(err){
        console.log("errorsss",err);
    }
})

routes.put("/semresultupdate/:semester/:rollnumber", async(req,res)=>{
    const updateSem = req.params.semester;
    const updateRoll = req.params.rollnumber; 
    try{
        const subject = await Result.findOneAndUpdate({rollnumber:updateRoll,semester:updateSem},{
            $set:{
                name:req.body.name,
                rollnumber:req.body.rollnumber,
                semester:req.body.semester,
                fathername:req.body.fathername,
                mothername:req.body.mothername,
                subject1name:req.body.subject1name,
                subject2name:req.body.subject2name,
                subject3name:req.body.subject3name,
                subject4name:req.body.subject4name,
                subject5name:req.body.subject5name,
                subject6name:req.body.subject6name,
                subject1:req.body.subject1,
                subject2:req.body.subject2,
                subject3:req.body.subject3,
                subject4:req.body.subject4,
                subject5:req.body.subject5,
                subject6:req.body.subject6,
                totalmarks:req.body.totalmarks,
                percentage:req.body.percentage,
                branch:req.body.branch, 
            }
        })
        res.status(200).json(subject);
    }catch(err){
        console.log("errorsss",err);
    }
})

routes.delete("/deleteComment/:id", async(req,res)=>{
    const id = req.params.id;
    try{
       const allPoints =await StudentComplaints.deleteOne({_id:id});
       res.status(200).json(allPoints);
    }catch(err){
        console.log("errorsss", err);
    }

})

routes.get("/getDetail/:rollnumber", async(req,res)=>{
    const rollNumber = req.params.rollnumber;
    try{
       const student = await Student.find({rollnumber:rollNumber})
       res.status(200).json(student);
    }catch(err){
        console.log("errorsss", err);
    }
})


module.exports=routes
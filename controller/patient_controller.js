const Patient = require('../model/patient');
const Report = require('../model/report');

// regesting patient
module.exports.register = async function(req,res){
    try{
        const patient = await Patient.findOne({phone: req.body.phone});
        if(patient){
            return res.status(200).json({
                message:"Patient Information.",
                patientId: patient._id
            })
        }else{
            const patient = await Patient.create(req.body);
            return res.status(200).json({
                message:"New Patient registred.",
                patientId: patient._id
            })
        }
    }catch(err){
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
} 

module.exports.createReport = async function(req,res){
    try{
        const patient = await Patient.findById(req.params.id);
        if(patient){
            const report = await Report.create({
                createdBy: req.user._id,
                status: req.body.status,
                date: new Date(),
                patient: patient._id
            })
            
            patient.reports.push(report);
            patient.save();
    
            return res.status(200).json({
                message:"New Report Created.",
            })
    
        }else{
            return res.status(401).json({
                message:"Patient Not Found"
            })
        }
    }catch(err){
        console.log("******", err);

        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
} 

module.exports.allReport = async function(req,res){
    try{
        const patient = await Patient.findById(req.params.id);
        if(patient){
            const popPatient = await Patient.findById(req.params.id).sort('createdAt').populate("reports");
            return res.status(200).json({
                message:"all Reports",
                allReports: popPatient
            })
    
        }else{
            return res.status(401).json({
                message:"Patient Not Found"
            })
        }
    }catch(err){
        console.log("******", err);

        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
} 
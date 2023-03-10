const Report = require('../model/report');

module.exports.allStatus = async function(req,res){
    try{
        const reports = await Report.find({status:req.params.status})

        if(reports.length > 0){
            return res.status(200).json({
                message:"All report of this status",
                reports: reports
            })
        }else{
            return res.status(200).json({
                message:"Could not find the report for this status",
            })
        }
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
} 

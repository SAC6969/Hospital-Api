const Doctor = require('../model/doctor');
const jwt = require('jsonwebtoken');

//doctor sign up using name ,email , password
module.exports.signUp = async function(req,res){  
    try{
        let findIfExist = await Doctor.findOne({email: req.body.email});
        if(findIfExist){
            // returning if doctor already exists with same email
            return res.status(200).json({
                message: "Email Already Exists"
            })
        }
        
        // creating doctor ids
        let doctor = await Doctor.create(req.body);
        return res.status(200).json({
            message: "Doctor Sign Up Successfully",
            doctor : doctor._id
        })
    }catch(err){
        return res.status(500).json({
            message: "Internal Server Error",
        })
    }
}

//doctor sign in using  email , password
module.exports.signIn = async function(req,res){  
    try{
        //finding doctor using email
        const doctor = await Doctor.findOne({email: req.body.email});
        if(doctor && doctor.password === req.body.password){
            //if logged in with right password then create JSON WEB TOKEN
            const token = jwt.sign({ id: doctor._id },'Hospital_Api',{expiresIn: "1d"});
            return res.status(200).json({
                message: "Doctor Sign In Successfully",
                success : "true",
                token: token
            })
        }else{
            return res.status(401).json({
                message: "Invalid Username/Password",
                success : "false"
            })
        }
    }catch(err){
        return res.status(500).json({
            message: "Internal Server Error",
        })
    }
}


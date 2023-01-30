const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    phone:{
        type: String,
        require: true,
        unique: true
    },
    reports:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref: 'Report'
        }
    ]
},{
    timestamps: true
})

const Patient = mongoose.model("Patient",patientSchema);
module.exports = Patient;
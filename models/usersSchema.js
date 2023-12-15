
const mongoose = require("mongoose");
const validator = require("validator")

const usersSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trime:true
    },
    lname:{
        type:String,
        required:true,
        trime:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw Error('not valid email')
            }
        }
    },
    mobile:{
        type:String,
        require:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
    gender:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    },
    profile:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    datecreated:Date,
    dateUpdated:Date
})

// model
const users = new mongoose.model("users",usersSchema)

module.exports = users;

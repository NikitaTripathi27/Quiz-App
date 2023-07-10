const mongoose = require('mongoose')

const quesSchema = new mongoose.Schema({
    question:{
        type:String,
        required:true,
        trim:true,
    },
    options:{
        type:[String],
        required:true,
        trim:true
    },
 
    answer:{
        type:[String],
        required:true,
        trim:true
    }
})

const Ques = mongoose.model('Ques',quesSchema)

module.exports ={Ques}

   // option2:{
    //     type:String,
    //     required:true,
    //     trim:true
    // },
    // option3:{
    //     type:String,
    //     required:true,
    //     trim:true
    // },
    // option4:{
    //     type:String,
    //     required:true,
    //     trim:true
    // },
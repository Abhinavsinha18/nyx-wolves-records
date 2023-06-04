const mongoose = require('mongoose');

let schemaRecord = mongoose.Schema({
    title: {
        type :String,
        required: true
    },
    description:{
        type: String,
        required : true
    },
    images : {
        type : String,
        required : true
    },
    createdAt: {
        type: Date,
        default: Date.now,
      }
})


const Record =  mongoose.model('records',schemaRecord);

module.exports = Record;
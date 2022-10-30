const mongoose = require('mongoose');
const { Schema } = mongoose;

const CaseSchema = new Schema({
    address:{
        type: String,
        required: true
    },
    aboutCase:{
        type: String,
        required: true
    },
    caseSpecific:{
        type: String,
        required: true
    },
    aboutYou:{
        type: String,
        required: true
    },
    witness:{
        type: String,
        required: true
    },
    strategy:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    phone:{
        type: Number
    },
    email:{
        type: String
    }
  });
  const Case = mongoose.model('case', CaseSchema);
  module.exports = Case;
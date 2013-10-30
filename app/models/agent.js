//=============================================================================
//  Module dependencies.
//=============================================================================

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//=============================================================================
//  Role Schema
//=============================================================================

var AgentSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    agencyname: {
        type: String,
        default: '',
        trim: true
    },
    agencylink: {
        type: String,
        default: '',
        trim: true
    },
    address1: {
        type: String,
        default: '',
        trim: true
    },
    address2: {
        type: String,
        default: '',
        trim: true
    },
    city: {
        type: String,
        default: '',
        trim: true
    },
    state: {
        type: String
    },
    zip: {
        type: Number
    },
    email: {
        type: String,
        default: '',
        trim: true
    },
    phone: {
        type: Number
    },
    fax: {
        type: Number
    },
    site: {
        type: String,
        default: '',
        trim: true
    },
    fiction: {
        type: [String],
        trim: true
    },
    nonfiction: {
        type: [String],
        trim: true
    }
});

//=============================================================================
//  Validations
//=============================================================================

// TODO

//=============================================================================
//  Statics
//=============================================================================


mongoose.model('Agent', AgentSchema);

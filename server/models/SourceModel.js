const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// WRITE THE SCHEMA HERE
//database of spec sources
//scheme tells database that a spec source is a thing with an id, name, and email
const sourceSchema = new Schema({
    id: { type: Number, required: true }, //required makes the field necessary to fill out
    name: { type: String, required: true},
    email: { type: String, required: true }
})

const sources = mongoose.model('sources', sourceSchema);

module.exports = sources;
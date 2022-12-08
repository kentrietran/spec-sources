const data = require("../data");
const sources = require('../models/SourceModel');

module.exports = {
    add_source: (req, res) => {
        sources.create(req.body)
        .then(sourcesData =>{
            console.log(sourcesData);
            res.json({"message": "OK2", data: sourcesData});
        })
        .catch(err=>{
            console.log(err);
            res.json(err);
        })
    },
    sources: (req,res)=>{
        sources.find({})
        .then(sourcesData => {
            console.log(sourcesData);
            res.json({"message": "OK", data: sourcesData});
        })
        .catch(err=>{
            console.log(err);
            res.json(err);
        })
        
    },
    
    delete_source: (req, res) => {
        sources.findOneAndDelete({id: req.params.id})
        .then(sourcesData =>{
            console.log(sourcesData);
            res.json({"message":"OK", data: sourcesData})
        })
        .catch(err=>{
            console.log(err);
            res.json(err);
        })
    },
};

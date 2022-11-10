const data = require("../data");
module.exports = {
    hello: (req, res) => {
        res.json({"message": "Hello World!"});
    },
    sources: (req, res) => {
        res.json({"message": "Sources Snatched (success!)", data: data.sources});
    },
    add_source: (req, res) => {
        data.sources.push(req.body.source);
        res.json({"message": "Sources Added", data: data.sources});
    },
    delete_source: (req, res) => {
        data.sources = data.sources.filter(delete => delete.id!==req.params.id);
        res.json({"message": "Sources Deleted", data: data.sources});
    }
};
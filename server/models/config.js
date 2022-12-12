const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../../.env')});

const dbUser = process.env.DBUSER;
const dbName = process.env.DBNAME;
const dbPassword = process.env.DBPASSWORD;
const dbCollection = process.env.DBCOLLECTION;
const discardAfterXDays = 14;
const URI = `mongodb+srv://${dbUser}:${dbPassword}@${dbName}.7mfnpbj.mongodb.net/${dbCollection}?retryWrites=true&w=majority`;


module.exports = {
    URI: URI,
    discardAfterXDays: discardAfterXDays
};
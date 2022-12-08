require('dotenv').config();

const dbUser = process.env.DBUSER;
const dbName = process.env.DBNAME;
const dbPassword = process.env.DBPASSWORD;
const discardAfterXDays = 14;
//const URI = `mongodb+srv://${dbUser}:${dbPassword}@${dbName}.7mfnpbj.mongodb.net/?retryWrites=true&w=majority`;


const URI = `mongodb+srv://toonwuka:${dbPassword}@specsourcepractice.7mfnpbj.mongodb.net/?retryWrites=true&w=majority
`;


module.exports = {
    URI: URI,
    discardAfterXDays: discardAfterXDays
};
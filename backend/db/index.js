var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost5432/tenantable";
var db = pgp(connectionString);


//Begin writing a function to retrieve all tenants
// console.log(db.any('SELECT * FROM tenants'))

//Begin writing a function to retrieve a specific tenant by username
// console.log(db.one('SELECT * FROM tenants WHERE username = $1', somethinghere))




module.exports = db;
 

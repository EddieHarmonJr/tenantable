var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost/tenantable";
var db = pgp(connectionString);

module.exports = db;
  
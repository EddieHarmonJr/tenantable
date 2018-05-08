const pgp = require("pg-promise")({});
const connectionString = "postgres://localhost/tenantable";
const db = pgp(connectionString);

const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");


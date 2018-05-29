var pgp = require('pg-promise')();
var connectionString = ('postgres://localhost/tenantable');
var db = pgp(connectionString);


//Begin writing a function to retrieve all tenants
// console.log(db.any('SELECT * FROM tenants'))

//Begin writing a function to retrieve a specific tenant by username
// console.log(db.one('SELECT * FROM tenants WHERE username = $1', somethinghere))

function getAllTenants(req, res, next) {
    console.log(req.params)
    // let username = req.params.username
    db.one("SELECT * FROM tenants WHERE username=$1", [req.params.username])
        .then((data) => {
            res.status(200)
            .json({
                data: data
            })
        })
        .catch((err) => {
            console.log(err)
            next(err)
        });
}


module.exports = {getAllTenants}
 

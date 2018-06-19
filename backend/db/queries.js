const pgp = require("pg-promise")({});
const connectionString = "postgres://localhost/tenantable2";
const db = require("./index");

const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

// AUTHENTICATION ======================================================================
const loginUser = (req, res, next) => {
  passport.authenticate("local", {});
  const authenticate = passport.authenticate("local", (err, user, info) => {
    if (err) {
      res.status(500).send("error while trying to log in");
    } else if (!user) {
      res.status(401).send("invalid username/password");
    } else if (user) {
      req.logIn(user, function (err) {
        if (err) {
          res.status(500).send("error");
        } else {
          res.status(200).send({ ...req.user, password_digest: null });
        }
      });
    }
  });
  return authenticate(req, res, next);
};


getAllUsers = (req, res, next) => {
  console.log(req.params)
  // let username = req.params.username
  db.any("SELECT * FROM users WHERE istenant = true")
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


getAllLandlords = (req, res, next) => {
  console.log(req.params)
  // let username = req.params.username
  db.any("SELECT * FROM users WHERE istenant = false")
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


function registerUser(req, res, next) {
  const hash = authHelpers.createHashPassword(req.body.password);
  db
    .none(
      "INSERT INTO users (username, email, password_digest, bio, profile_pic) VALUES (${username}, $(email), ${password_digest}, ${bio}, ${profile_pic})",
      {
        username: req.body.username,
        email: req.body.email,
        password_digest: hash
        // bio: req.body.bio
        // profile_pic: req.body.profile_pic
      }
    )
    .then(() => {
      res.status(200).json({
        message: "Registration successful."
      });
    })
    .catch(err => {
      res.status(500).json({
        message: `Registration Failed    `,
        err
      });
    });
}

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send("Logged out successfully");
}

// function getUser(req, res, next) {
//   db
//     .one("SELECT * FROM users WHERE username=${username}", {
//       username: req.user.username
//     })
//     .then(data => {
//       res.status(200).json({ user: data });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         data: "Error",
//         err
//       });
//     });
// }

function getSingleUser(req, res, next) {
  db
    .one("SELECT * FROM users WHERE username=${username}", {
      username: req.params.username
    })
    .then(data => {
      res.status(200).json({ user: data });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        data: "Error",
        err
      });
    });
}

function getAllApartments(req, res, next) {
  console.log(req.params)
  db.any("SELECT * FROM apartments")
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



function getAllRatings(req, res, next) {
  db
    .any("SELECT * FROM reviews", {
      ratings: req.params.ratings
    })
    .then(data => {
      res.status(200).json({ user: data });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        data: "Error",
        err
      });
    });
}



function getUserRating(req, res, next) {
  console.log('REQ!', req)
  db
    .one(`SELECT * FROM reviews WHERE user_id = ${user_id}`, {
      user_id: req.params.user_id
    })
    .then(data => {
      res.status(200).json({ user: data });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        data: "Error",
        err
      });
    });
}


function editUser(req, res, next) {
  db
    .none(
      "UPDATE users SET email=${email}, bio=${bio}, profile_pic=${profile_pic} WHERE username=${username}",
      {
        email: req.body.email,
        bio: req.body.bio,
        profile_pic: req.body.profile_pic,
        username: req.user.username
      }
    )
    .then(() => {
      res.status(200).json({
        message: "successfully updated user"
      });
    })
    .catch(err => {
      res.status(500).json({
        message: 'Registration Failed',
        err
      });
    });
}

module.exports = {getSingleUser,getAllUsers,getAllLandlords,getAllApartments,getAllRatings,getUserRating,editUser,logoutUser,registerUser}

const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUserOrEmail = (req, res, next) => {
  //checkUser
  //sql=Select * FROM user WHERE username = req.username and=(,)
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({ message: "Failed Username already use!!" });
      return;
    } //CheckEmail
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        res.status(400).send({ message: "Failed Email already use!!" });
        return;
      }
      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed Role does not exist " + req.body.roles[i],
        });
      }
    }
  }
  next();
};

const verifySignUp = {
  checkDuplicateUserOrEmail: checkDuplicateUserOrEmail,
  checkRolesExisted: checkRolesExisted,
};

module.exports = verifySignUp;

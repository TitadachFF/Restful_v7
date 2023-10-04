const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Op = db.Sequelize.Op;
//SignUp
exports.signup = (req, res) => {
    //Svae User to DB
    User.create({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8, )
        }).then(
            user => {
                if (req.body.roles) {
                    Role.findAll({
                        where: {
                            name: {
                                [Op.or]: req.body.roles
                            },
                        },
                    }).then(roles => {
                        user.setRoles(roles).then(() => {
                            res.send({
                                message: "User war registered successfully"
                            });
                        });

                    });

                } else {
                    //user roleId = 1 (user)
                    user.setRoles([1]).then(() => {
                        res.send({
                            message: "User war registered successfully"
                        });
                    })
                };
            })
        .catch((err) => {
            res.status(500).send({
                message: err.message
            });
        });
};

//SignIn
exports.signin = (req, res) => {
    //SELECT * FROM users WHERE username = req.body.username
    User.findOne({
        Where:{
            username: req.body.username,
        }
       
    }).then(user => {
        if (!user) {
            return res.status(404).send({
                message: "User not found"
            });
        }
        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password",
            });
        }
        const token = jwt.sign({
                id: user.id
            },
            config.secret, {
                algorithm: "HS256",
                allowInsecureKeySizes: true,
                expiresIn: 86400, //24Hours = 60*60*24

            });
        let authorities = [];
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                authorities.push("ROLES_" + roles[i].name.toUpperCase());
            }
            res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                roles: authorities,
                accessToken: token
            });
        });
    }).catch((err) => {
        res.status(500).send({
            message: err.message
        });
    });
};


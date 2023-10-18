const db = require("../models");
const config = require("../config/auth.config");
// const User = db.user;
// const Role = db.role;
// const RefreshToken = db.refreshToken;
const {
    user: User,
    role: Role,
    refreshToken: Refreshtoken
} = db;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Op = db.Sequelize.Op;

//SignUp
exports.signup = (req, res) => {
    //Save user to DB
    User.create({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
        })
        .then(
            (user) => {
                if (req.body.roles) {
                    Role.findAll({
                        where: {
                            name: {
                                [Op.or]: req.body.roles,
                            },
                        },
                    }).then(roles => {
                        user.setRoles(roles).then(() => {
                            res.send({
                                message: "User was registered successfully"
                            });
                        });
                    });
                } else {
                    //user roles = 1 {user}
                    user.setRoles([1]).then(() => {
                        res.send({
                            message: "User was registered successfully"
                        });
                    });
                }
            }).catch(err => {
            res.status(500), send({
                message: err.message
            });
        })
};


//SignIn
exports.signin = (req, res) => {
    //SELECT * FROM user WHERE username = req.body.username
    User.findOne({
        where: {
            username: req.body.username,
        }

    }).then(async (user) => {
        if (!user) {
            return res.status(404).send({
                message: "User not found"
            });
        }
        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
        if (!passwordIsValid) {
            return res.status(401).send({
                acceccToken: null,
                message: "Invalid Password"
            });
        }
        const token = jwt.sign({
                id: user.id
            },
            config.secret, {
                algorithm: "HS256",
                allowInsecureKeySizes: true,
                expiresIn: 84600, //24hr = 60 * 24
            });
        const refreshToken = await Refreshtoken.createToken(user);
        var authorities = [];
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                authorities.push("ROLES_" + roles[i].name.toUpperCase());
            }
            res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                roles: authorities,
                accessToken: token,
                refreshToken: refreshToken,
            });

        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });

    });
};

exports.refreshToken = async (req, res) => {
    const {
        refreshToken: requestToken
    } = req.body;
    if (requestToken == null) {
        return res.status(403).json({
            message: "Refresh Token is required!"
        });
    }
    try {
        let refreshToken = await Refreshtoken.findOne({
            where: {
                token: requestToken,
            },
        });
        if (!refreshToken) {
            res.status(403).json({
                message: "Refresh Token is not in database!"
            })
            return;
        }
        if (Refreshtoken.verifyExpiration(refreshToken)) {
            Refreshtoken.destroy({
                where: {
                    id: refreshToken.id
                }

            });
            res.status(403).json({
                message: "Refresh Token was expired. Please make a new signin request"
            });
            return;
        }
        const user = await refreshToken.getUser();
        let newAccessToken = jwt.sign({
                id: user.id
            },
            config.secret, {
                algorithm: "HS256",
                allowInsecureKeySizes: true,
                expiresIn: 84600, //24hr = 60 * 24
            });

        return res.status(200).json({
            acceccToken: newAccessToken,
            refreshToken: refreshToken.token
        })

    } catch (error) {
        return res.status(500).send({
            message: err
        });
    }
};
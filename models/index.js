const config = require("../config/db.config")

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  }
})
console.log(config);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);
db.refreshToken = require("./refreshToken.model")(sequelize, Sequelize);
//one to many
db.role.belongsToMany(db.user, {
  through: "users_roles"
});
//one to many
db.user.belongsToMany(db.role, {
  through: "users_roles"
});

//one to one
db.refreshToken.belongsTo(db.user, {
  foreignKey: 'userId',
  targetKey: "id"
});
db.user.hasOne(db.refreshToken, {
  foreignKey: 'userId',
  targetKey: "id"
});

db.ROLES = ("user", "admin", "moderator")

module.exports = db;
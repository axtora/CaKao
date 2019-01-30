const Sequelize = require('sequelize');
const sequelize = new Sequelize('cakao', 'root', 'aa010411', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 100,
    min: 0,
    idle: 10000,
  },
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  }
});

const User = sequelize.define('user', {
  user_id: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
})

const Important = sequelize.define('important', {
  url: {
    type: Sequelize.STRING,
  },
  tag: {
    type: Sequelize.STRING,
  }
})

User.hasMany(Important);

module.exports = {
  User,
  Important,
  Sequelize,
  sequelize
}
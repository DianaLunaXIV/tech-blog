const Sequelize = require('sequelize');

let sequelize;

if (process.env.JAWSDB_URL){
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_URI);
}

module.exports = sequelize;

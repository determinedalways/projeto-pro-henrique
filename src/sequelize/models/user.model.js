const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('user', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		username: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: true,
			validate: {
				// Nomes de usuários devem ter pelo menos três letras
				// e usar apenas letras, números e underscore.
				is: /^\w{3,}$/
			}
		}
	});
};

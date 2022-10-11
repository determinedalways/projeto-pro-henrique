const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('contact', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
        firstName: {
			allowNull: false,
			type: DataTypes.STRING
        },
        lastName: {
			allowNull: false,
			type: DataTypes.STRING
        },
        company: {
			allowNull: true,
			type: DataTypes.STRING
        },
        jobTitle: {
			allowNull: true,
			type: DataTypes.STRING
        },
        email: {
			allowNull: true,
			type: DataTypes.STRING
        },
        phone: {
			allowNull: true,
			type: DataTypes.STRING
        },
        birthday: {
			allowNull: true,
			type: DataTypes.DATE
        },
        notes: {
			allowNull: true,
			type: DataTypes.TEXT
        }
	});
};

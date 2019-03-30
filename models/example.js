module.exports = function(sequelize, DataTypes) {
	var Bounty = sequelize.define("Bounty", {
	  title: {
		type: DataTypes.TEXT,
		allowNull: false,
		validate: {
		  len: [1, 100]
		}
	  },
	  description: {
		type: DataTypes.TEXT,
		allowNull: false,
		validate: {
		  len: [1, 500]
		}
	  },
	  payment: {
		type: DataTypes.INTEGER,
		allowNull: false,
		validate: {
		  min: 0
		}
	  },
	  completed: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: false
	  }
	});
	return Bounty;
  };
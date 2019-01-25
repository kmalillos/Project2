module.exports = function(sequelize, DataTypes) {
    var DietTracker = sequelize.define("Diet Tracker", {
        diet_type: {
            type: DataTypes.ENUM("meal", "kong", "chews/bones"),
            allowNull: false,
        },
        mealTime: {
            type: DataTypes.TIME,
            allowNull: false
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });
    return DietTracker;
};
module.exports = function(sequelize, DataTypes) {
    var DietTracker = sequelize.define("DietTracker", {
        mealType: {
            // type: DataTypes.ENUM("meal", "kong", "chews/bones", "other"),
            type: DataTypes.STRING,
            allowNull: false,
        },
        mealTime: {
            type: DataTypes.TIME,
            allowNull: false
        },
        notes: {
            type: DataTypes.TEXT
        }
    }, {
        freezeTableName: true,
        timestamps: false 
    });
    return DietTracker;
};
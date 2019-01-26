module.exports = function(sequelize, DataTypes) {
    var DietTracker = sequelize.define("DietTracker", {
        dietType: {
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
        },
                freezeTableName: true,
                timestamps: false
        
    }, {
        freezeTableName: true,
            timestamps: false 
    });
    return DietTracker;
};
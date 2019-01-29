module.exports = function(sequelize, DataTypes) {
    var DietTracker = sequelize.define("DietTracker", {
        mealType: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Dog Food"
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        notes: {
            type: DataTypes.TEXT
        }
    }, {
        freezeTableName: true
    });
    return DietTracker;
};
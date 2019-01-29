module.exports = function(sequelize, DataTypes){
    var PottyTracker = sequelize.define("PottyTracker", {
        pottyType: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Pee"
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        notes: {
            type: DataTypes.TEXT,
        }
    }, {
        freezeTableName: true
    });
    return PottyTracker;
};
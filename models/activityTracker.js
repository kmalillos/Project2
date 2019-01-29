module.exports = function(sequelize, DataTypes){
    var ActivityTracker = sequelize.define("ActivityTracker", {
        activityType: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Walk"
        },
        startOrStop: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Start"
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        notes: {
            type: DataTypes.TEXT
        }
    }, {
        freezeTableName: true,
        // timestamps: false 
    });

    return ActivityTracker;
};
module.exports = function(sequelize, DataTypes){
    var ActivityTracker = sequelize.define("ActivityTracker", {
        activityType: {
            // type: DataTypes.ENUM("walk", "dog park", "daycare", "other"),
            type: DataTypes.STRING,
            allowNull: false
        },
        startTime: {
            type: DataTypes.TIME,
            allowNull: false
        },
        endTime: {
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

    return ActivityTracker;
};
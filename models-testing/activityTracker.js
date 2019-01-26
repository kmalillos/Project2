module.exports = function(sequelize, DataTypes){
    var ActivityTracker = sequelize.define("ActivityTracker", {
        activityMethod: {
            type: DataTypes.ENUM("walk", "dog park", "daycare", "other"),
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
            type: DataTypes.STRING,
            allowNull: false
        }, 
            freezeTableName: true,
            timestamps: false 
    });
    return ActivityTracker;
};
module.exports = function(sequelize, DataTypes){
    var ActivityTracker = sequelize.define("ActivityTracker", {
        activityType: {
            // type: DataTypes.ENUM("walk", "dog park", "daycare", "other"),
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Walk"
        },
        startOrStop: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Start"
        },
        // startTime: {
        //     type: DataTypes.TIME,
        //     allowNull: false
        // },
        // endTime: {
        //     type: DataTypes.TIME,
        //     allowNull: false
        // },
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
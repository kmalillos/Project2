module.exports = function(sequelize, DataTypes){
    var PottyTracker = sequelize.define("PottyTracker", {
        pottyType: {
            // type: DataTypes.ENUM("pee", "poo"),
            type: DataTypes.STRING,
            allowNull: false
        
        },
        pottyTime: {
            type: DataTypes.TIME,
            allowNull: false
        },
        notes: {
            type: DataTypes.TEXT,
        }
    }, {
        freezeTableName: true,
            timestamps: false 
    });
    return PottyTracker;
};
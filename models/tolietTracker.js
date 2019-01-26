module.exports = function(sequelize, DataTypes){
    var TolietTracker = sequelize.define("Toliet Tracker", {
        bathroom_type: {
            type: DataTypes.ENUM("pee", "poop"),
            allowNull: false
        
        },
        bathroom_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return TolietTracker;
};
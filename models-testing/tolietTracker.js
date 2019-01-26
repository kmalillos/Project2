module.exports = function(sequelize, DataTypes){
    var TolietTracker = sequelize.define("TolietTracker", {
        bathroomType: {
            type: DataTypes.ENUM("pee", "poop"),
            allowNull: false
        
        },
        bathroomTime: {
            type: DataTypes.TIME,
            allowNull: false
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true,
            timestamps: false 
    });
    return TolietTracker;
};
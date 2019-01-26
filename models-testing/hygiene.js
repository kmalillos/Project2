module.exports = function(sequelize, DataTypes){
    var Hygiene = sequelize.define("Hygiene", {
        hygieneType: {
            type: DataTypes.ENUM("groom", "nail clip", "bath"),
            allowNull: false
        
        },
        timeReceived: {
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
    return Hygiene;
};
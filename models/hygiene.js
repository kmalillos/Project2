module.exports = function(sequelize, DataTypes){
    var Hygiene = sequelize.define("Hygiene", {
        hygiene_type: {
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
    });
    return Hygiene;
};
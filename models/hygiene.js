module.exports = function(sequelize, DataTypes){
    var Hygiene = sequelize.define("Hygiene", {
        hygieneType: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Groom"
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        notes: {
            type: DataTypes.TEXT
        }
    }, {
        freezeTableName: true
    });
    return Hygiene;
};
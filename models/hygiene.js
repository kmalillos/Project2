module.exports = function(sequelize, DataTypes){
    var Hygiene = sequelize.define("Hygiene", {
        hygieneType: {
            // type: DataTypes.ENUM("groom", "nail clip", "bath", "other"),
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Groom"
        },
        // timeReceived: {
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
        freezeTableName: true
        // timestamps: false 
    });
    return Hygiene;
};
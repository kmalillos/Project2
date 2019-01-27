module.exports = function(sequelize, DataTypes){
    var PottyTracker = sequelize.define("PottyTracker", {
        pottyType: {
            // type: DataTypes.ENUM("pee", "poo"),
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Pee"
        },
        // pottyTime: {
        //     type: DataTypes.TIME,
        //     allowNull: false
        // },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        notes: {
            type: DataTypes.TEXT,
        }
    }, {
        freezeTableName: true
        // timestamps: false 
    });
    return PottyTracker;
};
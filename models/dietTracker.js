module.exports = function(sequelize, DataTypes) {
    var DietTracker = sequelize.define("DietTracker", {
        mealType: {
            // type: DataTypes.ENUM("meal", "kong", "chews/bones", "other"),
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Dog Food"
        },
        // mealTime: {
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
    return DietTracker;
};
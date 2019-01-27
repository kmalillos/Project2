module.exports = function(sequelize, DataTypes){
    var PetInfo = sequelize.define("PetInfo", {
        petName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        weight: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        freezeTableName: true,
        timestamps: false
    });

    return PetInfo;
    
};
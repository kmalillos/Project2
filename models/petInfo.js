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
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        age: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        }
    },{
        freezeTableName: true
    });

    return PetInfo;
    
};
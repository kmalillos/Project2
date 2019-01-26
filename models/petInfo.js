module.exports = function(sequelize, DataTypes){
    var PetInfo = sequelize.define("PetInfo", {
        pet_name: {
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
        freezeTable: true,
        timestamps: false
    });

    return PetInfo;
    
};
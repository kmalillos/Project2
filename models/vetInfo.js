module.exports = function(sequelize, DataTypes){
    var VetInfo = sequelize.define("Vet Info", {
        hospital: {
            type: DataTypes.STRING,
            allowNull: false
        
        },
        vet_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return VetInfo;
};